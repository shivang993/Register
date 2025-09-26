import mongoose from "mongoose";



const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    password_confirmation:{
     type: String,
     required: true,
    },
    tc: {
      type: Boolean,
      required: true,
      // default:false,
    },
  },
  { timestamps: true }
);

const UserModel = mongoose.model("UserModel", userSchema);

export default UserModel;
