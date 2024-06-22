import taskSchema from "../Schema/taskSchema.js";

// FOR MAKING QUERIES

// Create a Task in DB

export const createTask = (taskObject) => {
  return taskSchema(taskObject).save();
};
