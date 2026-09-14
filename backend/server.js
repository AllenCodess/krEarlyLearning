const express = require("express");
const app = express();

const dotenv = require("dotenv");
dotenv.config({ path: ".env" });

const mongoose = require("mongoose");
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

app.get("/", (req, res) => {
  res.send("Hello from express");
});

app.listen(port, () => {
  console.log(`app is running on port ${port}`);
});
