const bookService = require('../services/books.service');

async function createBook(req, res) {
    try {
       const newBook = await bookService.create(req.body);

        res.status(200).json({
            status: 200,
            data: newBook,
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            status: 500,
            error: err,
        });
    }
};

async function getBooks(req, res) {
    try {
      //const { sort } = req.query;
      let books = await bookService.find(req.query);
  
      res.status(200).json({
        status: 200,
        data: books,
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({
        status: 500,
        error: err,
      });
    }
};

async function getBook(req, res) {
    try {
        const { bookId } = req.params;
        const book = await bookService.findById(bookId);

        if (!book) {
            return res.status(400).json({
                status: 400,
                message: 'Book is not found.',
            });
        }

        res.status(200).json({
            status: 200,
            data: book,
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            status: 500,
            error: err,
        });
    }
};

async function updateBook(req, res) {
    try {
        const { bookId } = req.params;
        const bookData = req.body;
        await bookService.findByIdAndUpdate(bookId, bookData);

        res.status(200).json({
            status: 200,
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            status: 500,
            error: err,
        });
    }
};

async function deleteBook(req, res) {
    try {
        const { bookId } = req.params;
        await bookService.findByIdAndDelete(bookId);

        res.status(200).json({
            status: 200,
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            status: 500,
            error: err,
        });
    }
};

module.exports = {
    createBook,
    getBooks,
    getBook,
    updateBook,
    deleteBook,
};