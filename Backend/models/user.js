
import mongoose,{Schema,model} from "mongoose";
import bcrypt from "bcrypt"


const schema = new Schema({
  name: {
    type: String,
    required: [true, "Please enter name"],
  },
  email: {
    type: String,
    required: [true, "Please enter email"],
    unique: true,
  },
  username: {
    type: String,
    required: [true, "Please enter username"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please enter password"],
    select: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});


schema.pre("save",async function(next){
  if(!this.isModified("password")) return next();
this.password=await bcrypt.hash(this.password,10);
})


export const User = model("User", schema);
