<script setup lang="ts">
import { allApiStore, allInterfaces, type Kelas, type Register, type Siswa } from '@/stores/GlobalStore'
import { onMounted, reactive, ref } from 'vue'
import { adminAuthClient, supabase } from '@/supabase'
import router from '@/router'
import { storeToRefs } from 'pinia'


const user_id = ref("")
const {insertData, getAllData} = allApiStore()
const {kelasList} = storeToRefs(allInterfaces())

const registerState = reactive({
  email : '',
  password : '',
  email_confirm : true
} as Register)

const studentState = reactive({
  name : '',
  phone_number : '',
  address: '',
  date_of_birth : '',
  class_id : '',
  user_id : ''
} )
const createModel = async () => {
  try{
    const responseUser = await adminAuthClient.createUser(registerState)
    studentState.user_id = responseUser.data.user.id
      const responseStudent = await insertData('students', studentState)
      console.log(responseStudent)
      if (responseStudent.status === 201) {
        router.push({name : 'siswa'})
      }
    }
   catch (error) {
    console.error(error)
  }
}
const getKelas = async () => {
  const {data} = await getAllData('*', 'classes')
  kelasList.value = data
}
onMounted(() => {
  getKelas()
})
</script>

<template>
  <div class="d-flex template-wrapper flex-column justify-content-center align-items-center">
    <h1 class="">Create Student</h1>

    <form @submit.prevent="createModel" class="input-width">
      <div class="row gy-4">
        <label for="" class=" col-6">
          Student Name
          <input type="text" v-model="studentState.name" required class="form-control w-100" placeholder="Name" >
        </label>
        <label for="" class=" col-6">
          Phone Number
          <input type="tel" v-model="studentState.phone_number" required class="form-control w-100" placeholder="Phone Number" >
        </label>
        <label for="" class=" col-6">
          Date of Birth
          <input type="date" v-model="studentState.date_of_birth" required class="form-control w-100" placeholder="Date of Birth" >
        </label>
        <label for="" class=" col-6">
          Class
          <select name="" id="" v-model="studentState.class_id"  class="form-select">
            <option value="" disabled selected>Choose Class</option>
            <option v-for="(item, index) in kelasList" :value="item.id" class="">
              {{item.class_name}}
            </option>
          </select>
        </label>
        <label for="" class=" col-6">
          Email
          <input type="email" v-model="registerState.email" required class="form-control w-100" placeholder="Input Email" >
        </label>
        <label for="" class=" col-6">
          password
          <input type="text" v-model="registerState.password" required class="form-control w-100" placeholder="Input password" >
        </label>
        <label for="" class=" col-12">
          Address
          <textarea type="text" v-model="studentState.address" required class="form-control w-100" placeholder="Address"></textarea>
        </label>
      </div>
      <div class="mt-5 d-flex justify-content-center gap-3">
        <button type="button" class="btn btn-secondary">Close</button>
        <button type="submit" class="btn btn-primary">Save</button>
      </div>
    </form>
  </div>
</template>

<style scoped>
.template-wrapper{
  height: 100vh;
}
.input-width{
  width: 600px;
}
</style>