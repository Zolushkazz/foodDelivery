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

  } = props;

  return (
    <Button
      onClick={onClick}
      variant="contained"
      sx={{
        backgroundColor: backgroundColor,
        color: color,
        border: `1px solid ${borderColor}`,
        width: width,
        height: height,
      }}
      disabled={disabled}

    >
      {placeholder}
    </Button>
  );
};
