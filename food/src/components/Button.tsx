import { Button } from "@mui/material";

type ButtonStyle = {
  placeholder: string;
  backgroundColor: string;
  color: string;
  borderColor: string;
  width: string;
  height: string;
};

export const ButtonSign = (props: ButtonStyle) => {
  const { backgroundColor, placeholder, width, height, color, borderColor } =
    props;

  return (
    <Button
      sx={{
        backgroundColor: { backgroundColor },
        color: { color },
        placeholder: { placeholder },
        borderColor: { borderColor },
        width: { width },
        height: { height },
      }}
    ></Button>
  );
};
