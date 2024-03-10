import {
  Box,
  Container,
  InputLabel,
  OutlinedInput,
  Typography,
} from "@mui/material";
import { ButtonSign } from "../Button";
import { SignupPasswordInput } from "../Signup/SignupInput";

export const SendEmailPass = () => {
  return (
    <Container
      sx={{
        width: "100vw",
        justifyContent: "center",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Typography sx={{ textAlign: "center", fontSize: "23px" }} variant="h1">
        Нууц үг сэргээх
      </Typography>
      <Box>
        <InputLabel>Имэйл</InputLabel>
        <SignupPasswordInput />
      </Box>

      <ButtonSign
        placeholder="Үргэлжлүүлэх"
        borderColor=""
        backgroundColor="#EEEFF2"
        color="#1C20243D"
      />
    </Container>
  );
};
