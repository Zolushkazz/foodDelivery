"use client";

import { Box, Container, InputLabel, Typography } from "@mui/material";
import { Input } from "../Input";
import { ChangeEvent, useState } from "react";
import { SignupPasswordInput } from "../Signup/SignupInput";

type Password = {
  email: string;
  password: string;
  rePassword: string;
};

export const SendEmailPass = () => {
  const [userData, setData] = useState<Password>({
    email: "",
    password: "",
    rePassword: "",
  });
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setData({ ...userData, [name]: value });
  };
  return (
    <Container
      sx={{
        width: "100vw",
        justifyContent: "center",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        gap: "30px",
        marginY: "9%",
      }}
    >
      <Typography sx={{ color: "#695C08", fontSize: "18px" }}>
        Таны хаяг руу сэргээх код илгээлээ
      </Typography>
      <Typography sx={{ textAlign: "center", fontSize: "23px" }} variant="h1">
        Нууц үг сэргээх
      </Typography>
      <Box>
        <SignupPasswordInput handleChange={handleChange} name="password" />
      </Box>
    </Container>
  );
};
