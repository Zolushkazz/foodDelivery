"use client";

import { Container, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { FoodCard } from "../Home/FoodCard";
import Image from "next/image";
import { SearchNotFound } from "./SearchNotFound";

type FoodCatalog = {
  _id: string;
  name: string;
  image: string;
  ingredients: string;
  price: string;
};

type SearchFoodProps = {
  data: FoodCatalog[];
};

export const SearchFood = async ({ data }: SearchFoodProps) => {
  const [search, setSearch] = useState("");

  return (
    <Stack
      direction={"row"}
      sx={{
        width: "90%",
        gap: "20px",
        justifyContent: "center",
        flexWrap: "wrap",
        alignItems: "center",
        my: "2%",
      }}
    >
      {data.map((food, index) => (
        <FoodCard {...food} key={index} />
      ))}
      {data?.length === 0 && <SearchNotFound />}
    </Stack>
  );
};
