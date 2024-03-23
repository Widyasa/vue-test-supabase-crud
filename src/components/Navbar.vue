<script setup lang="ts">
import { supabase } from '@/supabase'

async function logout(){
  let { error } = await supabase.auth.signOut()
  location.reload()
}
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <RouterLink to="/" class="nav-link" >Home</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/kelas">Kelas</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/siswa">Siswa</RouterLink>
          </li>
        </ul>
      </div>
      <div class="">
        <button class="btn btn-danger" @click="logout">logout</button>
      </div>
    </div>
  </nav>
</template>

<style scoped>

</style>