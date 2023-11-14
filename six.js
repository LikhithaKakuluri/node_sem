const express = require('express');
const path = require('path');

const app = express();
const port = 3007;

// Serve static files from the public directory
app.use(express.static('public1'));

// Define routes

// Homepage route
app.get('/', (req, res) => {
  res.send('<h1>This is the homepage!</h1><img src="/home.jpg" alt="Home">');
});

// About page route
app.get('/about', (req, res) => {
  res.send('<h1>Welcome to the about page!</h1><img src="/about.jpg" alt="About">');
});

// Contact page route
app.get('/contact', (req, res) => {
  res.send('<h1>Contact us at contact@example.com</h1><img src="/contact.jpg" alt="Contact">');
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
