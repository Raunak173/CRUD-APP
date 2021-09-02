import express, { Router } from "express";
import mongoose from "mongoose";
import route from "./server/route.js";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";

const app = express();

const PORT = 8000;
dotenv.config();

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use("/users", route);

const URL = process.env.MONGOLAB_URI;

mongoose
  .connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error.message);
  });
