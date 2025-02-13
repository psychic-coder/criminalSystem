const cookieOptions={
    maxAge:15*24*60*60*1000;
    httpOnly:true,
    secure:true,
};

const sendToken=(req,user,code,message)=>{
    const token=jwt.sign(
        {
            _id:user._id,
        }
        process.env.JWT_SECRET
    )
}