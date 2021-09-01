import express from "express";
import {
  addUser,
  getUserById,
  getUsers,
  editUser,
  deleteUser,
} from "../controller/controller.js";

const route = express.Router();

route.get("/", getUsers);
route.post("/add", addUser);
route.get("/:id", getUserById);
route.put("/:id", editUser);
route.delete("/:id", deleteUser);

export default route;
