import { Box, OutlinedInput } from "@mui/material";

type AllInput = {
  placeholder: string;
  text: string;
};

export const Input = (props: AllInput) => {
  const { placeholder, text } = props;
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      {text}
      <OutlinedInput placeholder={placeholder}></OutlinedInput>
    </Box>
  );
};
