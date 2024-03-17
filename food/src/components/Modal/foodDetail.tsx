import { Box, Button, Stack, Typography } from "@mui/material";
import { Get } from "../Home/AllFoods";
import Image from "next/image";

export const FoodDetail = async () => {
  const data = await Get();

  //   if (data._id !== ) {
  //     return "Not matching";
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
