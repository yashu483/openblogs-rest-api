import bcrypt from "bcryptjs";
import db from "../db/queries.js";
import { body, validationResult, matchedData } from "express-validator";

const userSignup = async (req, res, next) => {
  try {
    const { username, password, fullName } = req.body;

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
};

const userLogin = async (req,res,next) => {
    
}

export default { userSignup };
