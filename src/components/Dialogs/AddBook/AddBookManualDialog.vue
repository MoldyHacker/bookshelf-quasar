<template>
  <q-dialog persistent v-model="value">
    <q-card>
      <!--header-->
      <q-card-section class="row">
        <span class="col-10 text-h6">Add Book Manually</span>
        <!-- <q-btn class="col" flat rounded @click="newBook.bookmark = !newBook.bookmark" :icon="newBook.bookmark ? 'bookmark' : 'bookmark_outline' "/>-->
        <q-checkbox
          class="col"
          v-model="newBook.bookmark"
          checked-icon="bookmark"
          unchecked-icon="bookmark_outline"
          indeterminate-icon="help"
          color="black"
          size="48px"
          dense
        />
      </q-card-section>

      <!--Body-->
      <q-card-section class="q-pt-none q-gutter-sm">
        <!--Title-->
        <q-input autofocus filled v-model="newBook.title" label="Title">
          <template v-slot:prepend>
            <q-icon name="menu_book" />
          </template>
        </q-input>
        <!--Author-->
        <q-input filled v-model="newBook.author" label="Author">
          <template v-slot:prepend>
            <q-icon name="person" />
          </template>
        </q-input>
      </q-card-section>

      <q-card-actions align="right" class="text-primary">
        <q-btn flat label="Close" icon="delete" @click="resetBook" v-close-popup />
        <q-btn flat label="Save" icon="save" @click="addBook" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
export default {
  name: 'AddBookManualDialog',
  props: ['modelValue'],
  emits: ['update:modelValue', 'add-item'],
  data() {
    return {
      newBook: {
        title: '',
        author: '',
        bookmark: false,
      },
    }
  },
  computed: {
    value: {
      get() { return this.modelValue },
      set(value) { this.$emit('update:modelValue', value)}
    }
  },
  methods: {
    addBook() {
      this.$emit('add-item', this.newBook);
      console.log(this.newBook);
      this.resetBook();
    },
    resetBook() {
      this.newBook = {
        title: '',
        author: '',
        bookmark: false,
      }
    }
  },
}
</script>

<style scoped>

</style>
