<template>
  <search-component></search-component>
  <q-page class="row items-baseline justify-evenly">
  </q-page>
  <book-list :books="books" />
</template>

<script lang="ts">
import BookList from 'components/BookList.vue';
import { ref } from 'vue';
import {Book, BookItem } from 'src/components/app-models';
import SearchComponent from 'components/SearchComponents/SearchComponent.vue';

export default {
  name: 'IndexPage',
  components: {
    SearchComponent,
    BookList
  },
  // methods: {
  // },
  // data() {
  //   return {
  //     books: [
  //       { id: 1, title: 'Pre-fab homes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', bookmark: true },
  //       { id: 2, title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', bookmark: false },
  //       { id: 3, title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', bookmark: false },
  //       { id: 4, title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', bookmark: true},
  //     ],
  //   }
  // },

  setup() {
    const books = ref([
      new BookItem(new Book('Harry Potter and the Sorcerers Stone', 'J.K. Rowling'), true),
      new BookItem(new Book('Paper Towns', 'John Green'), true),
      new BookItem(new Book('Best Airplanes', 'N/A'), false),
      ]);

    const addBook = (book: BookItem) => {this.books.push(book)};

    return {
      books,
      addBook,
    }
  },

};


// export default defineComponent({
//   name: 'IndexPage',
//   components: {BookList},
//   // components: { ExampleComponent },
//   setup () {
//     const todos = ref<Todo[]>([
//       { id: 1, content: 'ct1' },
//       { id: 2, content: 'ct2' },
//       { id: 3, content: 'ct3' },
//     ]);
//     const books = ref<[]>([])
//     const meta = ref<Meta>({
//       totalCount: 1200
//     });
//     return { todos, meta };
//   }
// });
</script>

<style lang="scss" scoped>

</style>
