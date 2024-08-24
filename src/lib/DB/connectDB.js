const mongoose = require("mongoose");
const uri = process.env.MONGO_URI;

function connectDB() {
  try {

    mongoose.connect(uri);
    console.log("connected to database");
  } catch (error) {
    console.log(error, "error whileconnecting to mongoose");
  }
}

module.exports = connectDB;
