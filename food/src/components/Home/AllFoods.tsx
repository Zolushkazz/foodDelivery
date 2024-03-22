"use client";

import { Box, Stack, Typography } from "@mui/material";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FoodDetail } from "../Modal/foodDetail";
import { FoodCard } from "./FoodCard";

type AllFoodsProps = {
  allFoods: FoodCatalog[];
};

export const AllFoods = ({ allFoods }: AllFoodsProps) => {
  const [userData, setUserData] = useState({
    _id: "",
    name: "",
    image: "",
    ingredients: "",
    price: "",
  });

  return (
    <Stack width={"89%"} paddingLeft={"10%"}>
      {/* <FoodDetail /> */}
      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          gap: "15px",
          marginBottom: "20px",
        }}
      >
        <Image src="/star.png" width={30} height={30} alt="" />
        <Typography sx={{ fontSize: "26px" }}>All Foods</Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          gap: "5px",
          flexWrap: "wrap",
        }}
      >
        {allFoods.map((food, index) => (
          <FoodCard {...food} key={index} />
        ))}
      </Box>
    </Stack>
  );
};
