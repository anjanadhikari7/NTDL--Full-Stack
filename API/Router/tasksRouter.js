// CRUD routes for tasks
import express from "express";
import { createTask } from "../model/TaskModel.js";

// Express Router
const taskRouter = express.Router();
// POST Route | Create a task
taskRouter.post("/", (req, res) => {
  // get a task to be created from request
  const task = req.body;

  // Create the task in database
  createTask(task)
    .then((createdTask) => {
      res.json({
        status: "success",
        data: createdTask,
      });
    })
    .catch((error) => {
      res.json({
        status: "error",
        data: error.message || "Cannot create the task",
      });
    });

  // Create the task in  database
  // Create Task()
});

export default taskRouter;
