// models/student.js
let students = [
  { id: 1, name: "Maheedhar", age: 22, course: "B.Tech" },
  { id: 2, name: "Priya Singh", age: 19, course: "B.Sc" },
];

// Get All Students
function getAll() {
  return students;
}

// Get Student by ID
function getById(id) {
  return students.find(student => student.id === id);
}

// Add Student
function add(student) {
  student.id = students.length ? students[students.length - 1].id + 1 : 1;
  students.push(student);
  return student;
}

// Update Student
function update(id, newData) {
  const student = getById(id);
  if (student) {
    Object.assign(student, newData);
    return student;
  }
  return null;
}

// Delete Student
function remove(id) {
  const index = students.findIndex(s => s.id === id);
  if (index !== -1) {
    return students.splice(index, 1);
  }
  return null;
}

module.exports = { getAll, getById, add, update, remove };
