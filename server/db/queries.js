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
      id: true,
      password: true,
    },
  });
  return user;
};

const getUserFullDataByUsername = async (username) => {
  const user = await prisma.user.findUnique({
    where: {
      username,
    },
    include: {
      posts: {
        include: {
          comments: true,
        },
      },
    },
  });

  return user;
};

const updateUser = async (id, newData) => {
  return await prisma.user.update({
    where: {
      id,
    },
    data: {
      username: newData.username,
      password: newData.password,
      fullName: newData.fullName,
    },
  });
};
// posts model queries

export default {
  createUser,
  checkUsernameAvailability,
  getUserByUsername,
  getUserFullDataByUsername,
  updateUser,
};
