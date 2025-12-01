const myLibrary = [];

function Book(title, author, pages, isRead) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
    // this.info = function() {
    //     return `Id: ${this.id}, Title: ${this.title}, Title: ${this.author}, Pages: ${this.pages}`;
    // }
}

// add default books manually
const book1 = new Book('Miming', 'Sagit', '500', false);
myLibrary.push(book1);
const book2 = new Book('Dogoy', 'Sevee', '400', true);
myLibrary.push(book2);


function addBookToLibrary(e) {
    const bookTitle = document.getElementById('title');
    const bookAuthor = document.getElementById('author');
    const bookPages = document.getElementById('pages');
    const bookIsRead = document.getElementById('is-read');

    const title = bookTitle.value;
    const author = bookAuthor.value;
    const pages = bookPages.value;

    const book = new Book(title, author, pages, isRead);
    // add new book to myLibrary[]
    myLibrary.push(book);

    displayBook(book);

    // clear inputs
    bookTitle.value = '';
    bookAuthor.value = '';
    bookPages.value = '';

    console.table(myLibrary);

    // close form dialog
    dialog.close();

    e.preventDefault();
}

const btnAddBook = document.getElementById('add-book');
btnAddBook.addEventListener('click', addBookToLibrary);

const tableBooks = document.getElementById('table-books');

// display books inside a table
for (let key in myLibrary)  {
    if (myLibrary.hasOwnProperty(key)) {
        const book = myLibrary[key];

        displayBook(book);

    }
}

function displayBook(book) {
    const rowBook = document.createElement('tr');
    // loop through book and get all values inside
    Object.keys(book).forEach(key => {
        // get each value inside book object
        let value = book[key];
        const td = document.createElement('td');
        td.textContent = value;
        rowBook.setAttribute('data-index-number', book.id);
        rowBook.append(td);
    });
    tableBooks.append(rowBook);
}

const dialog = document.querySelector('dialog');
const showFormButton = document.getElementById('show-book-form');
const closeFormButton = document.getElementById('close-form');

// close dialog
closeFormButton.addEventListener('click', (e) => {
    dialog.close();
    e.preventDefault();
});

// show add book form dialog
showFormButton.addEventListener('click', () => {
    dialog.showModal();
});