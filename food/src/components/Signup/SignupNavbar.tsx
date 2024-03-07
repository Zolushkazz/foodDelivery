"use client";

import Image from "next/image";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { InputAdornment, Stack, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

export const SignupNavbar = () => {
  return (
    <Stack>
      <Box
        sx={{
          display: "flex",
          gap: "20px",
          justifyContent: "space-between",
          alignContent: "center",
          paddingX: "10%",
        }}
      >
        <Box sx={{ display: "flex", gap: "20px", alignItems: "center" }}>
          <Image src="/Main.png" alt="" width={41} height={41} />
          <Box sx={{ display: "flex", gap: "25px" }}>
            <Typography component="h2" variant="h5" sx={{ fontSize: "20px" }}>
              Нүүр
            </Typography>
            <Typography component="h2" variant="h5" sx={{ fontSize: "20px" }}>
              Хоолны цэс
            </Typography>
            <Typography component="h2" variant="h5" sx={{ fontSize: "20px" }}>
              Хүргэлтийн бүс
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: "30px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TextField
            placeholder="Хайх"
            inputProps={{ style: { padding: "8px 10px" } }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon fontSize="medium" />
                </InputAdornment>
              ),
            }}
          ></TextField>
          <Typography sx={{ display: "flex", gap: "10px" }}>
            <ShoppingBasketOutlinedIcon />
            Сагс
          </Typography>
          <Typography sx={{ display: "flex", gap: "10px" }}>
            <PersonOutlineOutlinedIcon />
            Нэвтрэх
          </Typography>
        </Box>
      </Box>
    </Stack>
  );
};
