import { body } from "express-validator";

export const validateSignupData = [
  body("username")
    .trim()
    .notEmpty()
    .withMessage("username cannot be empty")
    .isLength({
      min: 3,
      max: 20,
    })
    .withMessage("username should be between min 3 and max 20 characters"),
  body("fullName").trim().notEmpty().withMessage("full name cannot be empty"),
  body("password")
    .trim()
    .notEmpty()
    .withMessage("password cannot be empty")
    .isLength({ min: 5 })
    .withMessage("Password must consist atleast 5 characters. ")
    .isStrongPassword({
      minLength: 5,
      minLowercase: 1,
      minNumbers: 1,
      minSymbols: 1,
      minUppercase: 1,
    })
    .withMessage(
      "Password should consist atleast 1 lowercase, 1 uppercase, 1 number, 1 symbol",
    ),
];
