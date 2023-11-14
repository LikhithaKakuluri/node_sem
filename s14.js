const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = 3173;
app.use(bodyParser.json());
app.use(express.static('public2'));
// In-memory storage for users (for demonstration purposes)
const users = [];
// Register a new user
app.post('/register', (req, res) => {
try 
{
    const { username, password } = req.body;
// Check if the username is already taken
if (users.find((user) => user.username === username)) {
return res.status(400).json({ success: false, message: 'Username already taken' });
}
// Store the user in memory (for demonstration purposes)
const user = { username, password };
users.push(user);
res.status(201).json({ success: true, message: 'User registered successfully' });
} catch (error) {
console.error(error);
res.status(500).json({ success: false, message: 'Internal Server Error' });
}
});
// Login
app.post('/login', (req, res) => {
try {
const { username, password } = req.body;
// Find the user by username
const user = users.find((user) => user.username === username);
// Check if the user exists
if (!user) {
return res.status(401).json({ success: false, message: 'Invalid username' });
}
// Check if the password is correct
if (user.password !== password) {
return res.status(401).json({ success: false, message: 'Invalid password' });
}
// Generate a dummy token (for demonstration purposes)
const token = 'dummy-token';
res.json({ success: true, token });
} catch (error) {
console.error(error);
res.status(500).json({ success: false, message: 'Internal Server Error' });
}
});
app.listen(port, () => {
console.log(`Server is running at http://localhost:${port}`);
})