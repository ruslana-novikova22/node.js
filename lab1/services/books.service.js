const mockData = require('../helpers/mock-data');

function _generateId() {
    const crypto = require("crypto");
    return crypto.randomBytes(16).toString("hex");
}

async function create(book) {
    const newBook = { id: _generateId(), ...book };
    mockData.books.push(newBook);

    return newBook;
}

async function find({ searchString = '', page = 1, perPage = Number.MAX_SAFE_INTEGER }) {
    searchString = searchString?.toLowerCase();
    const searchResult = mockData.books.filter(u => u.title?.toLowerCase().includes(searchString));

    return {
        items: searchResult.slice((page - 1)*perPage, page * perPage),
        count: searchResult.length,
    }
}

async function findById(id) {
    return mockData.books.find(u => u.id == id);
}

async function update(bookId, bookData) {
    const index = mockData.books.findIndex(u => u.id === bookId);

    if (index === -1) return;

    const updatedBook = { ...mockData.books[index], ...bookData, id: bookId };

    mockData.books[index] = updatedBook;
};

async function remove(id) {
    mockData.books = mockData.books.filter(u => u.id != id);
};

module.exports = {
    create,
    find,
    findById,
    update,
    remove,
};