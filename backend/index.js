import express, { Router } from "express";
import mongoose from "mongoose";
import route from "./server/route.js";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();

const PORT = 8000;

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use("/users", route);

const URL =
  "mongodb+srv://raunak173:raunak173@cluster0.nu1ri.mongodb.net/MERN-CRUD?retryWrites=true&w=majority";

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
