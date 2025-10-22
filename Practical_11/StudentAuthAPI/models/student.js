let students = [
  { id: 1, name: "Aarav Sharma", age: 20, course: "B.Tech" },
  { id: 2, name: "Priya Singh", age: 19, course: "B.Sc" },
];

function getAll() { return students; }
function getById(id) { return students.find(s => s.id === id); }
function add(student) {
  student.id = students.length ? students[students.length - 1].id + 1 : 1;
  students.push(student);
  return student;
}
function update(id, newData) {
  const student = getById(id);
  if (student) Object.assign(student, newData);
  return student || null;
}
function remove(id) {
  const index = students.findIndex(s => s.id === id);
  return index !== -1 ? students.splice(index, 1) : null;
}

module.exports = { getAll, getById, add, update, remove };
