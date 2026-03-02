import { Router } from "express";
import authMiddleware from "../middlewares/auth.middleware.js";
import controller from "./../controllers/usersController.js";

const usersRouter = Router();

// usersRouter.get("/", authMiddleware);
usersRouter.get("/:userid", authMiddleware, controller.getUser);
usersRouter.patch("/:userid", authMiddleware, controller.updateUserData);

export default usersRouter;
