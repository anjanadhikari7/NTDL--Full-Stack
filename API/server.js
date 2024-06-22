import express from "express";
import { connectMongo } from "./config/dbConfig.js";
import taskRouter from "./Router/tasksRouter.js";
import cors from "cors";
// Initialize express App
const app = express();
const PORT = 8000;

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
// Task Routes
app.use("/api/tasks", taskRouter);
// Start server
app.listen(PORT, (error) => {
  error ? console.log(error) : console.log("Your server is running");
});
