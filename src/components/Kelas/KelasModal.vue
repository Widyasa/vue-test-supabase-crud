<script setup lang="ts">
import { reactive } from 'vue'
import { allApiStore, type Kelas } from '@/stores/GlobalStore'

const {insertData} = allApiStore()

const kelasState = reactive({
  class_name: ''
} as Kelas)
const emit = defineEmits(['resetForm'])
const createModel = async () => {
  try{
    const response = await insertData('classes', kelasState)
    if (response.status == 201) {
      kelasState.class_name = ''
      emit('resetForm')
    }
  } catch (error) {
    console.error(error)
  }
}
</script>

<template>
  <div class="modal fade" id="createKelasModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Create Kelas</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <form @submit.prevent="createModel">
          <div class="modal-body">
            <label for="" class="w-100">
              Nama Kelas
              <input type="text" v-model="kelasState.class_name" required class="form-control w-100" placeholder="Input Nama Kelas" >
            </label>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Save Kelas</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>