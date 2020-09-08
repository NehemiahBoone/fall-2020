import mongoose from "mongoose";
const Schema = mongoose.Schema;


const comment = new Schema({
  poster: { type: String, required: true },
  body: { type: String, required: true }
})

const Job = new Schema(
  {
    position: { type: String, required: true },
    company: { type: String, required: true },
    hours: { type: Number, required: true },
    rate: { type: Number, required: true, min: 7.45 },
    imgUrl: { type: String },
    description: { type: String, default: "No description Provided" },
    comments: [comment]
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Job;
