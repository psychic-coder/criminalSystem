import mongoose, { Schema, model } from "mongoose";
import bcryptjs from "bcryptjs";

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
    required: [true, "Please enter password"]
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});


schema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcryptjs.hashSync(this.password, 10);
  next();
});

export const User = model("User", schema);
