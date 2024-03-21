import { ConnectDb } from "./db";
import express from "express";
import cors from "cors";
import userRouter from "./router/user/userRouter";
import dotenv from "dotenv";
import { FoodRouter } from "./router";
import { CategoryRouter } from "./router/category";
import { OrderRouter } from "./router/order";

const app = express();
app.use(cors());
app.use(express.json());
ConnectDb();

dotenv.config();
app.use(userRouter);
app.use(FoodRouter);
app.use(CategoryRouter);
app.use(OrderRouter);

app.listen(8000, () => {
  console.log("http://localhost:8000");
});
