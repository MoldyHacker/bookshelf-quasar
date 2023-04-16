<template>
  <q-dialog v-model="value">
    <q-card>
      <q-card-section>
        <div class="text-h6">Add Book Automagically</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        Sorry! This feature is not available yet...
      </q-card-section>

      <q-card-actions align="right" class="text-primary">
        <q-btn flat label="Close" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
export default {
  name: 'AddBookAutoDialog',
  props: ['modelValue'],
  emits: ['update:modelValue'],
  computed: {
    value: {
      get() {return this.modelValue},
      set(value) {this.$emit('update:modelValue', value)},
    }
  }
}
</script>

<style scoped>

</style>
