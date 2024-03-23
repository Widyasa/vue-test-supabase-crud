<script setup lang="ts">
import { allApiStore, allInterfaces } from '@/stores/GlobalStore'
import { onMounted, ref } from 'vue'
import { storeToRefs } from 'pinia'
import KelasModal from '@/components/Kelas/KelasModal.vue'
import UpdateKelasModel from '@/components/Kelas/UpdateKelasModel.vue'
import DeleteKelasModal from '@/components/Kelas/DeleteKelasModal.vue'

const id = ref('')
const {getAllData} = allApiStore()
const {kelasList} = storeToRefs(allInterfaces())
const getModel = async () => {
  const {data} = await getAllData('*', 'classes')
  kelasList.value = data
}
const getDataId = (kelasId:string) => {
  id.value = kelasId
}
onMounted(() => {
  getModel()
})
</script>

<template>
  <div class="container mt-5">
    <div class="d-flex justify-content-between align-items-center">
      <h5 class="fs-3 fw-semibold">Kelas</h5>
      <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#createKelasModal">Tambah Kelas</button>
    </div>
    <table class="table table-bordered table-striped mt-2">
      <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Nama Kelas</th>
        <th scope="col">Action</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(kelas, index) in kelasList" :key="index">
        <th scope="row">{{ index + 1 }}</th>
        <td>{{ kelas.class_name }}</td>
        <td>
          <button data-bs-toggle="modal" data-bs-target="#updateKelasModal" @click="getDataId(kelas.id)" class="btn btn-warning text-white">Edit</button>
          <button data-bs-toggle="modal" data-bs-target="#deleteKelasModal" @click="getDataId(kelas.id)" class="btn btn-danger ms-2">Delete</button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
  <KelasModal @reset-form="getModel"/>
  <UpdateKelasModel @reset-form="getModel" :id="id"/>
  <DeleteKelasModal @reset-form="getModel" :id="id"/>
</template>

<style scoped>

</style>