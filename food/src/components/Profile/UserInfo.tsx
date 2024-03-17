"use client";

import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import Image from "next/image";
import { ChangeEvent, useState } from "react";
import { CustomInput } from "./CustomInput";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import OutputOutlinedIcon from "@mui/icons-material/OutputOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import Link from "next/link";

type UserInformation = {
  name: string;
  email: string;
  phone: string;
};

export const UserInfo = () => {
  const [userData, setUserData] = useState<UserInformation>({
    name: "",
    email: "",
    phone: "",
  });
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginY: "5%",
      }}
    >
      <Stack sx={{ position: "relative", width: "6%", height: "50%" }}>
        <Stack
          py={"50%"}
          border={1}
          borderRadius={"50%"}
          overflow={"hidden"}
          position={"relative"}
        >
          <Image fill objectFit="cover" src={""} alt="" />
        </Stack>
        <Stack
          sx={{
            position: "absolute",
            bottom: "0",
            right: "5%",
            width: "20%",
            height: "20%",
            borderRadius: "50%",
            border: "1px solid lightgray",
            backgroundColor: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#18BA51",
          }}
        >
          <EditOutlinedIcon fontSize="small" />
        </Stack>
      </Stack>
      <Typography py={2}>{userData.name}</Typography>

      <Box>
        <Stack gap={3}>
          <CustomInput label="Таны нэр" type="text" />
          <CustomInput label="Утасны дугаар" type="number" />
          <CustomInput label="Имэйл хаяг" type="email" />
          <Button
            sx={{
              gap: "15px",
              color: "black",
              py: "8px",
              px: "16px",
              justifyContent: "start",
              width: "100%",
            }}
          >
            <Stack>
              <HistoryOutlinedIcon />
            </Stack>
            <Typography fontSize={13}>Захиалгын түүх</Typography>
          </Button>
          <Link href={"/login"} style={{ textDecoration: "none" }}>
            <Button
              sx={{
                gap: "15px",
                color: "black",
                px: "16px",
                py: "8px",
                justifyContent: "start",
                width: "100%",
              }}
            >
              <Stack>
                <OutputOutlinedIcon />
              </Stack>
              <Typography fontSize={13}>Гарах</Typography>
            </Button>
          </Link>
        </Stack>
      </Box>
    </Box>
  );
};
