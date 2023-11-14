const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();
const secretKey = '531'; // Replace with your actual secret key

// Token validation middleware
function validateToken(req, res, next) {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized: No token provided' });
    }

    jwt.verify(token, secretKey, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Unauthorized: Invalid token' });
        }

        // Attach the decoded user information to the request object for further use
        req.user = decoded;
        next();
    });
}

// Apply the middleware to the routes that require token validation
app.get('/secure-route', validateToken, (req, res) => {
    // Access user information from req.user
    res.json({ message: 'Secure route accessed', user: req.user });
});

// Other routes...

// Start the server
const port = 3651;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
