const express = require('express');
const app = express();
app.use(express.json());
app.post('/users', (req, res) => {
  const user = req.body;
  // Missing error handling for missing or invalid user data
  db.createUser(user) // Assume db.createUser is an async function
    .then(() => res.status(201).send())
    .catch(err => {
      console.error(err);
      res.status(500).send(); // Generic error message
    });
});
