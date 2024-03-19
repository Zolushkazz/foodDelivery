import { Request } from "express";
import { CategoryModel } from "../../db";

export const getCategoryQuery = async (req: Request) => {
  const { id } = req.body;

  const category = await CategoryModel.findById({ _id: id });
  return category;
};
