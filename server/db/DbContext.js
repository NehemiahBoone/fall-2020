import mongoose from "mongoose";
import CarSchema from "../models/Car";
import JobSchema from "../models/Job";


class DbContext {
  Cars = mongoose.model("Cars", CarSchema);
  Jobs = mongoose.model("Jobs", JobSchema);
}

export const dbContext = new DbContext();
