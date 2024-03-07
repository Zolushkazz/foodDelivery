"use client";
import { SignupNavbar } from "@/components/Signup/SignupNavbar";
import { SignupComponents } from "@/components/Signup/Signup";
import { Stack } from "@mui/material";

const Signup = () => {
  return (
    <Stack sx={{ width: "100vw", marginBottom: "300px ", marginTop: "50px" }}>
      <SignupComponents />
    </Stack>
  );
};

export default Signup;
