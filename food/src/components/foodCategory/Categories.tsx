"use client";

import { Button, Grid, Stack } from "@mui/material";
import axios from "axios";
import Image from "next/image";
import { MouseEvent, useState } from "react";

type CategoryMenu = {
  categories: Categories[] | undefined;
};

export const AllCategories = ({ categories }: CategoryMenu) => {
  const [foods, setFoods] = useState<FoodCatalog[]>([]);
  const [btnColor, setBtnColor] = useState(false);

  const handleClick = async (event: MouseEvent<HTMLButtonElement>) => {
    const categoryId = event.currentTarget.id;

    try {
      const { data } = await axios.post<FoodCatalog[]>(
        "http://localhost:8000/get/foods",
        { filter: { category: categoryId } }
      );

      setFoods(data);
      setBtnColor(true);
    } catch (err: any) {
      console.log(err.message);
      setBtnColor(false);
    }
  };
  console.log(foods);
  return (
    <Stack width={"100%"}>
      <Grid
        container
        spacing={2}
        sx={{
          gap: "3%",
          alignItems: "center",
          justifyContent: "center",
          marginY: "3%",
        }}
      >
        {categories?.map(({ _id, name }) => {
          return (
            <Button
              id={_id}
              key={_id}
              onClick={handleClick}
              sx={{
                backgroundColor: btnColor ? "primary.main" : "white",
                color: btnColor ? "white" : "black",
                borderRadius: "10px",
                border: "1px solid #D6D8DB",
                width: "18%",
              }}
            >
              {name}
            </Button>
          );
        })}
      </Grid>
      {/* component orj irne */}
      {foods.map(({ _id, image, name, price }) => {
        return (
          <Stack width={"89%"} paddingLeft={"9%"}>
            <Image
              src={image}
              width={380}
              height={300}
              alt=""
              style={{ border: "0", borderRadius: "10px" }}
            />
            <Stack id={_id} key={_id}>
              <Stack>{name}</Stack>
              <Stack>{price}</Stack>
            </Stack>
          </Stack>
        );
      })}
    </Stack>
  );
};
