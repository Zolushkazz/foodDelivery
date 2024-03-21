import { Router } from "express";
import {
  getCategoriesController,
  createCategoryController,
} from "../../controllers";

export const CategoryRouter = Router();

CategoryRouter.get("/get/categories", getCategoriesController);
CategoryRouter.post("/create/category", createCategoryController);
