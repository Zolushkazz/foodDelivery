import { Request } from "express";
import { OrderModel } from "../../db/models/order";
import { FoodModel, UserModel } from "../../db";
import { ORDER_PROCESS } from "../../constants";

const getFoodPrice = async (foodIds: string[]) => {
  const prices = Promise.all(
    foodIds.map(async (el) => {
      const result = await FoodModel.findById({ _id: el });
      return result?.price;
    })
  );
  console.log(prices);
  return prices;
};

export const orderQuery = async (req: Request) => {
  const { userId, foods, khoroo, district, apartment } = req.body;

  const isUserExist = await UserModel.findById({ _id: userId });

  if (!isUserExist) {
    throw new Error("User not exist");
  }

  //orderNumber udur udruur shinechlegdene
  const earlyToday = new Date();
  earlyToday.setHours(0, 0, 0, 0);

  const now = new Date();

  const howManyAreThere = await OrderModel.countDocuments({
    createdAt: {
      $gte: earlyToday,
      $lte: now,
    },
  });

  const totalPrice = await getFoodPrice(foods);
  
  const sumOfTotalPrice = totalPrice.reduce(
    (accumulator: number, currentValue) => accumulator + Number(currentValue),
    0
    );
    console.log(sumOfTotalPrice);

  const result = await OrderModel.create({
    userId,
    foods,
    khoroo,
    district,
    apartment,
    orderNumber: howManyAreThere + 1,
    totalPrices: sumOfTotalPrice.toString(),
    process: ORDER_PROCESS.PENDING,
  });
  return result;
};
