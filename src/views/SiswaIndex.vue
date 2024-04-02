<script setup lang="ts">
import { allApiStore, allInterfaces } from '@/stores/GlobalStore'
import { onMounted, ref } from 'vue'
import { storeToRefs } from 'pinia'
import KelasModal from '@/components/Kelas/KelasModal.vue'
import UpdateKelasModel from '@/components/Kelas/UpdateKelasModel.vue'
import DeleteKelasModal from '@/components/Kelas/DeleteKelasModal.vue'
import { adminAuthClient, supabase } from '@/supabase'

const id = ref('')
const {getAllData, getRelationData} = allApiStore()
const {siswaList} = storeToRefs(allInterfaces())
const getModel = async () => {
  const {data} = await getRelationData()
  // const { data, error } = await adminAuthClient.listUsers()

  console.log(data)
  siswaList.value = data
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
      <h5 class="fs-3 fw-semibold">Siswa</h5>
      <RouterLink :to="{name : 'siswaCreate'}" class="btn btn-primary" >Tambah Siswa</RouterLink>
    </div>
    <table class="table table-bordered table-striped mt-2">
      <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Nama Siswa</th>
        <th scope="col">No HP</th>
        <th scope="col">Alamat</th>
        <th scope="col">Kelas</th>
        <th scope="col">Email</th>

        <th scope="col">Action</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(item, index) in siswaList" :key="index">
        <th scope="row">{{ index + 1 }}</th>
        <td>{{ item.name }}</td>
        <td>{{ item.phone_number }}</td>
        <td>{{ item.address }}</td>
        <td>{{ item.classes.class_name }}</td>
        <td>{{ item.users.email }}</td>
        <td>
          <button data-bs-toggle="modal" data-bs-target="#updateKelasModal" @click="getDataId(kelas.id)" class="btn btn-warning text-white">Edit</button>
          <button data-bs-toggle="modal" data-bs-target="#deleteKelasModal" @click="getDataId(kelas.id)" class="btn btn-danger ms-2">Delete</button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>

</style>