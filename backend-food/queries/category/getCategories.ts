import { CategoryModel } from "../../db";

export const getCategoriesQuery = async () => {
  const categories = await CategoryModel.find();

  const newCategories = categories.map((item) => {
    return { name: item.name, id: item._id };
  });
  console.log(newCategories);
  return categories;
};
