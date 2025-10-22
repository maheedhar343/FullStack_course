// server.js
const express = require("express");
const bodyParser = require("body-parser");
const studentRoutes = require("./routes/students");

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());

// Routes
app.use("/api/students", studentRoutes);

// Default Route
app.get("/", (req, res) => {
  res.send("<h2>Welcome to Student API App</h2>");
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
