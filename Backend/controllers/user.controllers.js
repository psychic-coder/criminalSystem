import { compareSync } from "bcrypt";
import bcryptjs from "bcryptjs";
import ErrorHandler, { TryCatch } from "../utils/errorHandler.js";
import { cookieOptions, sendToken } from "../utils/features.js";
import { User } from "../models/user.js";

export const newUser = TryCatch(async (req, res, next) => {
  console.log(req.body);
  const { name, email, username, password } = req.body;

  const hashPassword = bcryptjs.hashSync(password, 10);
  const user = await User.create({
    name,
    email,
    username,
    password,
  });
  sendToken(res, user, 201, "User Created");
});

export const login = TryCatch(async (req, res, next) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (!user) return next(new ErrorHandler("User not found", 404));
  const isMatch = bcryptjs.compareSync(password, user.password);
  if (!isMatch) return next(new ErrorHandler("Invalid Credentials !!", 400));

  sendToken(res, user, 200, `Welcome Back ${user.name} !  `);
});

export const logout = TryCatch(async (req, res) => {
  return res
    .status(200)
    .cookie("access_token", "", { ...cookieOptions, maxAge: 0 })
    .json({
      success: true,
      message: "Logged out successfully",
    });
});
