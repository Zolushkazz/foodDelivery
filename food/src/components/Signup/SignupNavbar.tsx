"use client";

import Image from "next/image";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Grid, InputAdornment, Stack, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { ChangeEvent, useContext, useState } from "react";
import { UserInfo } from "../Profile/UserInfo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { UserModal } from "../Modal/userModal";
import { DataContext } from "../context/userContext";

export const SignupNavbar = (props: any) => {
  const [showModal, setShowModal] = useState(false);
  const { isLoggedIn } = useContext(DataContext);
  const [search, setSearch] = useState("");
  const pathname = usePathname();

  const handleShowModal = () => {
    setShowModal(!showModal);
  };
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setSearch(value);
  };

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
            <Link href={"/"} style={{ textDecoration: "none" }}>
              <Typography
                component="h2"
                variant="h5"
                sx={{
                  fontSize: "20px",
                  color: pathname === "/" ? "#18BA51" : "black",
                }}
              >
                Нүүр
              </Typography>
            </Link>
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
            name="search"
            onChange={handleChange}
            placeholder="Хайх"
            inputProps={{ style: { padding: "8px 10px" } }}
            InputProps={{
              startAdornment: (
                <Link href={{ pathname: "search", query: { id: search } }}>
                  <InputAdornment position="start">
                    <SearchIcon fontSize="medium" />
                  </InputAdornment>
                </Link>
              ),
            }}
          ></TextField>
          <Typography sx={{ display: "flex", gap: "10px" }}>
            <ShoppingBasketOutlinedIcon />
            Сагс
          </Typography>
          {isLoggedIn ? (
            <Link href={"/userInfo"} style={{ textDecoration: "none" }}>
              <Box
                sx={{
                  display: "flex",
                  gap: "10px",
                  alignItems: "center",
                  cursor: "pointer",
                  color: pathname === "/userInfo" ? "#18BA51" : "black",
                }}
              >
                <PersonOutlineOutlinedIcon />
                Хэрэглэгч
              </Box>
            </Link>
          ) : (
            <Box
              onClick={handleShowModal}
              sx={{
                display: "flex",
                gap: "10px",
                alignItems: "center",
                cursor: "pointer",
                color: pathname === "/userInfo" ? "#18BA51" : "black",
              }}
            >
              <PersonOutlineOutlinedIcon />
              Нэвтрэх
            </Box>
          )}
        </Box>
      </Box>
      {showModal && <UserModal handleShowModal={handleShowModal} />}
    </Stack>
  );
};
