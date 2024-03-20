import { model, Schema, models, Model } from "mongoose";

export type CategoryModelType = {
  _id: Schema.Types.ObjectId;
  name: string;
  foodId: Schema.Types.ObjectId[];
};

const CategorySchema = new Schema<CategoryModelType>(
  {
    name: { type: String, required: true },
    foodId: { type: [Schema.Types.ObjectId], ref: "Food", required: true },
  },
  {
    timestamps: true,
  }
);

//schemadaa zoriulsan model create

export const CategoryModel: Model<CategoryModelType> =
  models["Category"] || model("Category", CategorySchema);
