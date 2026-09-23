import express from "express";
const app = express();
import userRoute from "./routes/userRoute.js";
import announcementRoute from "./routes/announcementRoute.js";
import documentRoute from "./routes/documentRoute.js";
import cookieParser from "cookie-parser";
import path from "path";
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// accesses information from .env file
import dotenv from "dotenv";
dotenv.config({ path: ".env" });

import mongoose from "mongoose";
// reads information from .env file
const DB = process.env.DATABASE;
const port = process.env.PORT;

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("json spaces", 2);
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "../frontend/dist")));

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
app.use("/api/v1/announcements", announcementRoute);
app.use("/api/v1/documents", documentRoute);

app.get("/*splat", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
});

app.listen(port, () => {
  console.log(`app is running on port ${port}`);
});
