const express = require('express');
const app = express();
const port = 3153;

// Sample data (replace with your own data or connect to a database)
const books = [
  { id: 1, title: 'Book 1', author: 'Author 1' },
  { id: 2, title: 'Book 2', author: 'Author 2' },
  { id: 3, title: 'Book 3', author: 'Author 3' },
];

// Middleware to parse JSON requests
app.use(express.json());

// Route to get all books
app.get('/api/books', (req, res) => {
  res.json(books);
});

// Route to get a specific book by ID
app.get('/api/books/:id', (req, res) => {
  const bookId = parseInt(req.params.id);
  const book = books.find((b) => b.id === bookId);

  if (!book) {
    return res.status(404).json({ error: 'Book not found' });
  }

  res.json(book);
});

// Route to add a new book
app.post('/api/books', (req, res) => {
  const { title, author } = req.body;

  if (!title || !author) {
    return res.status(400).json({ error: 'Title and author are required' });
  }

  const newBook = {
    id: books.length + 1,
    title,
    author,
  };

  books.push(newBook);

  res.status(201).json(newBook);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
