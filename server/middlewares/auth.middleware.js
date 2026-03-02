import dotenv from "dotenv";
dotenv.config();

import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({
      message: "Authorization header missing",
    });
  }

  const [scheme, token] = authHeader.split(" ");

  if (scheme !== "Bearer" || !token) {
    return res.status(401).json({
      message: "Invalid authorization format",
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.verifiedUser = decoded;
    next();
  } catch {
    return res.status(403).json({
      message: "Invalid or expired token",
    });
  }
};

export default authMiddleware;
