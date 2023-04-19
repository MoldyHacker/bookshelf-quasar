<template>
  <q-dialog persistent v-model="value">
    <q-card>
      <q-card-section class="row">
        <span class="col-10 text-h6">Edit Book</span>
        <q-btn class="col" flat rounded @click="newBook.bookmarkToggle()" :icon="newBook.bookmark ? 'bookmark' : 'bookmark_outline' "/>
<!--        <q-checkbox-->
<!--          class="col"-->
<!--          v-model="book.bookmark"-->
<!--          checked-icon="bookmark"-->
<!--          unchecked-icon="bookmark_outline"-->
<!--          indeterminate-icon="help"-->
<!--          color="black"-->
<!--          size="48px"-->
<!--          dense-->
<!--        />-->
      </q-card-section>

      <q-card-section class="q-pt-none q-gutter-sm">
        <q-input autofocus filled v-model="newBook.book.title" label="Title">
          <template v-slot:prepend>
            <q-icon name="menu_book" />
          </template>
        </q-input>
        <q-input filled v-model="newBook.book.author" label="Author">
          <template v-slot:prepend>
            <q-icon name="person" />
          </template>
        </q-input>
      </q-card-section>

      <q-card-actions align="right" class="text-primary">
        <q-btn flat label="Close" icon="cancel" v-close-popup />
        <q-btn flat label="Save" icon="save" @click="saveBook" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
import {defineComponent} from 'vue';

export default defineComponent ({
  name: 'EditBookDialog',
  props: ['modelValue', 'book'],
  emits: ['update:model-value', 'save-book'],
  data() {
    return {
      newBook: {...this.book}
    }
  },
  computed: {
    value: {
      get() {
        return this.modelValue
      },
      set(value) {
        this.$emit('update:modelValue', value)
      }
    }
  },
  methods: {
    saveBook() {
      // eslint-disable-next-line vue/no-mutating-props
      this.book = {...this.newBook};
      // eslint-disable-next-line vue/no-mutating-props
      // this.book.book.title = this.newBook.book.title;
      // this.$emit('save-book',this.newBook);
    }
  }
})
</script>

<style scoped>

</style>
