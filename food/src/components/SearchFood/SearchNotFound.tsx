import { Button, Stack, Typography } from "@mui/material";
import Image from "next/image";

export const SearchNotFound = () => {
  return (
    <Stack width={"100%"} display={"flex"} height={"100%"}>
      <Button
        sx={{
          width: "5%",
          fontSize: "15px",
          border: "1px solid lightgray",
          ml: "3%",
          my: "2%",
        }}
      >
        Хайлт
      </Button>
      <Stack
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          my: "8%",
        }}
      >
        <Image src={"/noSearch.png"} width={80} height={80} alt="" />
        <Typography color={"#8B8E95"}>Уучлаарай илэрц олдсонгүй</Typography>
      </Stack>
    </Stack>
  );
};
