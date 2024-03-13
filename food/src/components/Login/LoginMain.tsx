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
    if (!data.email || !data.password) {
      setBtnColor(true);
    } else {
      setBtnColor(false);
    }
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
            backgroundColor="primary.main"
            color="common.white"
            borderColor="0"
            width="500px"
            height="50px"
            onClick={handleSubmit}
            disabled={data.email === "" || data.password === "" ? true : false}

          />
          <Typography sx={{ textAlign: "center" }}>эсвэл</Typography>
          <ButtonSign
            placeholder="Бүртгүүлэх"
            backgroundColor="#eeeff2"
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
