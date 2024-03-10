import { Button } from "@mui/material";

type ButtonStyle = {
  placeholder: string;
  backgroundColor: string;
  color: string;
  borderColor: string;
};

export const ButtonSign = (props: ButtonStyle) => {
  const { backgroundColor, placeholder, color, borderColor } = props;

  return (
    <Button
      sx={{
        backgroundColor: { backgroundColor },
        color: { color },
        placeholder: { placeholder },
        borderColor: { borderColor },
      }}
    >
      Бүртгүүлэх
    </Button>
  );
};
