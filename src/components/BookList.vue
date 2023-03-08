<template>
  <div class="q-pa-md row items-start q-gutter-md constrain justify-center">
    <BookListItem
      v-for="book in books"
      :book="book"
      :key="book.id"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BookListItem from 'components/BookListItem.vue';

export default defineComponent({
  name: 'BookList',
  components: {BookListItem},
  props: {
    books: Array,
  },
  setup () {
    return {};
  },
});
</script>

<style lang="scss">
  .constrain {
    max-width: 900px;
  }
</style>
