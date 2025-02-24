import jwt from "jsonwebtoken";




const cookieOptions={
    maxAge:15*24*60*60*1000,
    httpOnly:true,
    secure:true,
};

const sendToken = (res, user, code, message) => {
   
    const token = jwt.sign(
      {
        _id: user._id,
      },
      process.env.JWT_SECRET
    );
  
    console.log(token);
    return res.status(code).cookie("access_token", token, cookieOptions).json({
      success: true,
      user,
      message,
    });
  };


  export {sendToken,cookieOptions};