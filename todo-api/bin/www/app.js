const express = require('express');
const bodyParser = require('body-parser');
const todoRouter = require('./routes/todo');

const app = express();
const port = process.env.PORT || 3000;

// Parse incoming JSON data
app.use(bodyParser.json());

// Use todo router for API endpoints
app.use('/api/v1', todoRouter);

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});