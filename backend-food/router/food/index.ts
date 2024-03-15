import { Router } from "express";
import {
  CreateFoodController,
  GetFoodsController,
} from "../../controllers/food";

export const FoodRouter = Router();

FoodRouter.get("/food", GetFoodsController);
FoodRouter.post("/createFood", CreateFoodController);
 