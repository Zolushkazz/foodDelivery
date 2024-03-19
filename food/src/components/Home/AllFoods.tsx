"use client";
import { Box, Stack, Typography } from "@mui/material";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FoodDetail } from "../Modal/foodDetail";
import { FoodCard } from "./FoodCard";

//   useEffect(() => {

// const urlCreate = "http://localhost:8000/createFood";
//     const create = async () => {
//       try {
//         await axios.post(urlCreate);
//       } catch (err) {
//         alert("Invalid email or password");
//       }
//     };
//     create();
//   });
type FoodCatalog = {
  _id: string;
  name: string;
  image: string;
  ingredients: string;
  price: string;
};

const getFoods = async () => {
  const url = "http://localhost:8000/food";

  const { data } = await axios.get<FoodCatalog[]>(url);
  return data;
};

export const AllFoods = async () => {
  const [userData, setUserData] = useState({
    _id: "",
    name: "",
    image: "",
    ingredients: "",
    price: "",
  });

  const foods = await getFoods();

  return (
    <Stack width={"89%"} paddingLeft={"10%"}>
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
        {foods.map((food, index) => (
          <FoodCard {...food} key={index} />
        ))}
      </Box>
    </Stack>
  );
};
