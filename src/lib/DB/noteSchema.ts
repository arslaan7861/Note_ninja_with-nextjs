const mongoose = require("mongoose");

const uploadSchema = new mongoose.Schema({
  fileId: {
    type: String,
    required: [true, "please provide file url"],
  },
  webViewLink: {
    type: String,
    required: [true, "please provide file url"],
  },
  webContentLink: {
    type: String,
    required: [true, "please provide file url"],
  },
  uploader: {
    type: String,
    required: [true, "please provide uploader username"],
  },
  subject: {
    type: String,
    required: [true, "please provide subject"],
  },
  year: {
    type: String,
    required: [true, "please provide year"],
  },
  time: {
    type: String,
    required: [true, "please provide time"],
  },
  unit: {
    type: String,
    required: [true, "please provide unit number"],
  },
});

export default mongoose.models.uploads ||
  mongoose.model("uploads", uploadSchema);
