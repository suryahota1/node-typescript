import express, { Router } from "express";
import UserController from "./../controllers/userController";

const userRouter: Router = express.Router();

userRouter.post("/", UserController.createUser);
userRouter.get("/:userId", UserController.getUser);

export default userRouter;