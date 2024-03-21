import { AllCategories } from "@/components/foodCategory/Categories";
import axios from "axios";

const FoodCategory = async () => {
  try {
    const { data } = await axios.get<CategoryType[]>(
      "http://localhost:8000/get/categories"
    );

    return data;
  } catch (err) {
    console.log(err);
  }
};

const Menu = async () => {
  const getCategories = await FoodCategory();
  return <AllCategories categories={getCategories} />;
};

export default Menu;
