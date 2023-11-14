const express = require('express');
const app = express();

const PORT = 6004;

app.get('/info', (req, res) => {
  const userInfo = {
    name: 'sweety',
    email: 'sweety@gmail.com',
  };
  res.json(userInfo);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
