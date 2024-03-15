import { FoodModel } from "../../db/models";

export const getFoodsQuery = async () => {
  const allFoods = await FoodModel.find();
  return allFoods;
};
