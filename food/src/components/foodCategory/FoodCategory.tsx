// "use client";

import { Button, Grid, Stack } from "@mui/material";
import axios from "axios";

type Category = {
  name: string;
  id: string;
};
type OneCategory = {
  id: string;
  name: string;
  foodId: [string];
};

export const GetFoodCategory = async () => {
  const getAllCategories = "http://localhost:8000/categories";
  const getOneCategory = "http://localhost:8000/category";

  const { data } = await axios.get<Category[]>(getAllCategories);
  const response = await axios.get<OneCategory>(getOneCategory);
  console.log(response.data);

  return (
    <Stack>
      <Grid container spacing={2}>
        {data?.map(({ name }, index) => {
          return (
            <Grid key={index}>
              <Button sx={{ color: "lightgray" }}> {name} </Button>
            </Grid>
          );
        })}
      </Grid>
    </Stack>
  );
};
