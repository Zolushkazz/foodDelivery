import { model, Schema, models, Model } from "mongoose";

export type CategoryModelType = {
  name: string;
};

const CategorySchema = new Schema<CategoryModelType>(
  {
    name: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

//schemadaa zoriulsan model create

export const CategoryModel: Model<CategoryModelType> =
  models["Category"] || model<CategoryModelType>("Category", CategorySchema);
