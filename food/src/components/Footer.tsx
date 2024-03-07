"use client";

import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Divider from "@mui/material/Divider";

export const Footer = () => {
  return (
    <Stack
      sx={{
        backgroundImage: "url('/footerBack.png')",
        height: "545px",
        display: "flex",
        alignItems: "center",
        // bottom: "0",
        // insetInline: "0",
      }}
    >
      <Stack
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          width: "80%",
          height: "80%",
          paddingTop: "50px",
          paddingBottom: "50px",
          marginTop: "50px ",
        }}
      >
        <Typography sx={{ fontSize: "20px" }}>
          <Image src="/frame.png" width={212} height={41} alt="" />
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Typography
            sx={{
              fontSize: "17px",
              textDecoration: "underline",
              color: "white",
            }}
          >
            Нүүр
          </Typography>
          <Typography
            sx={{
              fontSize: "17px",
              textDecoration: "underline",
              color: "white",
            }}
          >
            Холбоо барих
          </Typography>
          <Typography
            sx={{
              fontSize: "17px",
              textDecoration: "underline",
              color: "white",
            }}
          >
            Хоолны цэс
          </Typography>
          <Typography
            sx={{
              fontSize: "17px",
              textDecoration: "underline",
              color: "white",
            }}
          >
            Үйлчилгээний нөхцөл
          </Typography>
          <Typography
            sx={{
              fontSize: "17px",
              textDecoration: "underline",
              color: "white",
            }}
          >
            Хүргэлтийн бүс
          </Typography>
          <Typography
            sx={{
              fontSize: "17px",
              textDecoration: "underline",
              color: "white",
            }}
          >
            Нууцлалын бодлого
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <Image src="/facebook.png" alt="" width={40} height={42} />
          <Image src="/instagram.png" alt="" width={40} height={42} />
          <Image src="/twitter.png" alt="" width={40} height={42} />
        </Box>
        <Divider sx={{ width: "100%", borderColor: "white" }} />
        <Typography
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "15px",
            color: "white",
          }}
        >
          <Image src="/copyright.png" alt="" width={212} height={15} />
          Зохиогчийн эрх хуулиар хамгаалагдсан.
        </Typography>
      </Stack>
    </Stack>
  );
};
