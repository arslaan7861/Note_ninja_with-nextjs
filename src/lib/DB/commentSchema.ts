import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
  noteId: String,
  replied: { type: Boolean, default: false },
  comments: [
    {
      comment: { type: String, required: [true, "please provide comment"] },
      commentator: {
        type: String,
        required: [true, "please provide comment username"],
      },
      likes: [String],
      dislikes: [String],
      repliesId: String,
      time: Number,
    },
  ],
});
export default mongoose.models.comments ||
  mongoose.model("comments", commentSchema);
