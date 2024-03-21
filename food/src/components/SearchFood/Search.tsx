"use client";

import { Container, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { FoodCard } from "../Home/FoodCard";
import { SearchNotFound } from "./SearchNotFound";

type SearchFoodProps = {
  data: FoodCatalog[];
};

export const SearchFood = ({ data }: SearchFoodProps) => {
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
