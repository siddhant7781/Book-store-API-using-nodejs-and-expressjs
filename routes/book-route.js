const express = require('express');
const router = express.Router();
const Book = require('../model/BookModel');
const booksController = require('../controllers/book-controller');

router.get('/', booksController.getAllBooks);
router.post('/', booksController.addBook);
router.get('/:id', booksController.getBookById);
router.put('/:id', booksController.updateBookById);
router.delete('/:id', booksController.deleteBookById);

module.exports = router;