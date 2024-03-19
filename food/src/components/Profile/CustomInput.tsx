"use client";

import PersonOutlineSharpIcon from "@mui/icons-material/PersonOutlineSharp";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import ForwardToInboxOutlinedIcon from "@mui/icons-material/ForwardToInboxOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";

import {
  InputAdornment,
  Stack,
  TextField,
  TextFieldProps,
} from "@mui/material";
import { useState } from "react";

export const CustomInput = (props: TextFieldProps) => {
  const [edit, setEdit] = useState(false);

  const { variant = "standard", label, type = "text", ...rest } = props;

  const handleEdit = () => {
    setEdit(!edit);
    console.log("edit is:", edit);
  };

  return (
    <Stack gap={1}>
      <TextField
        sx={{
          bgcolor: "#F6F6F6",
          border: "none",
          width: "380px",
        }}
        {...rest}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Stack
                sx={{
                  bgcolor: "white",
                  borderRadius: "100%",
                  py: "2px",
                  px: "5px",
                  border: "solid 1px #EEEFF2",
                }}
              >
                {(type === "text" && (
                  <PersonOutlineSharpIcon sx={{ color: "black" }} />
                )) ||
                  (type === "number" && (
                    <CallOutlinedIcon sx={{ color: "black" }} />
                  )) ||
                  (type === "email" && (
                    <ForwardToInboxOutlinedIcon sx={{ color: "black" }} />
                  ))}
              </Stack>
              <Stack
                sx={{
                  position: "absolute",
                  top: "5px",
                  left: "58px",
                  fontSize: "12px",
                }}
              >
                {label}
              </Stack>
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              <EditOutlinedIcon
                onClick={handleEdit}
                sx={{
                  color: "primary.main",
                }}
              />
            </InputAdornment>
          ),
        }}
        inputProps={{
          style: { marginTop: "7px" },
        }}
      ></TextField>
    </Stack>
  );
};
