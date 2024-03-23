<script setup lang="ts">
import { allApiStore, type Kelas } from '@/stores/GlobalStore'
import { reactive, watch } from 'vue'

const props = defineProps(['id'])
const emit = defineEmits(['resetForm'])
const {getDataById, updateData} = allApiStore()

const kelasState = reactive({
  class_name: ''
} as Kelas)
const getByIdModel = async () => {
  const { data } = await getDataById('*', 'classes', props.id)
  if (data) {
    kelasState.class_name = data[0].class_name
  }
}
const updateModel = async () => {
  try {
    const response = await updateData(props.id, 'classes', kelasState)
    if (response.status == 200) {
      emit('resetForm')
    }
  } catch (e) {
    console.error(e)
  }
}
watch(() => props.id, async (newValue, oldValue) => {
  if (newValue) {
    await getByIdModel();
  }
})
</script>

<template>
  <div class="modal fade" id="updateKelasModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Update Kelas</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <form @submit.prevent="updateModel">
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