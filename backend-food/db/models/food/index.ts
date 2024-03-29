import { model, Schema, models, Model } from "mongoose";

export type FoodModelType = {
  _id: Schema.Types.ObjectId;
  name: string;
  image: string;
  ingredients: string;
  price: string;
  category: Schema.Types.ObjectId;
};

const FoodSchema = new Schema<FoodModelType>(
  {
    name: { type: String, required: true },
    image: { type: String, required: true },
    ingredients: { type: String, required: true },
    price: { type: String, required: true },
    category: { type: Schema.Types.ObjectId, ref: "Category", required: true },
  },
  {
    timestamps: true,
  }
);

//schemadaa zoriulsan model create

export const FoodModel: Model<FoodModelType> =
  models["Food"] || model("Food", FoodSchema);
