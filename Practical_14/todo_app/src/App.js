import React, { useState } from 'react';
import Header from './components/Header';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import About from './pages/About';
import { Routes, Route } from 'react-router-dom';

function App() {
  // This is where you initialize the todos state
  const [todos, setTodos] = useState([]);

  // Function to add a todo
  const addTodo = (title) => {
    const newTodo = {
      id: Date.now(),
      title: title,
      completed: false
    };
    setTodos([...todos, newTodo]);
  };

  // Function to toggle completion
  const toggleTodo = (id) => {
    setTodos(todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo));
  };

  // Function to delete a todo
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <AddTodo addTodo={addTodo} />
            <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
          </>
        } />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
