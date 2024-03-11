import { FormControl, TextField } from "@mui/material";

type AllInput = {
  placeholder: string;
  text: string;
  name: any;
  onChange: any;
};

export const Input = (props: AllInput) => {
  const { placeholder, text, name, onChange } = props;
  return (
    <FormControl
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      {text}
      <TextField
        name={name}
        variant="filled"
        InputProps={{ disableUnderline: true }}
        placeholder={placeholder}
        onChange={onChange}
      ></TextField>
    </FormControl>
  );
};
