"use client";

import { Box, InputLabel, Stack, Typography } from "@mui/material";
import { ButtonSign } from "../Button";
import { ChangeEvent, useEffect, useState } from "react";
import { SendEmailPass } from "./SendEmailPass";
import { NewPass } from "./NewPass";
import axios from "axios";
import { useRouter } from "next/navigation";
import { Input } from "../Input";

type Password = {
  email: string;
  password: string;
  rePassword: string;
  otp: string;
  handleChange: string;
};

export const ResetPassword = (props: any) => {
  const { push } = useRouter();
  const { name } = props;
  const [componentChange, setComponentChange] = useState(0);
  const [userData, setData] = useState<Password>({
    email: "",
    password: "",
    rePassword: "",
    otp: "",
    handleChange: "",
  });
  const [error, setError] = useState("");
  const [otp, setOtp] = useState({});
  const [btnColor, setBtnColor] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setData({ ...userData, [name]: value });
    console.log(userData);
  };

  useEffect(() => {
    if (!userData.email || !userData.password) {
      setBtnColor(true);
    } else {
      setBtnColor(false);
    }
  }, [userData]);

  const handleButn = async (props: any) => {
    if (componentChange === 0) {
      try {
        const { data } = await axios.post<string>(
          "http://localhost:8000/resetPass",
          {
            email: userData.email,
          }
        );
        console.log(data);
        if (data === "User not existed") {
          setError("User not found");
        } else {
          setError("");
          setComponentChange(componentChange + 1);
        }
      } catch (error: any) {
        return error.message;
      }
    } else if (componentChange === 1) {
      const { data } = await axios.post("http://localhost:8000/otpCheck", {
        email: userData.email,
        otp: userData.otp,
      });
      if (data === "invalid code") {
        setError("invalid code");
      } else {
        setError("");
        setComponentChange(componentChange + 1);
      }
    } else if (componentChange === 2) {
      setBtnColor(true);
      if (userData.password !== userData.rePassword) {
        alert("password is not matching");
        setComponentChange(2);
      } else {
        await axios.post("http://localhost:8000/passUpdate"),
          {
            email: userData.email,
            password: userData.password,
          };
        push("/login");
        console.log("done");
      }
    }
  };

  return (
    <Stack
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
      {componentChange === 0 && (
        <Box
          sx={{
            justifyContent: "center",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            width: "content",
            gap: "20px",
          }}
        >
          <Typography
            sx={{ textAlign: "center", fontSize: "23px" }}
            variant="h1"
          >
            Нууц үг сэргээх
          </Typography>
          <Box sx={{ width: "500px" }}>
            <InputLabel>Имэйл</InputLabel>
            <Input
              placeholder="Имэйл хаягаа оруулна уу"
              text=""
              name="email"
              onChange={handleChange}
            />
            {error && (
              <Box
                sx={{
                  color: "red",
                  width: "100%",
                  textAlign: "center",
                  position: "absolute",
                  marginRight: "200px",
                }}
              >
                {error}
              </Box>
            )}
          </Box>
        </Box>
      )}
      {componentChange === 1 && <SendEmailPass handleChange={handleChange} />}

      {componentChange === 2 && (
        <NewPass
          data={userData}
          setData={setData}
          handleChange={handleChange}
        />
      )}

      <ButtonSign
        placeholder="Үргэлжлүүлэх"
        borderColor="0"
        backgroundColor="primary.main"
        color="common.white"
        width="500px"
        height="50px"
        onClick={handleButn}
        disabled={!userData.email}
      />
    </Stack>
  );
};
