const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, this is your Node.js server!');
});

const PORT = 6001;

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});