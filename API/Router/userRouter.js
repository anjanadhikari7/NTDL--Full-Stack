// CRUD routes for tasks
import express from "express";

import { createUser } from "../model/UserModel.js";

// Express Router

const userRouter = express.Router();
// POST Route | Create a task
userRouter.post("/", (req, res) => {
  // get a task to be created from request
  const user = req.body;

  // Create the task in database
  createUser(user)
    .then((createdUser) => {
      res.json({
        status: "success",
        data: createdUser,
      });
    })
    .catch((error) => {
      res.json({
        status: "error",
        data: error.message || "Cannot create the User",
      });
    });

  // Create the task in  database
  // Create Task()
});

export default userRouter;
