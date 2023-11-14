const express = require('express');
const basicAuth = require('express-basic-auth');

const app = express();
const port = 3164;

// Middleware for basic authentication
const auth = basicAuth({
  users: {'Sweety':'12345'}, // Add your username and password
  challenge:true, // Show login dialog when unauthorized
  unauthorizedResponse: 'Unauthorized access', // Response when unauthorized
});

// Use the authentication middleware for all routes
app.use(auth);

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

// Custom 404 error handling middleware
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, 'public1', '404.html'));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
