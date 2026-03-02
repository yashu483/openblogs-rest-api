import dotenv from "dotenv";
dotenv.config();

import bcrypt from "bcryptjs";
import db from "../db/queries.js";
import jwt from "jsonwebtoken";
import { validationResult, matchedData } from "express-validator";
import { validateSignupData } from "../utils/validateUserData.js";

// singup controller
const userSignup = [
  validateSignupData,
  async (req, res, next) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          messages: errors.array(),
        });
      }

      const { username, password, fullName } = matchedData(req);

      const hash = await bcrypt.hash(password, 10);
      const user = await db.createUser(username, hash, fullName);
      return res.status(201).json({
        message: "User created successfully",
        user: {
          username: user.username,
          fullName: user.fullName,
        },
      });
    } catch (err) {
      if (err.code === "P2002") {
        return res.status(400).json({
          message: "Username already exists",
        });
      }
      console.log(err);
      res.status(500).json(err);
      next(err);
    }
  },
];

//login controller
const userLogin = async (req, res, next) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(403).json({
        message: "No username or password found",
      });
    }

    const user = await db.getUserByUsername(username);
    if (!user) {
      return res.status(400).json({
        message: "Username doesn't exists",
      });
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(400).json({
        message: "Incorrect password",
      });
    }

    const SECRET = process.env.JWT_SECRET;

    // creating new user obj to omit password being passed to jwt token
    const jwtUser = { id: user.id, username: user.username };
    jwt.sign({ jwtUser }, SECRET, { expiresIn: "7d" }, (err, token) => {
      if (err) return next(err);
      return res.json({
        token: token,
      });
    });
  } catch (err) {
    next(err);
  }
};

export default { userSignup, userLogin };
