import dotenv from "dotenv";
dotenv.config();

import db from "./../db/queries.js";
import { validateSignupData } from "./../utils/validateUserData.js";
import { validationResult, matchedData } from "express-validator";
import asyncHandler from "../utils/asyncHandler.js";
import updateUserService from "../services/updateUserService.js";

const getUser = async (req, res, next) => {
  try {
    const user = req.verifiedUser.user;
    if (!user) {
      return res.status(401).json({
        message: "Authorization token not found",
      });
    }

    const userData = await db.getUserFullDataById(user.id);
    res.status(200).json(userData);
  } catch (err) {
    next(err);
  }
};

const updateUserData = [
  validateSignupData,
  asyncHandler(async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({
        errors: errors.array(),
      });

    const user = await req.verifiedUser;
    const validatedData = matchedData(req);

    // returns true if there is user with the username
    const check = db.checkUsernameAvailability(validatedData.username);

    if (check) {
      return res.status(400).json({
        message: "Username already exists",
      });
    }

    const userId = typeof user.id === "string" ? Number(user.id) : user.id;
    if (isNaN(userId)) throw new Error("Invalid JWT token");

    const result = await updateUserService(userId, validatedData);

    res.status(200).json(result);
  }),
];

export default { getUser, updateUserData };
