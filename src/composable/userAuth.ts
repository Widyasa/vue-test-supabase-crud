import { useUserStore } from '@/stores/User'
import { storeToRefs } from 'pinia'
import { useRoute, useRouter } from 'vue-router'
import { supabase } from '@/supabase'


export function userAuth() {
  const userStore = useUserStore()
  const {user, setUser} = userStore
  const {isLoggedIn} = storeToRefs(userStore)

  const router = useRouter()
  const route = useRoute()

  const validateEmail = (str: string) => {
    if (!str) return false;
    const pattern =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return pattern.test(str);
  };

  return {
    user,
    isLoggedIn,
    setUser,
    router,
    route,
    validateEmail,
    supabase,
  }
}