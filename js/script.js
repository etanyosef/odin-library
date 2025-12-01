const myLibrary = [];

function Book(title, author, pages) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.info = function() {
        return `Id: ${this.id}, Title: ${this.title}, Title: ${this.author}, Pages: ${this.pages}`;
    }
}

function addBookToLibrary(e) {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;

    const book = new Book(title, author, pages);

    myLibrary.push(book);
    console.log(myLibrary);
    e.preventDefault();
}

const btnAddBook = document.getElementById('add-book');
btnAddBook.addEventListener('click', addBookToLibrary);