"use client";

import { Box, Button, Container, Grid, Stack } from "@mui/material";
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
      <Container maxWidth={"xl"}>
        <Grid
          width={"100%"}
          container
          spacing={2}
          gridRow={4}
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
                  width: "22%",
                }}
              >
                {name}
              </Button>
            );
          })}
        </Grid>

        <Grid container spacing={3} gridRow={4}>
          {foods.map(({ _id, image, name, price }) => {
            return (
              <Grid item id={_id} key={_id} gridRow={4}>
                <Image
                  src={image}
                  width={353}
                  height={270}
                  alt=""
                  style={{ border: "0", borderRadius: "10px" }}
                />
                <Stack>{name}</Stack>
                <Stack color={"#18BA51"}>{price}</Stack>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Stack>
  );
};
