import controller from "../controllers/authController.js";
import { Router } from "express";

const authRouter = Router();

authRouter.post("/signup", controller.userSignup);
authRouter.post("/login", controller.userLogin);

export default authRouter;
