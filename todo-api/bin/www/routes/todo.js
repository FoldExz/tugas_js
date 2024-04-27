const express = require('express');
const router = express.Router();

// Replace with your model logic (example using in-memory array)
const todos = [];

// Create todo
router.post('/todo', (req, res) => {
  const newTodo = {
    id: Date.now().toString(),
    title: req.body.title,
    description: req.body.description || '',
  };
  todos.push(newTodo);
  res.json({ message: 'Todo created successfully', todo: newTodo });
});

// Read all todos
router.get('/todo', (req, res) => {
  res.json(todos);
});

// Read todo by ID
router.get('/todo/:id', (req, res) => {
  const todo = todos.find(todo => todo.id === req.params.id);
  if (!todo) {
    return res.status(404).json({ message: 'Todo not found' });
  }
  res.json(todo);
});

// Update todo (replace the entire todo object)
router.put('/todo/:id', (req, res) => {
  const id = req.params.id;
  const updatedTodo = {
    id,
    title: req.body.title,
    description: req.body.description || '',
  };
  const index = todos.findIndex(todo => todo.id === id);
  if (index === -1) {
    return res.status(404).json({ message: 'Todo not found' });
  }
  todos[index] = updatedTodo;
  res.json({ message: 'Todo updated successfully', todo: updatedTodo });
});

// Delete todo
router.delete('/todo/:id', (req, res) => {
  const id = req.params.id;
  const index = todos.findIndex(todo => todo.id === id);
  if (index === -1) {
    return res.status(404).json({ message: 'Todo not found' });
  }
  todos.splice(index, 1);
  res.json({ message: 'Todo deleted successfully' });
});

module.exports = router;