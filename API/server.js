import express from "express";
import { connectMongo } from "./config/dbConfig.js";
import taskRouter from "./Router/tasksRouter.js";
import cors from "cors";
import userRouter from "./Router/userRouter.js";
import "dotenv/config";
import path from "path";

const _dirname = path.resolve();
// Initialize express App
const app = express();
const PORT = process.env.PORT || 8000;

// Define CORS options
const corsOptions = {
  credentials: true,
  origin: true,
};

//CORS middleware
app.use(cors(corsOptions));

//JSON parser Middleware

app.use(express.json());
// Connect to Mongo DB | database

connectMongo();

//ROUTES
// Server SIDE Rendering
app.use("/", express.static(path.join(_dirname, "frontend")));
// Task Routes
app.use("/api/tasks", taskRouter);

// User Routes
app.use("/users", userRouter);

// Start server
app.listen(PORT, (error) => {
  error ? console.log("error", error) : console.log("Your server is running");
});
