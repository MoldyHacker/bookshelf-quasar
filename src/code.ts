import { ref, watch, onMounted, onUnmounted } from 'vue';

const useLocalStorage = (key: string, defaultValue: never[]) => {
  const value = ref(defaultValue)
  const read = () => {
    const v = window.localStorage.getItem(key)
    if (v != null) value.value = JSON.parse(v)
  }

  read()

  onMounted(() => {
    window.addEventListener('storage', read)
  })
  onUnmounted(() => {
    window.removeEventListener('storage', read)
  })

  const write = () => {
    window.localStorage.setItem(key, JSON.stringify(value.value))
  }
  watch([value], write, {deep: true})

  return value
}

export const useLocalBooks = () => {
  return useLocalStorage('books',[])
}
