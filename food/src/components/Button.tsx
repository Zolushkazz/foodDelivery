import { Button } from "@mui/material";

type ButtonStyle = {
  placeholder: string;
  backgroundColor: string;
  color: string;
  borderColor: string;
  width: string;
  height: string;
  onClick: any;
  disabled: boolean;
  style: any;
};

export const ButtonSign = (props: ButtonStyle) => {
  const {
    backgroundColor,
    placeholder,
    width,
    height,
    color,
    borderColor,
    onClick,
    disabled,
    style,
  } = props;

  return (
    <Button
      onClick={onClick}
      variant="contained"
      sx={{
        backgroundColor: { backgroundColor },
        color: { color },
        borderColor: { borderColor },
        width: { width },
        height: { height },
      }}
      disabled={disabled}
      style={style}
    >
      {placeholder}
    </Button>
  );
};
