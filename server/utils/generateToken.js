import jwt from "jsonwebtoken";

// user obj contains only username and password
const generateToken = (user, secret) => {
  return jwt.sign({ id: user.id, username: user.username }, secret, {
    expiresIn: "7d",
  });
};
export default generateToken;
