import jwt from "jsonwebtoken";

// jwt.sign({ user }, SECRET, { expiresIn: "7d" }, (err, token) => {
//   if (err) return next(err);
//   return res.json({
//     token: token,
//   });
// });

// user obj contains only username and password
const generateToken = (user, secret) => {
  return jwt.sign({ user }, secret, { expiresIn: "7d" });
};
export default generateToken;
