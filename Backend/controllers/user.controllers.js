import { User } from "../models/user";
import { TryCatch } from "../utils/errorHandler";

export const newUser = TryCatch(async (req, res, next) => {
  const { name, email, username, password } = req.body;
  const user = await User.create({
    name,
    email,
    username,
    password,
  });

  
});
