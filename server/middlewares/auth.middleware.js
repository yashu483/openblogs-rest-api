import dotenv from "dotenv";
dotenv.config();

import jwt from "jsonwebtoken";

const authMiddleware = async (req, res, next) => {
  const authHeader = req.headers["authorization"];

  // check header exists
  if (typeof authHeader === undefined) {
    return res.status(401).json({
      message: "Authorization header missing",
    });
  }

  const parts = authHeader.split(" ");
  if (parts.length !== 2 || parts[0] !== "Bearer") {
    return res.status(401).json({
      message: "Invalid authorization token",
    });
  }

  const token = parts[1];

  try {
    const decodedUser = jwt.verify(token, process.env.JWT_SECRET);
    req.verifiedUser = decodedUser;

    next();
  } catch (err) {
    return res.status(403).json(err);
    // return res.status(403).json({
    //   message: "Invalid  or expired token",
    // });
  }
};

export default authMiddleware;
