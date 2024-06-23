import mongoose from "mongoose";
import "dotenv/config";

const MONGO_DB_CONNECTION_URL = process.env.MONGO_DB_CONNECTION_URL;

export const connectMongo = () => {
  try {
    const connect = mongoose.connect(MONGO_DB_CONNECTION_URL);

    if (connect) {
      console.log("Database Connected at: " + MONGO_DB_CONNECTION_URL);
    }
  } catch (error) {
    console.log("Error", error);
  }
};
