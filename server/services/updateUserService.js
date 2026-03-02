import dotenv from "dotenv";
dotenv.config();

import bcrypt from "bcryptjs";
import db from "./../db/queries.js";
import generateToken from "../utils/generateToken.js";

const updateUserService = async (userId, dataToUpdate) => {
  const hash = await bcrypt.hash(dataToUpdate.password, 10);
  const updatedUser = await db.updateUser(userId, {
    ...dataToUpdate,
    password: hash,
  });

  const token = generateToken(
    {
      username: updatedUser.username,
      id: updatedUser.id,
    },
    process.env.JWT_SECRET,
  );

  return {
    user: {
      id: updatedUser.id,
      username: updatedUser.username,
      fullName: updatedUser.fullName,
      createdAt: updatedUser.createdAt,
      updatedAt: updatedUser.updatedAt,
    },
    token,
  };
};

export default updateUserService;
