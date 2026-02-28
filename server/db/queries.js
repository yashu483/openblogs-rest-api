import { prisma } from "../lib/prisma.js";

// user model queries
const createUser = async (username, password, fullName) => {
  const user = await prisma.user.create({
    data: {
      username,
      password,
      fullName,
    },
  });
  return user;
};

const checkUsernameAvailability = async (username) => {
  const user = await prisma.user.findUnique({
    where: {
      username,
    },
  });
  return user !== null;
};

const getUserByUsername = async (username) => {
  const user = await prisma.user.findUnique({
    where: {
      username,
    },
    select: {
      username: true,
      password: true,
    },
  });
  return user;
};

export default {
  createUser,
  checkUsernameAvailability,
  getUserByUsername,
};
