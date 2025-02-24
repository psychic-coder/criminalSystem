import { compareSync } from "bcrypt";
import { User } from "../models/user";
import ErrorHandler, { TryCatch } from "../utils/errorHandler";
import { cookieOptions, sendToken } from "../utils/features";

export const newUser = TryCatch(async (req, res, next) => {
  const { name, email, username, password } = req.body;
  const user = await User.create({
    name,
    email,
    username,
    password,
  });

  sendToken(res,user,201,"User Created");

});


export const login =TryCatch(async (req,res,next)=>{
  const {username,password}=req.body;
  const user=await User.findOne({username}).select("+password");
  if(!user) return next(new ErrorHandler("User not found",404));
  const isMatch=await compareSync(password,user.password);
  if(!isMatch) return next(new ErrorHandler("Invalid Credentials !!" ,400));

  sendToken(res,user,200,`Welcome Back ${user.name} !  `);
});

export const logout=TryCatch(async(req,res)=>{
  return res.status(200).cookie("access_token","",{...cookieOptions,maxAge:0}).json({
    success:true,
    message:"Logged out successfully"
  })
})
