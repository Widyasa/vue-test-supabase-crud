<script setup lang="ts">
import { allApiStore } from '@/stores/GlobalStore'

const props = defineProps(['id'])
const emit = defineEmits(['reset-form'])
const {deleteData} = allApiStore()

const deleteModel = async () => {
  try {
    const response = await deleteData(props.id, 'classes')
    console.log(response)
    if (response.status == 204) {
      emit('reset-form')
    }
  } catch (e) {
    console.error(e)
  }

}
</script>

<template>
  <div class="modal fade" id="deleteKelasModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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