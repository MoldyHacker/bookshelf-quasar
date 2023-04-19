<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-toolbar-title>
          <div class="row">
            <q-avatar>
              <q-icon name="library_books" size="30px"></q-icon>
            </q-avatar>
            Bookshelf
          </div>
        </q-toolbar-title>
      </q-toolbar>

    </q-header>

    <q-page-container>

      <search-component @search-obj="searchUpdate" />

      <book-list :books="books" :search="searchObj" @delete-book="removeBook" @save-book="saveBook" />

      <add-book-auto-dialog v-model="addBookAutomagically" />
      <add-book-manual-dialog v-model="addBookManually" @add-item="addBook" />

    </q-page-container>

    <!--FAB for adding a book-->
    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-fab
        icon="add"
        direction="up"
        color="accent"
      >
        <q-fab-action external-label label-position="left" @click="addBookManually = true" color="primary" icon="menu_book" label="Add Manually" ></q-fab-action>
        <q-fab-action external-label label-position="left" @click="addBookAutomagically = true" color="primary" icon="collections_bookmark" label="Add Automagically" ></q-fab-action>
      </q-fab>
    </q-page-sticky>

    <q-footer elevated class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title>
          <!--            <q-avatar>-->
          <!--              <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">-->
          <!--            </q-avatar>-->
          <!--            <div>Title</div>-->
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>

  </q-layout>
</template>

<script>
import BookList from 'components/BookList.vue';
// import { ref } from 'vue';
import Book from 'src/models/Book';
import BookItem from 'src/models/BookItem';
import SearchComponent from 'components/SearchComponents/SearchComponent.vue';
import AddBookAutoDialog from 'components/Dialogs/AddBook/AddBookAutoDialog.vue';
import AddBookManualDialog from 'components/Dialogs/AddBook/AddBookManualDialog.vue';

export default {
  name: 'IndexPage',
  components: {
    AddBookManualDialog,
    AddBookAutoDialog,
    BookList,
    SearchComponent,
  },
  methods: {
    // update the Search Object from the search bar component
    searchUpdate(searchO) {
      this.searchObj = searchO;
      // console.log('working', this.searchObj)
    },

    // Book manipulation
    // Add Book
    addBook(book) {
      book.id = Date.now();
      this.books.push(new BookItem( new Book(book.title, book.author), book.bookmark));
      // console.log(this.books);
      // console.log('book added', book);
    },

    // Remove a book from the array
    removeBook(book) {
      this.books.splice(this.books.indexOf(book),1);
      // console.log('removed book', book);
    },

    saveBook(book) {
      this.books.splice(this.book.indexOf(book.id), 1);
      this.books.push()
    },
  },
  data() {
    return {
      books: [
        new BookItem(new Book('Harry Potter and the Sorcerers Stone', 'J.K. Rowling'), true),
        new BookItem(new Book('Paper Towns', 'John Green'), true),
        new BookItem(new Book('Best Airplanes', 'N/A'), false),
      ],
      searchObj: {
        sortCategory: 'title',
        searchTerm: '',
        bookmark: false,
      },
      // Dialogs / Modals Controls
      addBookAutomagically: false,
      addBookManually: false,
    }
  },

  // setup() {
  //   const books = ref([
  //     new BookItem(new Book('Harry Potter and the Sorcerers Stone', 'J.K. Rowling'), true),
  //     new BookItem(new Book('Paper Towns', 'John Green'), true),
  //     new BookItem(new Book('Best Airplanes', 'N/A'), false),
  //     ]);
  //
  //   // const addBook = (book: BookItem) => {books.value.push(book)};
  //
  //   return {
  //     books,
  //     // addBook,
  //   }
  // },

};
</script>

<style lang="scss" scoped>

</style>
