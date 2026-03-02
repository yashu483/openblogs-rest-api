import dotenv from "dotenv";
dotenv.config();

import db from "./../db/queries.js";
import { validateSignupData } from "./../utils/validateUserData.js";
import { validationResult, matchedData } from "express-validator";
import generateToken from "./../utils/generateToken.js";
import bcrypt from "bcryptjs";

const getUser = async (req, res, next) => {
  try {
    const user = req.verifiedUser.user;
    if (!user) {
      return res.status(401).json({
        message: "Authorization token not found",
      });
    }

    const userData = await db.getUserFullDataByUsername(user.username);
    res.status(200).json(userData);
  } catch (err) {
    next(err);
  }
};

const updateUserData = [
  validateSignupData,
  async (req, res, next) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(403).json({
          messages: errors.array(),
        });
      }

      const user = await req.verifiedUser.user;
      const validatedUserData = matchedData(req);

      const id = typeof user.id === "string" ? Number(user.id) : user.id;
      if (isNaN(id)) {
        res.status(404).json({
          message: "Page not found",
        });
      }
      const hash = await bcrypt.hash(validatedUserData.password, 10);

      const updatedData = await db.updateUser(id, {
        ...validatedUserData,
        password: hash,
      });
      const token = generateToken(
        {
          username: updatedData.username,
          id: updatedData.id,
        },
        process.env.JWT_SECRET,
      );

      return res.status(200).json({
        user: {
          id: updatedData.id,
          username: updatedData.username,
          fullName: updatedData.fullName,
          createdAt: updatedData.createdAt,
          updatedAt: updatedData.updateAt,
        },
        token: token,
      });
    } catch (err) {
      next(err);
    }
  },
];

export default { getUser, updateUserData };
