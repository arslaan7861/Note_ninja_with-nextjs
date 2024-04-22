const mongoose = require("mongoose");
// const uri = process.env.MONGO_URI;
const uri =
  "mongodb+srv://friendscircle7861:connectdb7861@cluster0.tgqht9x.mongodb.net/NOTES?retryWrites=true&w=majority&appName=Cluster0";

function connectDB() {
  try {
    mongoose.connect(uri);
    console.log("connected to database");
  } catch (error) {
    console.log(error, "error whileconnecting to mongoose");
  }
}

module.exports = connectDB;
