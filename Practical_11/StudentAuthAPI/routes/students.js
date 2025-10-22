const express = require("express");
const router = express.Router();
const Student = require("../models/student");
const authenticateToken = require("../middleware/authMiddleware");

// All routes below require JWT authorization
router.get("/", authenticateToken, (req, res) => res.json(Student.getAll()));

router.get("/:id", authenticateToken, (req, res) => {
  const student = Student.getById(parseInt(req.params.id));
  student ? res.json(student) : res.status(404).json({ message: "Student not found" });
});

router.post("/", authenticateToken, (req, res) => res.status(201).json(Student.add(req.body)));

router.put("/:id", authenticateToken, (req, res) => {
  const updated = Student.update(parseInt(req.params.id), req.body);
  updated ? res.json(updated) : res.status(404).json({ message: "Student not found" });
});

router.delete("/:id", authenticateToken, (req, res) => {
  Student.remove(parseInt(req.params.id))
    ? res.json({ message: "Student deleted successfully" })
    : res.status(404).json({ message: "Student not found" });
});

module.exports = router;
