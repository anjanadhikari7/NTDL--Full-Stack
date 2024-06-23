// CRUD routes for tasks
import express from "express";
import {
  createTask,
  getTasks,
  updateTask,
  deleteTask,
} from "../model/TaskModel.js";

// Express Router
const taskRouter = express.Router();
// GET Route | Read a task | Fetch a task
taskRouter.get("/", (req, res) => {
  getTasks()
    .then((tasks) => {
      res.json({
        status: "success",
        data: tasks,
      });
    })
    .catch((error) => {
      res.json({
        status: "error",
        data: error.message || "Cannot create the task",
      });
    });
});
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
        data: error.message || "Cannot fetch the task",
      });
    });

  // Create the task in  database
  // Create Task()
});
// PATCH | Update a task
taskRouter.patch("/:id", (req, res) => {
  const { id } = req.params;
  const updatedField = req.body;

  // Query DB to update

  updateTask(id, updatedField)
    .then((updatedTask) => {
      res.json({
        status: "success",
        data: updatedTask,
      });
    })
    .catch((error) => {
      res.json({
        status: "error",
        data: error.message || "Cannot update the task",
      });
    });
});

export default taskRouter;

// Delete task
taskRouter.delete("/:id", (req, res) => {
  const { id } = req.params;

  deleteTask(id)
    .then((id) => {
      res.json({
        status: "success",
        data: id,
      });
    })
    .catch((error) => {
      res.json({
        status: "error",
        data: error.message || "Cannot delete the task",
      });
    });
});
