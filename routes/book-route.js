const express = require('express');
const router = express.Router();
const Book = require('../model/BookModel');

router.get('/', (req, res, next) => {
    // This routes provides all the books in the database

})