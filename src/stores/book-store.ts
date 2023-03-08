import { defineStore } from 'pinia';
import {ref} from 'vue';

export const useBookStore = defineStore('book', {
  state: () => ({
    books: [
      { id: 1, title: 'Pre-fab homes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', bookmark: true },
      { id: 2, title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', bookmark: false },
      { id: 3, title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', bookmark: false },
      { id: 4, title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', bookmark: true},
    ],
  }),
  getters: {},
  actions: {},
});
