import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
  noteId: String,
  replied: { type: Boolean, default: false },
  comments: [
    {
      comment: { type: String, required: [true, "please provide comment"] },
      commentator: { type: String, required: [true, "please provide comment username"] },
      likes: { type: Number, default: 0 },
      repliesId: String,
    },
  ],
});
export default mongoose.models.comments ||
  mongoose.model("comments", commentSchema);
