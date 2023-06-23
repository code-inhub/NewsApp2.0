//cdoe used to connect to mongodb and send data from json file ie api data to mongodb atlas.
// to send data just put data in data.json and run this file using node main.js




const mongoose = require("mongoose");
require("dotenv").config();
// const ConnectDB = require("./db/db");
const data = require("./data.json");
const schema = require("./models/schema");
// const schema = require("./models/schema");

// Create a mongoose model based on the parent schema
const start = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(
      "mongodb+srv://anshulrana:anshulrana@cluster0.0l8ed4w.mongodb.net/mydatabase?retryWrites=true&w=majority",
      { useNewUrlParser: true, useUnifiedTopology: true }
    );
    console.log("Connected to MongoDB");

    // Create a new parent document
    await schema.create(data);
    console.log("Parent document saved");

    // console.log("Disconnected from MongoDB");
  } catch (error) {
    console.error("Error:", error);
  }
};

start();
