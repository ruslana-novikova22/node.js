/*сутність "книга": назва, автор, рік видання, адреса видавництва,
ціна, книготорговельна фірма.*/

const books = [
    {
        "id": "3689e68ad161e733c560a40d7af78114",
        "title": "The Great Gatsby",
        "author": "F. Scott Fitzgerald",
        "publicationYear": "1925",
        "address": "123 West Egg Street, New York",
        "price": "12.99",
        "bookFirm": "Book Emporium"
    },
    {
        "id": "1e80852dca982178b3d7eabffa54382e",
        "title": "To Kill a Mockingbird",
        "author": "Harper Lee",
        "publicationYear": "1960",
        "address": "456 Mockingbird Lane, Maycomb",
        "price": "10.50",
        "bookFirm": "Literary Haven"
    },
    {
        "id": "c0a7c2a8d715a009397677b3e1a40b18",
        "title": "1984",
        "author": "George Orwell",
        "publicationYear": "1949",
        "address": "789 Ministry of Truth Road, Oceania",
        "price": "9.99",
        "bookFirm": "Book Emporium"
    },
];

module.exports = {
    books,
};