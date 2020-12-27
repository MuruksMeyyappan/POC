const express = require("express");
const bcrypt = require("bcrypt");
const authModels = require("../models/authModels");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("hit int router");
});

router.post("/login", async (req, res) => {
    const user = await authModels.findOne({
      username: req.body.userName,
    });
    console.log("user ---->", user);
    // checking if the user exists
    if (!user) {
      return res.status(400).json({ message: "Invalid Password" });
    }
  
    // checking if the password is correct
  
    const validPass = await bcrypt.compare(req.body.password, user.password);
    if (!validPass) return res.status(400).json({ message: "Invalid Password" });
    try {
      // const data = post.save();
      res.status(200).json({ status: 200 });
    } catch (err) {
      if (err) {
        res.status(500).json({ message: err });
      }
    }
  });
  
router.post("/register", async (req, res) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);
  console.log("Hashing password done");

  const authData = new authModels({
    username: req.body.userName,
    password: hashedPassword,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
  });
  try {
    const data = await authData.save();
    console.log(data);
    res.status(200).json({ status: 200, data: data._id });
  } catch (err) {
    if (err) {
      res.status(500).json({ message: err });
    }
  }
});

module.exports = router;