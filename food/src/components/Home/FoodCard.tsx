"use client";

import { Box, Typography } from "@mui/material";
import Image from "next/image";

type FoodCardProps = {
  image: string;
  name: string;
  price: string;
};

export const FoodCard = ({ image, name, price }: FoodCardProps) => {
  return (
    <Box
      sx={{
        width: "400px",
        height: "400px",
        "&:hover": {
          transform: "scale(1.05)",
          transition: "all 0.2s ease-in-out",
        },
      }}
    >
      <Box sx={{ position: "relative" }}>
        <Image
          src={image}
          width={380}
          height={300}
          alt=""
          style={{ border: "0", borderRadius: "10px" }}
        />
      </Box>
      <Box>
        <Typography fontSize={23}>{name}</Typography>
        <Box>
          <Typography fontSize={18} color={"#18BA51"}>
            {price}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
