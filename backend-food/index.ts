import { ConnectDb } from "./db";
import express from "express";
import cors from "cors";
import userRouter from "./router/user/userRouter";
import dotenv from "dotenv";

const app = express();
app.use(cors());
app.use(express.json());
ConnectDb();

dotenv.config();
app.use(userRouter);

app.listen(8000, () => {
  console.log("http://localhost:8000");
});
