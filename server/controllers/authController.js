import bcrypt from "bcryptjs";
import db from "../db/queries.js";
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
const userLogin = async (req, res, next) => {};

export default { userSignup };
