const express = require('express');
const app = express();

const PORT = 6003;

// Define routes based on URL parameters
app.get('/', (req, res) => {
  const message = '<div style="text-align: center; font-weight: bold;">Welcome to the page!</div>';
  res.send(message);
});

app.get('/home', (req, res) => {
  res.send('Welcome to the home page!');
});

app.get('/profile', (req, res) => {
  res.send('Welcome to the profile page!');
});

// Dynamic route with parameters
app.get('/user/:username', (req, res) => {
  const { username } = req.params;
  res.send(`Welcome, ${username}!`);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});