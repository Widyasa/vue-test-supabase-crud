import { createClient } from '@supabase/supabase-js'


const supabaseUrl = 'https://meimlprlkjpijzktrwxj.supabase.co'
const supabaseAnonKey = 'your private key'


export const supabase = createClient(supabaseUrl, supabaseAnonKey);
