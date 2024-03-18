import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import Image from "next/image";
import axios from "axios";

export const GetFood = async () => {
  const url = "http://localhost:8000/food";
  try {
    const { data } = await axios.get<FoodCatalog[]>(url);
    return data;
  } catch (err: any) {
    return err.message;
  }
};

export const FoodDetail = async (props: any) => {
  const data = await GetFood();
  const { handleShowModal } = props;
  // console.log(data);

  //   if (data._id !== ) {
  //     return "Not matching";s
  //   } else {
  //   }

  return (
    <Stack
      sx={{
        width: "100vw",
        height: "100vh",
        position: "fixed",
        zIndex: "40",
        top: "0",
        left: "0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Stack
        onClick={handleShowModal}
        sx={{
          width: "100vw",
          height: "100vh",
          backgroundColor: "rgba(0,0,0, 0.4)",
          position: "absolute",
          zIndex: "-1",
        }}
      ></Stack>
      <Stack
        direction={"row"}
        sx={{
          width: "920px",
          height: "550px",
          border: "1px solid gray",
          borderRadius: "10px",
          backgroundColor: "white",
          justifyContent: "space-evenly",
        }}
      >
        <Stack
          display={"flex"}
          width={"55%"}
          height={"100%"}
          alignItems={"center"}
          justifyContent={"center"}
          borderRadius={"10px"}
        >
          <Image src={""} width={430} height={430} alt="" />
        </Stack>
        <Stack
          width={"35%"}
          height={"100%"}
          justifyContent={"center"}
          gap={"30px"}
        >
          <Stack>
            <Typography fontSize={25} color={"black"}>
              ss{data.name}
            </Typography>
            <Typography fontSize={18} color={"primary.main"}>
              44{data.price}
            </Typography>
          </Stack>
          <Stack>
            <Typography fontSize={25}>Орц</Typography>
            <TextField>{data.ingredients}</TextField>
          </Stack>
          <Typography fontSize={25}>Тоо</Typography>
          <Stack direction={"row"}>
            <Button
              sx={{
                borderRadius: "8px",
                width: "25px",
                height: "53px",
                backgroundColor: "primary.main",
                color: "lightgray",
              }}
            >
              -
            </Button>
            <TextField sx={{ border: "none" }}>1 </TextField>
            <Button
              sx={{
                borderRadius: "8px",
                width: "25px",
                height: "53px",
                backgroundColor: "primary.main",
                color: "lightgray",
              }}
            >
              +
            </Button>
          </Stack>
          <Button
            sx={{
              backgroundColor: "primary.main",
              borderRadius: "8px",
              color: "lightgray",
              height: "60px",
            }}
          >
            Сагслах
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};
