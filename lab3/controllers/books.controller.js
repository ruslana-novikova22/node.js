const bookService = require('../services/books.service');

async function createBook(req, res) {
    try {
        console.log('Request Body:', req.body);
        const newBookData = req.body;
        const newBook = await bookService.create(newBookData);
        
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
        res.status(200)
            .json({
                status: 200,
                data: await bookService.find({}),
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
        const { id } = req.params;
        const book = await bookService.findById(id);

        if (!book) {
            return res.status(400).json({
                status: 400,
                message: 'Book not found.',
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
        const { id } = req.params;
        const bookData = req.body;
        await bookService.findByIdAndUpdate(id, bookData);

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
        const { id } = req.params;
        await bookService.findByIdAndDelete(id);

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