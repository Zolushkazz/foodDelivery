import { Request } from "express";
import { FoodModel } from "../../db/models";

export const createFoodQuery = async (req: Request) => {
  const { name, price, image, ingredients } = req.body;

  const result = await FoodModel.create({ name, price, image, ingredients });
  return result._id;
};
