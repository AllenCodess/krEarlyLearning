import express from "express";
const app = express();
import userRoute from "./routes/userRoute.js";

// accesses information from .env file
import dotenv from "dotenv";
dotenv.config({ path: ".env" });

import mongoose from "mongoose";
// reads information from .env file
const DB = process.env.DATABASE;
const port = process.env.PORT;

const connectDB = async () => {
  try {
    await mongoose.connect(DB);
    console.log("Sucessfully connected to database");
  } catch (error) {
    console.error("Error connecting to MongoDB", error.message);
  }
};

connectDB();

app.use("/api/v1/users", userRoute);

app.get("/", (req, res) => {
  res.send("Hello from express");
});

app.listen(port, () => {
  console.log(`app is running on port ${port}`);
});
