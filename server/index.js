const express = require("express");
var cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv").config();

const authRoute = require("./routes/auth");

const app = express();

// middleware
app.use(cors());
app.use(bodyParser.json());

//middle ware
app.use("/api/v1/", authRoute);

//to check express is working
app.get("/", (req, res) => {
  res.send(`we are in express`);
});

mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) {
      console.log("Connecting to DB failed:", err);
    }
    console.log("Connected to DB");
  }
);
app.listen(8080, () => {
  console.log("Server running on 8080");
});
