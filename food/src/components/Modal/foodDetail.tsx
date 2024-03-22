"use client";

import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import Image from "next/image";
import axios from "axios";
import { DataContext } from "../context/userContext";
import { useContext, useState } from "react";

// export const GetFood = async () => {
//   const url = "http://localhost:8000/get/foods";
//   try {
//     const { data } = await axios.get<FoodCatalog[]>(url);
//     return data;
//   } catch (err: any) {
//     return err.message;
//   }
// };

export const FoodDetail = (props: any) => {
  const { name, ingredients, image, price, id, handleShowModal } = props;
  // const data = await GetFood();
  const { modalData, setModalData } = useContext(DataContext);
  const [count, setCount] = useState(1);

  const handleAddFoodModal = () => {
    if (modalData.some((item) => item._id === id)) {
      const index = modalData.findIndex((item) => item._id === id);
      modalData[index].quantity += count;
      setModalData([...modalData]);
    }

    const modalItem = {
      _id: id,
      name: name,
      ingredients: ingredients,
      price: price,
      image: image,
      quantity: count,
    };
    setModalData([...modalData, modalItem]);
    localStorage.setItem(
      "modalData",
      JSON.stringify([...modalData, modalItem])
    );
  };

  const countFood = (ev: any) => {
    if (ev.target.innerText === "-") {
      setCount(count - 1);
      if (count === 1) {
        return;
      }
    } else {
      setCount(count + 1);
    }
  };

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
      }}
    >
      <Stack
        sx={{
          width: "100vw",
          height: "100vh",
          backgroundColor: "rgba(0,0,0, 0.4)",
          position: "absolute",
          zIndex: "-1",
        }}
      ></Stack>
      <Stack
        direction={"row"}
        sx={{
          width: "920px",
          height: "550px",
          border: "1px solid gray",
          borderRadius: "10px",
          backgroundColor: "white",
          justifyContent: "space-evenly",
        }}
      >
        <Stack
          display={"flex"}
          width={"55%"}
          height={"100%"}
          alignItems={"center"}
          justifyContent={"center"}
          borderRadius={"10px"}
        >
          <Image src={image} width={430} height={430} alt="" />
        </Stack>
        <Stack
          width={"35%"}
          height={"100%"}
          justifyContent={"center"}
          gap={"30px"}
        >
          <Stack>
            <Typography fontSize={25} color={"black"}>
              ss{name}
            </Typography>
            <Typography fontSize={18} color={"primary.main"}>
              44{price}
            </Typography>
          </Stack>
          <Stack>
            <Typography fontSize={25}>Орц</Typography>
            <TextField>{ingredients}</TextField>
          </Stack>
          <Typography fontSize={25}>Тоо</Typography>
          <Stack direction={"row"}>
            <Button
              onClick={countFood}
              sx={{
                borderRadius: "8px",
                width: "25px",
                height: "53px",
                backgroundColor: "primary.main",
                color: "lightgray",
              }}
            >
              -
            </Button>
            {count}
            <Button
              onClick={countFood}
              sx={{
                borderRadius: "8px",
                width: "25px",
                height: "53px",
                backgroundColor: "primary.main",
                color: "lightgray",
              }}
            >
              +
            </Button>
          </Stack>
          <Button
            onClick={handleAddFoodModal}
            sx={{
              backgroundColor: "primary.main",
              borderRadius: "8px",
              color: "lightgray",
              height: "60px",
            }}
          >
            Сагслах
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};
