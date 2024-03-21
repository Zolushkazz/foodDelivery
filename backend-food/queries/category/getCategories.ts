import { CategoryModel } from "../../db";

export const getCategoriesQuery = async () => {
  const categories = await CategoryModel.find();

  return categories;
};
