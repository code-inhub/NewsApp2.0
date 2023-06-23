const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const route = require("./route/route.js");
const app = express();
var cors = require("cors");
dotenv.config();
const connection = require("./conn/conn");
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use("/", route);

connection.conn();
// connection();

app.listen(PORT, (error) => {
  if (!error)
    console.log(
      "Server is Successfully Running and App is listening on port " + PORT
    );
  else console.log("Error occurred, server can't start", error);
});
