import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fullname: String,
  username: {
    type: String,
    required: [true, "please provide username"],
    unique: [true, "username is already taken"],
  },
  password: String,
  email: {
    type: String,
    unique: [true, "email is already registered with another acccount"],
  },
  uploads: [String],
  accountProvider: String,
  image: String,
  completed: Boolean,
});
export default mongoose.models.users || mongoose.model("users", userSchema);
