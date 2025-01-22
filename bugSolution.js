const express = require('express');
const app = express();
app.use(express.json());

app.post('/users', async (req, res) => {
  const user = req.body;
  if (!user || !user.name || !user.email) {
    return res.status(400).json({ error: 'Missing or invalid user data' });
  }
  try {
    const result = await db.createUser(user);
    res.status(201).json({ message: 'User created successfully', data: result });
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Failed to create user', details: error.message });
  }
});
