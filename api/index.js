// "type": "module", this is added to package.json to use module using import instead of require

import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

import userRouter from "./routes/user.route.js";

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB", err);
  });

const app = express();

app.listen(3000, () => {
  console.log("Server is listening on port 3000!");
});

app.use("/api/user", userRouter);
