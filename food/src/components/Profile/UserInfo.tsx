"use client";

import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import Image from "next/image";
import { ChangeEvent, useEffect, useState } from "react";
import { CustomInput } from "./CustomInput";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import OutputOutlinedIcon from "@mui/icons-material/OutputOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import Link from "next/link";
import { useData, DataContext } from "../context/userContext";
import axios from "axios";

type UserInformation = {
  _id: string;
  name: string;
  email: string;
  phone: string;
};

type SaveBtnProps = {
  handleSubmit: () => void;
};
type OrderHistoryProps = {
  handleModal: () => void;
};

const OrderHistory = ({ handleModal }: OrderHistoryProps) => {
  return (
    <Stack>
      <Button
        sx={{
          gap: "15px",
          color: "black",
          py: "8px",
          px: "16px",
          justifyContent: "start",
          width: "100%",
        }}
      >
        <Stack>
          <HistoryOutlinedIcon />
        </Stack>
        <Typography fontSize={13}>Захиалгын түүх</Typography>
      </Button>
      <Button
        sx={{
          gap: "15px",
          color: "black",
          px: "16px",
          py: "8px",
          justifyContent: "start",
          width: "100%",
        }}
      >
        <Stack>
          <OutputOutlinedIcon />
        </Stack>
        <Typography fontSize={13}>Гарах</Typography>
      </Button>
    </Stack>
  );
};
type SaveButtonProps = {
  handleSubmit: () => void;
};

const SaveButton = ({ handleSubmit }: SaveButtonProps) => {
  return (
    <Stack
      onClick={handleSubmit}
      sx={{
        backgroundColor: "primary.main",
        width: "100vw",
        borderRadius: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
      }}
    >
      Хадгалах
    </Stack>
  );
};

type ConditionalRendererProps = {
  edit: boolean;
  handleSubmit: () => void;
  handleModal: () => void;
};

const ConditionalRenderer = ({
  edit,
  handleModal,
  handleSubmit,
}: ConditionalRendererProps) => {
  return !edit ? (
    <OrderHistory handleModal={handleModal} />
  ) : (
    <SaveButton handleSubmit={handleSubmit} />
  );
};

export const UserInfo = () => {
  const { loggedInUserData, loading } = useData();
  const [error, setError] = useState(false);
  const [errMessage, setErrMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [edit, setEdit] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [userData, setUserData] = useState<UserInformation>({
    _id: "",
    name: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    setUserData({
      ...userData,
      _id: loggedInUserData._id,
      name: loggedInUserData.name,
      email: loggedInUserData.email,
      phone: loggedInUserData.phone,
    });
  }, [loading]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    console.log(value);

    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async () => {
    setError(false);
    setErrMessage("");
    if (!userData.email || !userData.name || !userData.phone) {
      setErrMessage("Please Fill All The Fields");
      setError(true);
    }
    try {
      const { data } = await axios.post(
        "http://localhost:8000/updateAll",
        userData
      );
      if (data === "update failed") {
        setErrMessage("unsuccessfull attempt");
        setError(true);
      } else {
      }
    } catch (err: any) {
      setErrMessage("error update");
      setError(true);
    }

    setTimeout(() => {
      setSuccess(false);
    }, 2000);
  };

  const handleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginY: "5%",
      }}
    >
      <Stack sx={{ position: "relative", width: "6%", height: "50%" }}>
        <Stack
          py={"50%"}
          border={1}
          borderRadius={"50%"}
          overflow={"hidden"}
          position={"relative"}
        >
          <Image fill objectFit="cover" src={""} alt="" />
        </Stack>
        <Stack
          sx={{
            position: "absolute",
            bottom: "0",
            right: "5%",
            width: "20%",
            height: "20%",
            borderRadius: "50%",
            border: "1px solid lightgray",
            backgroundColor: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#18BA51",
          }}
        >
          <EditOutlinedIcon fontSize="small" />
        </Stack>
      </Stack>
      <Typography py={2}>{userData.name}</Typography>

      <Box>
        <Stack gap={3}>
          <CustomInput
            onChange={handleChange}
            label="Таны нэр"
            type="text"
            value={userData.name}
          />
          <CustomInput
            onChange={handleChange}
            label="Утасны дугаар"
            type="number"
            value={userData.phone}
          />
          <CustomInput
            onChange={handleChange}
            label="Имэйл хаяг"
            type="email"
            value={userData.email}
          />
        </Stack>
      </Box>
    </Box>
  );
};
