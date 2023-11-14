const express = require('express');
const jwtMiddleware = require('C:/Users/kakul/OneDrive/Desktop/AWT531/jwtMiddleware.js'); // Adjust the path based on your file structure

const app = express();
const port = 3675;

const sampleUser = {
    username: 'exampleUser',
    role: 'admin',
    // other user properties...
};
// Apply the middleware to the routes that require token validation
app.get('/secure-route',(req,res) => {
    // Access user information from req.user
    res.json({ message: 'Secure route accessed',user:sampleUser});
});

// Other routes...

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    console.log("Secure route accessed");
    console.log("user:sweety   iat:1456788    exp:145678");

});
