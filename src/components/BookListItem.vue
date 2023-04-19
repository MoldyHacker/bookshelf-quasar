<template>
  <book-list-item-details :book="book.book">
    <template v-slot:bookmark>
<!--      <q-checkbox-->
<!--        :v-model="book.bookmark"-->
<!--        checked-icon="bookmark"-->
<!--        unchecked-icon="bookmark_outline"-->
<!--        indeterminate-icon="help"-->
<!--        color="black"-->
<!--        size="48px"-->
<!--      />-->
      <q-btn flat rounded @click="book.bookmarkToggle()" :icon="book.bookmark ? 'bookmark' : 'bookmark_outline' "/>
    </template>
    <template v-slot:buttons>
      <tool-tip-button icon="delete" toolTip="Delete" @click="$emit('delete-book', book)" />
      <tool-tip-button icon="edit" toolTip="Edit" @click="editBook()" />
    </template>
  </book-list-item-details>

  <edit-book-dialog v-model="editDialog" :book="book" />
</template>

<script>
import {defineComponent} from 'vue';
import BookListItemDetails from 'components/BookListItemDetails.vue';
import EditBookDialog from 'components/Dialogs/EditBookDialog.vue';
import ToolTipButton from 'components/Buttons/ToolTipButton.vue';

export default defineComponent ({
  name: 'BookListItem',
  components: {ToolTipButton, EditBookDialog, BookListItemDetails},
  emits: ['delete-book'],
  props: {
    book: {
      type: Object,
      required: true,
    },
  },
  methods: {
    // truncate title and author names
    trunc(str, cha) { return str?.length > cha ? str.substring(0, cha) + '...' : str ?? 'N/A' },

    editBook() {
      console.log('edit book dialog')
      this.editDialog = false;
    }
  },
  data () {
    return {
      visible: false,
      editDialog: false,
    }
  },
})
</script>

<style lang="scss" scoped>
  .my-card {
    width: 250px;
    max-height: 500px;
  }

  .card-actions {
    height: 50px;
  }
</style>
