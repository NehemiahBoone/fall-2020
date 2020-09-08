import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Car = new Schema(
  {
    make: { type: String, required: true },
    model: { type: String, required: true },
    year: { type: Number, required: true },
    price: { type: Number, required: true, min: 0 },
    imgUrl: { type: String, required: true, default: "https://placehold.it/200x200" },
    description: { type: String },
    tags: [{ type: String }]
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Car;
