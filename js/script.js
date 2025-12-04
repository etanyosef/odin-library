let myLibrary = [];

// create book object
function Book(title, author, pages, isRead) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

// add default books manually
const book1 = new Book('Miming', 'Sagit', '500', false);
myLibrary.push(book1);
const book2 = new Book('Dogoy', 'Sevee', '400', true);
myLibrary.push(book2);


function clearMyLibrary() {
    const library = document.getElementById('books-container');
    while(library.firstChild) {
        library.removeChild(library.firstChild);
    }
}

const formAddBook = document.getElementById('add-book-form');


function addBookToLibrary(e) {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('is-read');

    const isRead = read.checked ? true : false;

    console.log(read);

    const book = new Book(title, author, pages, isRead);
    // add new book to myLibrary[]
    myLibrary.push(book);

    // clear books-container and redisplay books
    clearMyLibrary();
    displayBook();

    console.table(myLibrary);

    // reset form and close dialog
    
    formAddBook.reset();
    dialog.close();

    e.preventDefault();
}

const btnAddBook = document.getElementById('add-book');
btnAddBook.addEventListener('click', () => {
    addBookToLibrary;
});

const booksContainer = document.getElementById('books-container');

displayBook();

function displayBook() {

    for (let key in myLibrary) {
        if (myLibrary.hasOwnProperty(key)) {

            const book = myLibrary[key];

            // use cards display book
            const bookItem = document.createElement('div');
            bookItem.setAttribute('class', 'book-item');


            // use cards display book
            booksContainer.append(bookItem);

            // add book title to the top of card
            const bookTitle = document.createElement('h3');
            bookTitle.textContent = book.title;
            bookItem.append(bookTitle);

            // book id row
            const bookIdRow = document.createElement('div');
            const bookIdLabel = document.createElement('div');
            const bookIdData = document.createElement('div');

            bookIdLabel.textContent = 'Book Id:';
            bookIdData.textContent = book.id;

            bookIdRow.setAttribute('class', 'book-item-row');
            bookIdLabel.setAttribute('class', 'book-field');
            bookIdData.setAttribute('class', 'book-data');

            bookIdRow.append(bookIdLabel);
            bookIdRow.append(bookIdData);
            bookItem.append(bookIdRow);

            // book author row
            const bookAuthorRow = document.createElement('div');
            const bookAuthorLabel = document.createElement('div');
            const bookAuthorData = document.createElement('div');

            bookAuthorLabel.textContent = 'Author:';
            bookAuthorData.textContent = book.author;

            bookAuthorRow.setAttribute('class', 'book-item-row');
            bookAuthorLabel.setAttribute('class', 'book-field');
            bookAuthorData.setAttribute('class', 'book-data');

            bookAuthorRow.append(bookAuthorLabel);
            bookAuthorRow.append(bookAuthorData);
            bookItem.append(bookAuthorRow);

            // book pages row
            const bookPagesRow = document.createElement('div');
            const bookPagesLabel = document.createElement('div');
            const bookPagesData = document.createElement('div');

            bookPagesLabel.textContent = 'Pages:';
            bookPagesData.textContent = book.pages;

            bookPagesRow.setAttribute('class', 'book-item-row');
            bookPagesLabel.setAttribute('class', 'book-field');
            bookPagesData.setAttribute('class', 'book-data');

            bookPagesRow.append(bookPagesLabel);
            bookPagesRow.append(bookPagesData);
            bookItem.append(bookPagesRow);

            // book button row
            const bookButtonRow = document.createElement('div');
            const bookButtonRead = document.createElement('button');
            const bookButtonDelete = document.createElement('button');

            bookButtonRead.textContent = `${book.isRead ? 'Unread' : 'Read'}`;
            bookButtonRead.addEventListener('click', () => { toggleReadBook(book.id) });
            bookButtonDelete.textContent = 'Delete';

            bookButtonRow.setAttribute('class', 'book-item-row');
            bookButtonRead.setAttribute('class', 'book-button read-book');
            bookButtonDelete.setAttribute('class', 'book-button');

            bookButtonDelete.setAttribute('data-index-number', book.id);
            bookButtonDelete.addEventListener('click', () => { deleteBook(book.id) });

            bookButtonRow.append(bookButtonRead);
            bookButtonRow.append(bookButtonDelete);
            bookItem.append(bookButtonRow);

            const bookReadStatus = document.createElement('div');

            if (book.isRead === true) {
                bookReadStatus.classList.add('green');
                bookReadStatus.textContent = 'Read';
            } else {
                bookReadStatus.classList.add('red');
                bookReadStatus.textContent = 'Not Read';
            }

            bookItem.append(bookReadStatus);

        }
    }

}


function deleteBook(id) {
    // delete book from array using id
    myLibrary = myLibrary.filter(book => book.id != id);

    // remove book from ui using data-index-number from button
    const deleteBook = document.querySelector(`[data-index-number='${id}']`);
    console.log(deleteBook);
    deleteBook.parentElement.parentElement.remove();
}


const dialog = document.querySelector('dialog');
const showFormButton = document.getElementById('show-book-form');
const closeFormButton = document.getElementById('close-form');

// close dialog
closeFormButton.addEventListener('click', (e) => {
    formAddBook.reset();
    dialog.close();
    e.preventDefault();
});

// show add book form dialog
showFormButton.addEventListener('click', () => {
    dialog.showModal();
});

Book.prototype.toggleRead = function() {
    this.isRead = !this.isRead;
}

function toggleReadBook(id) {
    const index = myLibrary.findIndex(book => book.id === id);
    myLibrary[index].toggleRead();
    // clear and redisplay books
    clearMyLibrary();
    displayBook();
}
