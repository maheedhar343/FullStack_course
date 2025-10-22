const express = require("express");
const jwt = require("jsonwebtoken");
const { registerUser, validateUser } = require("../models/user");
const router = express.Router();

const SECRET_KEY = "secure_secret_key";

// Register new user
router.post("/register", async (req, res) => {
  const { username, password } = req.body;
  const user = await registerUser({ username, password });
  res.status(201).json({ message: "User registered successfully", user });
});

// Login and generate token
router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await validateUser(username, password);
  if (!user) return res.status(401).json({ message: "Invalid credentials" });

  const token = jwt.sign({ id: user.id, username: user.username }, SECRET_KEY, { expiresIn: "1h" });
  res.json({ message: "Login successful", token });
});

module.exports = router;
