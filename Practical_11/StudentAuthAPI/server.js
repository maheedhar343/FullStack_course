// server.js
const express = require("express");
const bodyParser = require("body-parser");
const studentRoutes = require("./routes/students");
const authRoutes = require("./routes/auth");

const app = express();
const PORT = 4000;

app.use(bodyParser.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/students", studentRoutes);

app.get("/", (req, res) => {
  res.send("<h2>Welcome to Secure Student API (JWT Protected)</h2>");
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
