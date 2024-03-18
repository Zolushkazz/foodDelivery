"use client";

import { Stack, Typography, InputLabel, Container, Box } from "@mui/material";
import { SignupPasswordInput } from "../Signup/SignupInput";
import { ButtonSign } from "../Button";
import { ChangeEvent, useState } from "react";
import { Input } from "../Input";
import { useRouter } from "next/navigation";
import axios from "axios";
import Link from "next/link";

export const Login = (props: any) => {
  const { handleChange } = props;
  const [btnColor, setBtnColor] = useState(false);
  const [userData, setData] = useState({ email: "", password: "" });
  const { push } = useRouter();

  const url = "http://localhost:8000/login";
  const handleChanger = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setData({ ...userData, [name]: value });
    console.log(userData);
  };

  const handleSubmit = async (ev: any) => {
    ev.preventDefault();
    if (!userData.email || !userData.password) {
      setBtnColor(true);
    } else {
      setBtnColor(false);
    }
    try {
      const { data } = await axios.post(url, userData);

      localStorage.setItem("token", data);
      if (data === "invalid code") {
        console.log("err");
      } else {
        push("/");
      }
    } catch (err) {
      alert("Invalid email or password");
    }
  };

  const jumpToSignup = () => {
    push("/signup");
  };
  return (
    <Container
      sx={{
        width: "100vw",
        justifyContent: "center",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        marginY: "5%",
      }}
    >
      <Stack
        sx={{
          width: "500px",
          display: "flex",
          gap: "30px",
          marginBottom: "20px",
          position: "relative",
        }}
      >
        <Typography sx={{ fontSize: "23px", textAlign: "center" }}>
          Нэвтрэх
        </Typography>
        <Stack>
          <InputLabel>Имэйл</InputLabel>
          <Input
            placeholder="И-мэйл ээ оруулна уу"
            text=""
            name="email"
            onChange={handleChanger}
          />
        </Stack>
        <SignupPasswordInput name="password" handleChange={handleChanger} />

        <Box
          sx={{
            position: "absolute",
            top: 235,
            right: 10,
          }}
        >
          <Link
            href="/resetPassword"
            style={{ textDecoration: "none", color: "black" }}
          >
            Нууц үг сэргээх
          </Link>
        </Box>
        <Box
          sx={{
            marginY: "30px",
            gap: "30px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <ButtonSign
            placeholder="Нэвтрэх"
            backgroundColor="primary.main"
            color="common.white"
            borderColor="0"
            width="500px"
            height="50px"
            onClick={handleSubmit}
            disabled={
              userData.email === "" || userData.password === "" ? true : false
            }
          />
          <Typography sx={{ textAlign: "center" }}>эсвэл</Typography>
          <ButtonSign
            placeholder="Бүртгүүлэх"
            backgroundColor="white"
            color="gray"
            borderColor="#18BA51"
            width="500px"
            height="50px"
            onClick={jumpToSignup}
            disabled={false}
          />
        </Box>
      </Stack>
    </Container>
  );
};
