import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useUserStore = defineStore('user', () => {
  const user = ref(null)
  const isLoggedIn = computed(() => user.value !== null)
  function setUser(session:any){
    user.value = session
  }

  return { user, isLoggedIn, setUser }
})