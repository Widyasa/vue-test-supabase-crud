<script setup lang="ts">
import { reactive } from 'vue'
import { supabase } from '@/supabase'

const state = reactive({
  error: undefined,
  email: "",
  password: "",
})

const login = async () => {
  let { data, error } = await supabase.auth.signInWithPassword({
    email: state.email,
    password: state.password
  })
}
</script>

<template>
<div class="d-flex justify-content-center align-items-center" style="height: 100vh">
  <div class="d-flex flex-column">
    <label for="">
      <input type="email" class="form-control" v-model="state.email" placeholder="input email" name="" >
    </label>
    <label for="">
      <input type="password" class="form-control mt-2" v-model="state.password" placeholder="input password" name="">
    </label>
    <button @click="login" class="btn btn-primary mt-3">Login</button>
  </div>
</div>
</template>

<style scoped>

</style>