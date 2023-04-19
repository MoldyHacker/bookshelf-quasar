export default function BookItem(book, bookmark) {
  this.book = book;
  this.bookmark = bookmark ?? false;

  this.bookmarkToggle = function () {
    this.bookmark = !this.bookmark;
  };
}
