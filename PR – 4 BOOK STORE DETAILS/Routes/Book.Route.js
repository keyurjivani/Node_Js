const Route  = require('express');
const { GetBook, getStore, GetBookById, AddBook, UpdateBook, DeleteBook, filterBooks } = require('../Controller/Book.Controller');

const validateBook = require('../Middleware/Book.Validation');

const BookRoute = Route();

BookRoute.get("/", getStore);
BookRoute.get('/books', GetBook);
BookRoute.get('/books/book/:id', GetBookById);
BookRoute.post("/books/addbooks", validateBook, AddBook);
BookRoute.patch("/books/update/:id", UpdateBook);
BookRoute.delete("/book/delete/:id", DeleteBook);
BookRoute.get('/books/filter', filterBooks);

module.exports = BookRoute;