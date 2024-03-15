"use client";

import { Box, Container, InputLabel, Typography } from "@mui/material";
import { ChangeEvent, useState } from "react";
import { SignupPasswordInput } from "../Signup/SignupInput";

type Password = {
  email: string;
  password: string;
  rePassword: string;
  otp: string;
  handleChange: any;
};

export const SendEmailPass = (props: any) => {
  const { handleChange } = props;
  const [userData, setData] = useState<Password>({
    email: "",
    password: "",
    rePassword: "",
    otp: "",
    handleChange: "",
  });
  // const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = event.target;
  //   setData({ ...userData, [name]: value });
  // };
  return (
    <Container
      sx={{
        justifyContent: "center",
        display: "flex", 
        alignItems: "center",
        flexDirection: "column",
        gap: "30px",
      }}
    >
      <Typography sx={{ textAlign: "center", fontSize: "23px" }} variant="h1">
        Нууц үг сэргээх
      </Typography>
      <Typography sx={{ color: "#695C08", fontSize: "18px" }}>
        Таны хаяг руу сэргээх код илгээлээ
      </Typography>
      <Box>
        <SignupPasswordInput handleChange={handleChange} name="otp" />
      </Box>
    </Container>
  );
};
