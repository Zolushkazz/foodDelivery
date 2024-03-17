import { Box, Grid, Stack, Typography } from "@mui/material";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";

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

export const Get = async () => {
  const url = "http://localhost:8000/food";
  try {
    const { data } = await axios.get<FoodCatalog[]>(url);
    return data;
  } catch (err: any) {
    return err.message;
  }
};

export const AllFoods = async () => {
  const data = await Get();

  return (
    <Box width={"100vw"} paddingLeft={"10%"}>
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
          gap: "15px",
          flexWrap: "wrap",
        }}
      >
        {data?.map((el, index: number) => {
          return (
            <Box
              key={index}
              sx={{
                width: "550px",
                height: "400px",
                "&:hover": {
                  transform: "scale(1.05)",
                  transition: "all 0.2s ease-in-out",
                },
              }}
            >
              <Box sx={{ position: "relative" }}>
                <Image
                  src={el.image}
                  width={420}
                  height={300}
                  alt=""
                  style={{ border: "0", borderRadius: "10px" }}
                />
              </Box>
              <Box>
                <Typography fontSize={23}>{el.name}</Typography>
                <Box>
                  <Typography fontSize={18} color={"#18BA51"}>
                    {el.price}
                  </Typography>
                </Box>
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};
