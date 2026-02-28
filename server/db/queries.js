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

export default {
  createUser,
  checkUsernameAvailability,
};
