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



function addBookToLibrary() {
    const bookTitle = document.getElementById('title');
    const bookAuthor = document.getElementById('author');
    const bookPages = document.getElementById('pages');

    const title = bookTitle.value;
    const author = bookAuthor.value;
    const pages = bookPages.value;

    const book = new Book(title, author, pages);
    
    myLibrary.push(book);
    console.log(myLibrary);
}
