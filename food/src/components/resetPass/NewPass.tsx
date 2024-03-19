"use client";

import { Container, Typography, InputLabel, Box } from "@mui/material";
import { SignupPasswordInput } from "../Signup/SignupInput";
import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";

type Password = {
  password: string;
  rePassword: string;
  email: string;
  otp: string;
  handleChange: string;
};

// type NewPassProps = {
//   setData: Dispatch<SetStateAction<Password>>;
//   data: Password;
// };
// { data, setData }: NewPassProps,

export const NewPass = (props: any) => {
  const { handleChange } = props;

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
        Шинэ нууц үг зохиох
      </Typography>
      <Box>
        <InputLabel>Нууц үг</InputLabel>
        <SignupPasswordInput handleChange={handleChange} name="password" />
      </Box>
      <Box>
        <InputLabel>Нууц үг давтах</InputLabel>
        <SignupPasswordInput handleChange={handleChange} name="rePassword" />
      </Box>
    </Container>
  );
};
