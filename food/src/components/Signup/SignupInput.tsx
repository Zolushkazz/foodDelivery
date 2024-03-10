"use client";

import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";

export const SignupPasswordInput = () => {
  const [showPass, setShowPass] = useState(false);
  const handleShowPassword = () => setShowPass((show) => !show);

  const handleMouseDownPass = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };
  return (
    <Stack>
      <Typography>Нууц үг</Typography>
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
          id="outlined-adornment-password"
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
