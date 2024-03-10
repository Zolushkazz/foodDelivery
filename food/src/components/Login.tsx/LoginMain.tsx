import {
  Stack,
  Typography,
  InputLabel,
  OutlinedInput,
  TextField,
  InputAdornment,
  Container,
} from "@mui/material";
import { SignupPasswordInput } from "../Signup/SignupInput";
import { ButtonSign } from "../Button";

export const Login = () => {
  return (
    <Container
      sx={{
        width: "100vw",
        justifyContent: "center",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Typography>Нэвтрэх</Typography>
      <Stack>
        <InputLabel>Имэйл</InputLabel>
        <OutlinedInput placeholder="Имэйл хаягаа оруулна уу"></OutlinedInput>
      </Stack>
      <SignupPasswordInput />

      <TextField
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">Нууц үг сэргээх</InputAdornment>
          ),
        }}
      ></TextField>
      {/* ungu uurchlugdunu ym bichih uyd */}
      <ButtonSign
        placeholder="Нэвтрэх"
        backgroundColor="#EEEFF2"
        color="#1C20243D"
        borderColor=""
      />
      <Typography>Эсвэл</Typography>
      <ButtonSign
        placeholder="Бүртгүүлэх"
        backgroundColor="#fffff"
        color="#000"
        borderColor="green"
      />
    </Container>
  );
};
