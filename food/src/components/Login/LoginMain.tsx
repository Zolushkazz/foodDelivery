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
        flexDirection: "column",
      }}
    >
      <Stack
        sx={{
          width: "372px",
          display: "flex",
          gap: "30px",
          marginBottom: "20px",
        }}
      >
        <Typography sx={{ fontSize: "23px", textAlign: "center" }}>
          Нэвтрэх
        </Typography>
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
          width="370px"
          height="50px"
        />
        <Typography sx={{ textAlign: "center" }}>эсвэл</Typography>
        <ButtonSign
          placeholder="Бүртгүүлэх"
          backgroundColor="#fffff"
          color="#00000"
          borderColor="green"
          width="370px"
          height="40px"
        />
      </Stack>
    </Container>
  );
};
