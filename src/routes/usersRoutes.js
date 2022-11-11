import express from "express";
import UserController from "../controllers/usersController.js";

const router = express.Router();

router
  .get("/users/login", UserController.loginUser)
  .post("/users", UserController.registerUser)

export default router;