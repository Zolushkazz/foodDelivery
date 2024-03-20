import { AllCategories } from "@/components/foodCategory/Categories";
import { GetFoodCategory } from "@/components/foodCategory/FoodCategory";
import { Stack } from "@mui/material";
import React from "react";

const FoodCategory = () => {
  return (
    <Stack>
      {/* <GetFoodCategory /> */}
      <AllCategories />
    </Stack>
  );
};

export default FoodCategory;
