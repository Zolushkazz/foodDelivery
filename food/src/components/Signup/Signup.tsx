"use client";

import { SignupPasswordInput } from "./SignupInput";
import { Box, OutlinedInput, Container, Typography } from "@mui/material";
import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";
import { useState } from "react";
import axios from "axios";
import { ButtonSign } from "../Button";

export const SignupComponents = (props: any) => {
  const [userData, setUserData] = useState();
  const text = ["Ner", "nas", "huis"];
  const url = "http://localhost:8000/users/signup";

  //any type ugj boloh eseh?
  // const handleSubmit = async (ev: any) => {
  //   ev.preventDefault();
  //   try {
  //     await axios.post(url, userData);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  return (
    <Container
      sx={{
        width: "100vw",
        justifyContent: "center",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          gap: "30px",
          display: "flex",
          flexDirection: "column ",
          justifyContent: "space-between",
        }}
      >
        <Typography
          sx={{
            fontSize: "23px",
            textAlign: "center",
            fontWeight: "bold",
            marginTop: "30px",
          }}
        >
          Бүртгүүлэх
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          Нэр
          <OutlinedInput placeholder="Нэрээ оруулна уу"></OutlinedInput>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          И-мэйл
          <OutlinedInput placeholder="И-мэйлээ оруулна уу"></OutlinedInput>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          Утасны дугаар
          <OutlinedInput placeholder="Утасны дугаараа оруулна уу"></OutlinedInput>
        </Box>
        <Box>
          <Typography>Нууц үг</Typography>
          <SignupPasswordInput />
        </Box>
        <Box>
          <Typography>Нууц үг давтах</Typography>
          <SignupPasswordInput />
        </Box>

        <Box
          sx={{
            display: "flex",
            gap: "12px",
            fontSize: "14px",
            marginTop: "20px",
            marginBottom: "20px",
            alignItems: "center",
          }}
        >
          <CheckBoxOutlinedIcon />
          Үйлчилгээний нөхцөл зөвшөөрөх
        </Box>
        <ButtonSign
          backgroundColor="#EEEFF2"
          color="#1C20243D"
          placeholder="Бүртгүүлэх"
          borderColor=""
          width=""
          height=""
        />
      </Box>
    </Container>
  );
};
