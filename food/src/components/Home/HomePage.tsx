"use client";

import { Stack } from "@mui/material";
import { ChoicesCategory } from "./Choices";
import { AllFoods } from "./AllFoods";
import { HomePageHero } from "./HomePageHero";

type HomePageProps = {
  allFoods: FoodCatalog[];
};

export const HomePage = ({ allFoods }: HomePageProps) => {
  return (
    <Stack>
      <HomePageHero />
      <ChoicesCategory />
      <AllFoods allFoods={allFoods} />
    </Stack>
  );
};
