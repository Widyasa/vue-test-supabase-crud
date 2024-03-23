import { defineStore } from 'pinia'
import { supabase } from '@/supabase'
import { ref } from 'vue'

export interface Kelas{
  id: string;
  class_name: string;
}
export interface Siswa{
  name: string;
  phone_number: string;
  address:string;
  date_of_birth: string;
  class_id: string;
}

export const allInterfaces = defineStore('allInterfaces', () => {

  const kelasSingle = ref<Kelas>({} as Kelas)
  const kelasList = ref<Kelas[]>([] as Kelas[])
  const siswaSingle = ref<Siswa>({} as Siswa)
  const siswaList = ref<Siswa[]>([] as Siswa[])

  return{
    kelasSingle,
    kelasList,
    siswaSingle,
    siswaList
  }

})
export const allApiStore = defineStore('allApiStore',() => {
  async function getAllData(view:string, tableName:string){
    return await supabase .from(tableName) .select(view)
  }
  async function getDataById(view:string, tableName:string, id:string){
    return await supabase .from(tableName) .select(view) .eq('id', id)
  }
  async function insertData(tableName:string, request:object){
    return await supabase .from(tableName) .insert([request]) .select()
  }
  async function updateData(id:string, tableName:string, request:object){
    return await supabase .from(tableName) .update([request]) .eq('id', id)  .select()
  }
  async function deleteData(id:string, tableName:string){
    return await supabase .from(tableName) .delete() .eq(id)
  }
  return {
    getAllData,
    getDataById,
    insertData,
    updateData,
    deleteData
  }
})