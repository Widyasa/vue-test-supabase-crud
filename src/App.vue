<script setup lang="ts">
import Login from '@/components/Login.vue'
import { onMounted } from 'vue'
import {userAuth} from '@/composable/userAuth'

const { isLoggedIn, setUser, supabase, router, route} = userAuth()
onMounted(() => {
  supabase.auth.onAuthStateChange((_, session) => {
    if (!session) {
      router.push('/')
    } else {
      setUser(session ? session.user : null)
      router.forward()
    }
  })
})
</script>

<template>
  <Login  v-if="!isLoggedIn"/>
  <div v-else>
    <RouterView />
  </div>


</template>

<style scoped>
</style>
