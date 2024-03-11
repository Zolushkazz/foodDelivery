import {
  Box,
  Container,
  InputLabel,
  OutlinedInput,
  Typography,
} from "@mui/material";
import { ButtonSign } from "../Button";
import { SignupPasswordInput } from "../Signup/SignupInput";

export const ResetPassword = () => {
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
        <InputLabel>Нууц үг сэргээх код</InputLabel>
        <SignupPasswordInput handleChange={} name="password" />
      </Box>

      <ButtonSign
        placeholder="Үргэлжлүүлэх"
        borderColor=""
        backgroundColor="#EEEFF2"
        color="#1C20243D"
        width=""
        height=""
        onClick={""}
        disabled={false}
        style=""
      />
    </Container>
  );
};
