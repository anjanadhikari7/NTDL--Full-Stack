import mongoose, { Mongoose } from "mongoose";

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  time: {
    type: Number,
    required: true,
  },
  difficulty: {
    type: String,
    default: "easy",
  },
  priority: {
    type: String,
    default: "low",
  },
});

export default mongoose.model("task", TaskSchema);
