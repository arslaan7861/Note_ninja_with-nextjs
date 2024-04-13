import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  Id: String,
});
export default mongoose.models.users || mongoose.model("users", userSchema);
