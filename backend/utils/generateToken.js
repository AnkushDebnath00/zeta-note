import jwt from "jsonwebtoken";

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    // JWT_SECRET is the secret key
    expiresIn: "30d", // 30 days
  });
};

export default generateToken;
