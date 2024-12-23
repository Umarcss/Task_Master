const mongoose = require("mongoose");

const connectDB = async (uri) => {
  try {
    await mongoose.connect("mongodb+srv://dawendoski:Dawendoski@cluster0.qqrvq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
    console.log("Connected to database...");
  } catch (error) {
    console.error("Error connecting to database:", error);
  }
};

module.exports = connectDB;
