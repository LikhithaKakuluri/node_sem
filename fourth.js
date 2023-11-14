const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const PORT = 6015;

// Use body-parser middleware to parse POST request body
app.use(bodyParser.json());

// Route to handle POST requests
app.post('/log', (req, res) => {
  // Log the request data to the console
  console.log('Received POST request:', req.body);

  // Respond to the client
  res.send('Data logged successfully!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
