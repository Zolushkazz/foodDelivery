"use client";

import { SignupPasswordInput } from "./SignupInput";
import { Box, OutlinedInput, Container, Typography } from "@mui/material";
import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";
import { useState } from "react";
import axios from "axios";

export const SignupComponents = (props: any) => {
  const [userData, setUserData] = useState();

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
        <SignupPasswordInput />
        <SignupPasswordInput />
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
      </Box>
    </Container>
  );
};

//password input bolgoh signup inputiig
//busd ymnii inputiig dahij hiiih mui iin input eer
//login hiij duusgah
//showPass iig pass input dre duudaj hiih props oo bolih
