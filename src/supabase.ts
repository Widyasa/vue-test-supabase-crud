import { createClient } from '@supabase/supabase-js'


const supabaseUrl = 'https://meimlprlkjpijzktrwxj.supabase.co'
const supabaseServiceRole = import.meta.env.VITE_SUPABASE_SERVICE_ROLE
const supabaseAnnonKey = import.meta.env.VITE_SUPABASE_ANNON_KEY


export const supabase = createClient(supabaseUrl, supabaseServiceRole, {
  auth : {
    // autoRefreshToken : false,
    // persistSession : false
  }
});



export const adminAuthClient = supabase.auth.admin
