"use client";

import Image from "next/image";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { SignupInput } from "./SignupInput";

export const SignupComponents = () => {
  return (
    <Container>
      <Box sx={{ width: "100vw", alignItems: "center" }}>
        <Typography>Бүртгүүлэх</Typography>
        <SignupInput />
      </Box>
    </Container>
  );
};
