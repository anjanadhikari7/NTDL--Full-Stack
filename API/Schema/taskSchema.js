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
  },
  priority: {
    type: String,
  },
  type: {
    type: String,
    default: "entry",
  },
});

export default mongoose.model("task", TaskSchema);
