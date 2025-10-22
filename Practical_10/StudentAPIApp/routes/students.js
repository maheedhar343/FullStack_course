// routes/students.js
const express = require("express");
const router = express.Router();
const Student = require("../models/student");

// GET all students
router.get("/", (req, res) => {
  res.json(Student.getAll());
});

// GET student by ID
router.get("/:id", (req, res) => {
  const student = Student.getById(parseInt(req.params.id));
  if (student) res.json(student);
  else res.status(404).json({ message: "Student not found" });
});

// POST add new student
router.post("/", (req, res) => {
  const newStudent = Student.add(req.body);
  res.status(201).json(newStudent);
});

// PUT update student
router.put("/:id", (req, res) => {
  const updatedStudent = Student.update(parseInt(req.params.id), req.body);
  if (updatedStudent) res.json(updatedStudent);
  else res.status(404).json({ message: "Student not found" });
});

// DELETE student
router.delete("/:id", (req, res) => {
  const deleted = Student.remove(parseInt(req.params.id));
  if (deleted) res.json({ message: "Student deleted successfully" });
  else res.status(404).json({ message: "Student not found" });
});

module.exports = router;
