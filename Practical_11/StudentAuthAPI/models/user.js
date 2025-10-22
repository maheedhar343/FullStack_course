const bcrypt = require("bcryptjs");

let users = [];

async function registerUser({ username, password }) {
  const hashed = await bcrypt.hash(password, 10);
  const newUser = { id: users.length + 1, username, password: hashed };
  users.push(newUser);
  return newUser;
}

async function validateUser(username, password) {
  const user = users.find(u => u.username === username);
  if (!user) return null;
  const isValid = await bcrypt.compare(password, user.password);
  return isValid ? user : null;
}

module.exports = { registerUser, validateUser };
