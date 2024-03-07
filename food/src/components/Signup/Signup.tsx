"use client";

import Image from "next/image";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { SignupInput } from "./SignupInput";
import { Button, Grid, Stack } from "@mui/material";
import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";
import { useState } from "react";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";

export const SignupComponents = (props: any) => {
  const [isShow, setIsShow] = useState();
  const [connect, setConnect] = useState();

  const handleSubmit  = (event) =>{
    
  }

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
          <SignupInput label="" placeholder="Нэрээ оруулна уу" width="400px" />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          И-мэйл
          <SignupInput
            label=""
            placeholder="И-мэйлээ оруулна уу"
            width="400px"
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          Утасны дугаар
          <SignupInput
            label=""
            placeholder="Утасны дугаараа оруулна уу"
            width="400px"
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          Нууц үг
          <SignupInput
            label=""
            placeholder="Нууц үгээ оруулна уу"
            width="400px"
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          Нууц үг давтах
          <SignupInput
            label=""
            placeholder="Нууц үгээ оруулна уу"
            width="400px"
          />
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
        <Button
          sx={{
            backgroundColor: "#EEEFF2",
            color: "#1C20243D",
            padding: "10px",
          }}
        >
          Бүртгүүлэх
        </Button>
      </Box>
    </Container>
  );
};
