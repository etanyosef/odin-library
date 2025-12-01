let myLibrary = [];

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
    // const bookIsRead = document.getElementById('is-read');

    const title = bookTitle.value;
    const author = bookAuthor.value;
    const pages = bookPages.value;

    const book = new Book(title, author, pages);
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
        rowBook.append(td);
    });

    // add read button each row
    const btnRead = document.createElement('button');
    btnRead.textContent = 'Read';
    // add id to data-index-number to button
    btnRead.setAttribute('data-index-number', book.id);
    rowBook.append(btnRead);

    // add delete button each row
    const btnDeleteBook = document.createElement('button');
    btnDeleteBook.textContent = 'Delete';
    // add id to data-index-number to button
    btnDeleteBook.setAttribute('data-index-number', book.id);
    btnDeleteBook.addEventListener('click', () => {deleteBook(book.id)});
    rowBook.append(btnDeleteBook);

    tableBooks.append(rowBook);
}


function deleteBook(id) {
    // delete book from array using id
    myLibrary = myLibrary.filter(book => book.id != id);

    // remove book from ui using data-index-number from button
    const deleteBook = document.querySelector(`[data-index-number='${id}']`);
    console.log(deleteBook);
    deleteBook.parentElement.remove();
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