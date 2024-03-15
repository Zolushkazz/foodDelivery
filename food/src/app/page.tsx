import { HomePage } from "@/components/Home/HomePage";
// import { FoodDetail } from "@/components/Modal/foodDetail";
import { Stack } from "@mui/material";
import React from "react";

const Home = () => {
  return (
    <Stack sx={{ width: "100vw" }}>
      <HomePage />
      {/* <FoodDetail /> */}
    </Stack>
  );
};

export default Home;
