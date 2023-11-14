const express = require('express');
const path = require('path');
const app = express();
const port =3654;
app.use(express.static('public1'));
app.get('/', (req, res) => {
  res.send('<h1>This is the homepage!</h1><img src="/home.jpg" alt="Home">');
});
app.get('/about', (req, res) => {
  res.send('<h1>Welcome to the about page!</h1><img src="/about.jpg" alt="About">');
});
app.get('/contact', (req, res) => {
  res.send('<h1>Contact us at contact@example.com</h1><img src="/contact.jpg" alt="Contact">');
});

// Custom error handler middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({error: 'Internal Server Error',message: err.message,});
});

app.get('/error', (req, res, next) => {
    // Intentionally throwing an error for testing
    next(new Error(500,'Intentional Error'));
  });

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
