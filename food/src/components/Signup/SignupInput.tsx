"use client";

import {
  FormControl,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Stack,
} from "@mui/material";
import { ChangeEvent, useState } from "react";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";

type SignupPasswordInputProps = {
  name: string;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

export const SignupPasswordInput = (props: SignupPasswordInputProps) => {
  const [showPass, setShowPass] = useState(false);
  const handleShowPassword = () => setShowPass((show) => !show);
  const { handleChange, name } = props;

  const handleMouseDownPass = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };
  return (
    <Stack>
      <FormControl
        sx={{
          m: 0.5,
          width: "370px",
          height: "48px",
        }}
      >
        <OutlinedInput
          placeholder="Нууц үгээ оруулна уу"
          label="Password"
          name={name}
          id="outlined-adornment-password"
          onChange={handleChange}
          type={showPass ? "text" : "password"}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleShowPassword}
                onMouseDown={handleMouseDownPass}
                edge="end"
              >
                {showPass ? (
                  <VisibilityOffOutlinedIcon />
                ) : (
                  <VisibilityOutlinedIcon />
                )}
              </IconButton>
            </InputAdornment>
          }
        ></OutlinedInput>
      </FormControl>
    </Stack>
  );
};
