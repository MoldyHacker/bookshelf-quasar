<template>
  <q-page class="row items-baseline justify-evenly">
    <book-list :books="books" @bookmark-book="bookmarkTheBook" />
  </q-page>
</template>

<script lang="ts">
import BookList from 'components/BookList.vue';
import { ref } from 'vue';
import { useLocalBooks } from 'src/code';

export default {
  name: 'IndexPage',
  components: {
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
    // const books = useLocalBooks()
    const books = ref([
        { id: 1, title: 'Harry Potter and the Sorcerers Stone', author: 'J.K. Rowling', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', bookmark: true },
        { id: 2, title: 'Favorite road trips', author: 'N/A', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', bookmark: false },
        { id: 3, title: 'Best airlines', author: 'N/A', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', bookmark: false },
        { id: 4, title: 'Best airlines', author: 'N/A', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', bookmark: true},
        { id: 4, title: 'Best airlines', author: 'N/A', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', bookmark: true},
        { id: 4, title: 'Best airlines', author: 'N/A', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', bookmark: true},
      ])

    let deleteIt = (book: { id: number; title: string; author: string; src: string; bookmark: boolean; }) => {books.value.splice(books.value.indexOf(book),1)};
    let bookmarkTheBook = (book: any) => {
      books.value[books.value.indexOf(book)].bookmark = !book.bookmark;
    };
    return {
      books,
      bookmarkTheBook,
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
