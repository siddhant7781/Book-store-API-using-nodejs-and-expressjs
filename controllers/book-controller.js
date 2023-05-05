const Book = require('../model/BookModel');

exports.getAllBooks = async (req, res, next) => {

    let books;
    try {
        books = await Book.find();
    } catch (err) {
        console.log(err);
    }

    if (!books) {
        return res.status(404).json({
            message: "No books found"
        })
    }
    return res.status(200).json({
        message: "success",
        books
    })

}


exports.getBookById = async (req, res, next) => {
    let book;
    const id = req.params.id;
    try {
        book = await Book.findById(id)

    } catch (err) { console.log(err) }
    if (!book) {
        return res.status(404).json({
            message: "Book not found"
        })
    }
    return res.status(200).json({
        message: "success",
        book
    })
}

exports.addBook = async (req, res, next) => {
    let book;
    const { name, author, description, price, available, image } = req.body;
    try {
        book = new Book({
            name,
            author,
            description,
            price,
            available,
            image
        })
        await book.save();
    } catch (err) {
        console.log(err)
    }
    if (!book) {
        return res.status(500).json({
            message: "Unable to add book"
        })
    }
    return res.status(201).json({
        message: "success",
        book
    })
}

exports.updateBookById = async (req, res, next) => {
    let book;
    const { name, author, description, price, available, image } = req.body;
    const id = req.params.id;
    try {
        book = await Book.findByIdAndUpdate(id, {
            name,
            author,
            description,
            price,
            available,
            image
        });
        book = await book.save();

    } catch (err) {
        console.log(err)
    }
    if (!book) {
        return res.status(404).json({
            message: "Unable to update book by this Id"
        })
    }
    return res.status(200).json({
        message: "success",
        book
    })
}

exports.deleteBookById = async (req, res, next) => {
    const id = req.params.id;
    let book;
    try {
        book = await Book.findByIdAndRemove(id);
    } catch (err) {
        console.log(err);
    }
    if (!book) {
        return res.status(404).json({
            message: "Unable to delete book by this Id"
        })
    }
    return res.status(200).json({
        message: "successfully deleted",

    })

}
