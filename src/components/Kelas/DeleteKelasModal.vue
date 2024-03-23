<script setup lang="ts">

</script>

<template>
  <div class="modal fade" id="updateKelasModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Hapus Kelas</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <form @submit.prevent="deleteModel">
          <div class="modal-body">
            Yakin Mau Hapus Data?
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Hapus Kelas</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>