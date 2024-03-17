import { Request } from "express";
import { FoodModel } from "../../db/models";

export const getFoodsQuery = async (req: Request) => {
  const { filter = {} } = req.body;
  //empty is better than undefined

  const allFoods = await FoodModel.find();
  return allFoods;
};
