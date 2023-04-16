function BookItem(book, bookmark) {
  this.book = book;
  this.bookmark = bookmark ?? false;

  this.bookmarkToggle = function () {
    this.bookmark = !this.bookmark;
  };
}

function Book(title, author) {
  this.title = title ?? 'N/A';
  this.author = author ?? 'N/A';
}

export {Book, BookItem}
