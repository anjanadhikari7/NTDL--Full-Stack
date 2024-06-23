import taskSchema from "../Schema/taskSchema.js";

// FOR MAKING QUERIES

// Read a task | FETCH
export const getTasks = () => {
  return taskSchema.find();
};

// Create a Task in DB

export const createTask = (taskObject) => {
  return taskSchema(taskObject).save();
};

// Update task in db
export const updateTask = (id, updatedField) => {
  return taskSchema.findByIdAndUpdate(id, updatedField, { new: true });
};

// Delete task in db
export const deleteTask = (id) => {
  return taskSchema.findByIdAndDelete(id);
};
