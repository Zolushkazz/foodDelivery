"use client";

import { Stack, Typography, InputLabel, Container, Box } from "@mui/material";
import { SignupPasswordInput } from "../Signup/SignupInput";
import { ButtonSign } from "../Button";
import { ChangeEvent, useState } from "react";
import { Input } from "../Input";
import { useRouter } from "next/navigation";
import axios from "axios";
import Link from "next/link";

export const UserModal = (props: any) => {
  const { handleChange } = props;
  const [xBtn, setXbtn] = useState(false);
  const [btnColor, setBtnColor] = useState(false);
  const [data, setData] = useState({ email: "", password: "" });
  const { push } = useRouter();
  const url = "http://localhost:8000/login";

  const handleChanger = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
    console.log(data);
  };

  const handleSubmit = async (ev: any) => {
    ev.preventDefault();
    try {
      await axios.post(url, data);
      push("/");
    } catch (err) {
      alert("Invalid email or password");
    }
  };

  const jumpToSignup = () => {
    push("/signup");
  };
  const Delete = () => {
    setXbtn(!xBtn);
  };

  return (
    <Stack
      onClick={Delete}
      sx={{
        width: "100vw",
        height: "100vh",
        position: "fixed",
        zIndex: "40",
        top: "0",
        left: "0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(0,0,0, 0.4)",
      }}
    >
      <Stack
        sx={{
          width: "500px",
          height: "600px",
          display: "flex",
          gap: "30px",
          position: "relative",
          backgroundColor: "white",
          justifyContent: "center",
          paddingX: "30px",
          border: "2px solid gray",
          borderRadius: "8px",
        }}
      >
        <Typography sx={{ fontSize: "23px", textAlign: "center" }}>
          Нэвтрэх
        </Typography>
        <Stack sx={{ width: "500px" }}>
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
            top: 280,
            right: 30,
          }}
        >
          <Link href="/resetPassword">Нууц үг сэргээх</Link>
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
            backgroundColor="#EEEFF2"
            color="#1C20243D"
            borderColor=""
            width="500px"
            height="50px"
            onClick={handleSubmit}
            disabled={data.email === "" || data.password === "" ? true : false}
            style={{
              backgroundColor: btnColor ? "rgba(24,186,81,255)" : "#EEEFF2",
              color: btnColor ? "white" : "#1C20243D",
            }}
          />
          <Typography sx={{ textAlign: "center" }}>эсвэл</Typography>
          <ButtonSign
            placeholder="Бүртгүүлэх"
            backgroundColor="white"
            color="#000"
            borderColor="#18BA51"
            width="500px"
            height="50px"
            onClick={jumpToSignup}
            disabled={false}
            style={{}}
          />
        </Box>
      </Stack>
    </Stack>
  );
};
