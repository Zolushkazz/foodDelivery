"use client";

import { SignupPasswordInput } from "./SignupInput";
import {
  Box,
  Container,
  Typography,
  Checkbox,
  FormControl,
} from "@mui/material";
import { ChangeEvent, useEffect, useState } from "react";
import axios from "axios";
import { ButtonSign } from "../Button";
import { Input } from "../Input";
import { useRouter } from "next/navigation";

type UserDataType = {
  password: string;
  rePassword: string;
  name: string;
  email: string;
  phone: string;
};

export const SignupComponents = (props: any) => {
  const [userData, setUserData] = useState<UserDataType>({
    email: "",
    name: "",
    password: "",
    phone: "",
    rePassword: "",
  });
  const [btnColor, setBtnColor] = useState(true);
  const [checkBox, setCheckBox] = useState(false);
  const { push } = useRouter();

  const pressCheckBox = () => {
    setCheckBox(!checkBox);
  };
  useEffect(() => {
    if (
      !userData.name ||
      !userData.email ||
      !userData.password ||
      !userData.phone ||
      !checkBox
    ) {
      console.log("not in");
      setBtnColor(false);
      return;
    }
    setBtnColor(true);
  }, [userData, checkBox]);

  const url = "http://localhost:8000/user/signup";

  const handleSubmit = async (ev: any) => {
    ev.preventDefault();
    const { rePassword, password } = userData;
    if (password !== rePassword) return alert("Pass buruu");

    try {
      await axios.post(url, userData);
      push("/");
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };
  console.log(userData);

  return (
    <Container
      sx={{
        width: "100vw",
        justifyContent: "center",
        display: "flex",
        alignItems: "center",
      }}
    >
      <FormControl
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
        <Input
          onChange={handleChange}
          name="name"
          placeholder="Нэрээ оруулна уу"
          text="Нэр"
        />
        <Input
          onChange={handleChange}
          name="email"
          placeholder="И-мэйлээ оруулна уу"
          text=" И-мэйл"
        />
        <Input
          onChange={handleChange}
          name="phone"
          placeholder="Утасны дугаараа оруулна уу"
          text="Утасны дугаар"
        />

        <Box>
          <Typography>Нууц үг</Typography>
          <SignupPasswordInput name="password" handleChange={handleChange} />
        </Box>
        <Box>
          <Typography>Нууц үг давтах</Typography>
          <SignupPasswordInput name="rePassword" handleChange={handleChange} />
        </Box>

        <Box
          sx={{
            display: "flex",
            gap: "12px",
            fontSize: "14px",
            marginTop: "20px",
            alignItems: "center",
          }}
        >
          <Checkbox required onClick={pressCheckBox} />
          Үйлчилгээний нөхцөл зөвшөөрөх
        </Box>
        <ButtonSign
          disabled={!btnColor}
          onClick={handleSubmit}
          backgroundColor=""
          color="common.white"
          placeholder="Бүртгүүлэх"
          borderColor="0"
          width="500px"
          height="50px"

        />
      </FormControl>
    </Container>
  );
};
