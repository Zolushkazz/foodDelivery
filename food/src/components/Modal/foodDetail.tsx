import { Box, Button, Stack, Typography } from "@mui/material";
import Image from "next/image";
import axios from "axios";

type FoodCatalog = {
  _id: string;
  name: string;
  image: string;
  ingredients: string;
  price: string;
};

export const GetFood = async () => {
  const url = "http://localhost:8000/food";
  try {
    const { data } = await axios.get<FoodCatalog[]>(url);
    return data;
  } catch (err: any) {
    return err.message;
  }
};

export const FoodDetail = async () => {
  const data = await GetFood();
  // console.log(data);

  //   if (data._id !== ) {
  //     return "Not matching";s
  //   } else {
  //   }

  return (
    <Stack
      sx={{
        width: "100vw",
        height: "100vh",
        position: "fixed",
        zIndex: "40",
        top: "0",
        left: "0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(0,0,0, 0.4)",
      }}
    >
      <Stack
        sx={{
          width: "920px",
          height: "550px",
          border: "1px solid gray",
          borderRadius: "10px",
          backgroundColor: "white",
        }}
      >
        <Image src={""} width={100} height={100} alt="" />

        <Typography>{data.name}</Typography>
        <Typography>{data.price}</Typography>
        <Typography>{data.ingredients}</Typography>
      </Stack>
    </Stack>
  );
};
