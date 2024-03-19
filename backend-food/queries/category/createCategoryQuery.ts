import { Request } from "express";
import { CategoryModel } from "../../db";

export const createCategoryQuery = async (req: Request) => {
  const { name, foodIds } = req.body;

  const result = await CategoryModel.create({
    name,
    foodId: [...foodIds],
    createdAt: new Date(),
    updatedAt: new Date(),
  });

  return result._id;
};
