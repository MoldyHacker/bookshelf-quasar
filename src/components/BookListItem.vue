<template>
    <q-card class="my-card" @mouseenter="visible = true" @mouseleave="visible = false">

<!--      <img :src="book.src" width="250px">-->
      <q-card-section horizontal>
        <q-btn flat rounded @click="$emit('bookmark-book',book)" :icon="book.bookmark ? 'bookmark' : 'bookmark_outline' "/>
        <span class="text-h6">{{ trunc(book.title, 39) }}</span>
      </q-card-section>

      <q-separator inset />

      <q-card-section class="q-pt-none">
        <q-icon color="black" name="person"  size="24px"/>
        <span class="text-subtitle2 q-pl-md">{{ trunc(book.author, 18) }}</span>
      </q-card-section>



      <div class="card-actions">
      <q-card-actions align="right" v-show="visible">
        <q-btn flat icon="edit" >Edit</q-btn>
        <q-btn flat icon="delete" >Delete</q-btn>
      </q-card-actions>
      </div>
        <q-expansion-item
        label="#tags"
        label-lines="1"
        >
          <q-card-section>
            #tag1 #tag2 #tag3
          </q-card-section>
        </q-expansion-item>
    </q-card>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue';

function trunc(str: string, cha: number) {
  return str.length > cha ? str.substring(0,cha) + '...' : str;
}


export default defineComponent ({
  name: 'BookListItem',
  props: {
    book: {
      type: Object,
      required: true,
    },
  },
  methods: {trunc},
  setup () {
    return {
      visible: ref(false)
    }
  },
})
</script>

<style lang="scss" scoped>
  .my-card {
    width: 250px;
    /*max-height: 250px;*/
    max-height: 500px;
  }

  .card-actions {
    height: 50px;
  }
</style>
