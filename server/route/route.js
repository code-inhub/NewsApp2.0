const express = require("express");
const route = express.Router();
const schema = require("../models/schema.js");

var data;
const getdata = async () => {
  try {
    data = await schema.find();
  } catch (error) {
    console.error("Not able to get data from mongodb Error:", error);
  }
};

getdata();

// route.get("/", async (req, res) => {
//   try {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header(
//       "Access-Control-Allow-Headers",
//       "Origin, X-Requested-With, Content-Type, Accept"
//     );
//     res.status(200).json(data[0]);
//   } catch (error) {
//     console.error("Error:", error);
//   }
// });

route.get("/general", async (req, res) => {
  try {
    res.send(data[0]);
    res.status(200).json(data[0]);
  } catch (error) {
    console.error("Error:", error);
  }
});
route.get("/business", async (req, res) => {
  try {
    res.status(200).json(data[1]);
  } catch (error) {
    console.error("Error:", error);
  }
});
route.get("/entertainment", async (req, res) => {
  try {
    res.status(200).json(data[2]);
  } catch (error) {
    console.error("Error:", error);
  }
});
route.get("/health", async (req, res) => {
  try {
    res.status(200).json(data[3]);
  } catch (error) {
    console.error("Error:", error);
  }
});
route.get("/science", async (req, res) => {
  try {
    res.status(200).json(data[4]);
  } catch (error) {
    console.error("Error:", error);
  }
});
route.get("/sports", async (req, res) => {
  try {
    res.status(200).json(data[5]);
  } catch (error) {
    console.error("Error:", error);
  }
});
route.get("/technology", async (req, res) => {
  try {
    res.status(200).json(data[6]);
  } catch (error) {
    console.error("Error:", error);
  }
});


module.exports = route;
