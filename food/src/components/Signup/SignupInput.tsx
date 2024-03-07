"use client";

import { Stack, TextField, Typography } from "@mui/material";

type SignupInputProps = {
  label: string;
  placeholder: string;
  width: string;
};

export const SignupInput = (props: SignupInputProps) => {
  const { label, placeholder, width } = props;

  return (
    <Stack>
      <TextField
        label={label}
        sx={{ width }}
        placeholder={placeholder}
        fullWidth
      ></TextField>
    </Stack>
  );
};
