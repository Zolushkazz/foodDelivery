import express from "express";

const userRouter = express.Router();

userRouter.post("/users/signup");

export default userRouter;