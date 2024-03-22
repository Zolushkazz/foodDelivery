"use client";

import Image from "next/image";
import { Box, Divider, Typography } from "@mui/material";

export const HomePageHero = () => {
  return (
    <Box
      sx={{
        backgroundImage: "url(/desktop.png)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        position: "relative",
        height: "900px",
        marginY: "30px",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          zIndex: "40",
          left: "10%",
          color: "white",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <Typography variant="h1">Pinecone</Typography>
        <Typography variant="h1">Food Delivery</Typography>
        <Divider sx={{ width: "100%", borderColor: "white" }} />
        <Typography variant="h5" sx={{ fontSize: "md" }}>
          We will delivery the most fresh and most delicious
        </Typography>
        <Typography variant="h5" sx={{ fontSize: "md" }}>
          food in your hand
        </Typography>
      </Box>
      <Box sx={{ position: "absolute", zIndex: "40", right: "10%" }}>
        <Image src="/foodHome.png" width={900} height={700} alt="" />
      </Box>
    </Box>
  );
};
