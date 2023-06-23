const mongoose = require("mongoose");
require("dotenv").config();

const conn = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://anshulrana:anshulrana@cluster0.0l8ed4w.mongodb.net/mydatabase?retryWrites=true&w=majority",
      { useNewUrlParser: true, useUnifiedTopology: true }
    );
    console.log("Connected to MongoDB");


  } catch (error) {
    console.error("Error:", error);
  }
};

exports.conn = conn;
