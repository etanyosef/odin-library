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

const booksContainer = document.getElementById('books-container');

// display books inside a table
for (let key in myLibrary)  {
    if (myLibrary.hasOwnProperty(key)) {
        const book = myLibrary[key];

        displayBook(book);

    }
}

function displayBook(book) {
    const rowBook = document.createElement('tr');

    // use cards display book
    const bookItem = document.createElement('div');
    bookItem.setAttribute('class', 'book-item');

    // loop through book and get all values inside
    // Object.keys(book).forEach(key => {
    //     // get each value inside book object
    //     let value = book[key];

    //     const td = document.createElement('td');
    //     td.textContent = value;
    //     rowBook.append(td);

    //     // use cards display book
    //     const bookInfoRow = document.createElement('div');
    //     bookInfoRow.setAttribute('class', 'book-item-row');

    //     const bookField = document.createElement('div');
    //     bookField.textContent = key;
    //     bookField.setAttribute('class', 'book-field');
    //     bookInfoRow.append(bookField);

    //     const bookData = document.createElement('div');
    //     bookData.textContent = value;
    //     bookData.setAttribute('class', 'book-data');
    //     bookInfoRow.append(bookData);

    //     bookItem.append(bookInfoRow);

    // });

    // // add read button each row
    // const btnRead = document.createElement('button');
    // btnRead.textContent = 'Read';
    // // add id to data-index-number to button
    // btnRead.setAttribute('data-index-number', book.id);
    // rowBook.append(btnRead);

    // // add delete button each row
    // const btnDeleteBook = document.createElement('button');
    // btnDeleteBook.textContent = 'Delete';
    // // add id to data-index-number to button
    // btnDeleteBook.setAttribute('data-index-number', book.id);
    // btnDeleteBook.addEventListener('click', () => {deleteBook(book.id)});
    // rowBook.append(btnDeleteBook);

    tableBooks.append(rowBook);

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

    bookButtonRead.textContent = 'Read';
    bookButtonDelete.textContent = 'Delete';

    bookButtonRow.setAttribute('class', 'book-item-row');
    bookButtonRead.setAttribute('class', 'book-button');
    bookButtonDelete.setAttribute('class', 'book-button');

    bookButtonDelete.setAttribute('data-index-number', book.id);
    bookButtonDelete.addEventListener('click', () => { deleteBook(book.id) });

    bookButtonRow.append(bookButtonRead);
    bookButtonRow.append(bookButtonDelete);
    bookItem.append(bookButtonRow);

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
    dialog.close();
    e.preventDefault();
});

// show add book form dialog
showFormButton.addEventListener('click', () => {
    dialog.showModal();
});