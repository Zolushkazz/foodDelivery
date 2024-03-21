import { Request } from "express";
import { CategoryModel } from "../../db";

export const createCategoryQuery = async (req: Request) => {
  const { name } = req.body;

  const result = await CategoryModel.create({
    name,
    createdAt: new Date(),
    updatedAt: new Date(),
  });

  return result._id;
};
