<template>
    <q-card class="my-card">

<!--      <img :src="book.src" width="250px">-->
      <q-card-section horizontal>
        <q-btn flat rounded @click="!book.bookmark" :icon="book.bookmark ? 'bookmark' : 'bookmark_outline' "/>
        <span class="text-h6">{{ trunc(book.title, 39) }}</span>
      </q-card-section>

      <q-separator inset />

      <q-card-section class="q-pt-none">
        <q-icon color="black" name="person"  size="24px"/>
        <span class="text-subtitle2 q-pl-md">{{ trunc(book.author, 39) }}</span>
      </q-card-section>

      <q-list>
        <q-item clickable>
          <q-item-section avatar>
            <q-icon color="primary" name="local_bar" />
          </q-item-section>

          <q-item-section>
            <q-item-label>Bar XYZ</q-item-label>
            <q-item-label caption>Have a drink.</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>

        <q-expansion-item>
          <q-card-section>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
            commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
            eveniet doloribus ullam aliquid.
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

<style scoped>
  .my-card {
    width: 250px;
    /*max-height: 250px;*/
    max-height: 500px;
  }
</style>
