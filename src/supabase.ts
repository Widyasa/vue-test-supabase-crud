import { createClient } from '@supabase/supabase-js'


const supabaseUrl = 'https://meimlprlkjpijzktrwxj.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1laW1scHJsa2pwaWp6a3Ryd3hqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA3NTMyMDgsImV4cCI6MjAyNjMyOTIwOH0.vF-MtFGM_AQ3DOtZAFnjkGyCEPa-Dat5Kt6947uvvzE'


export const supabase = createClient(supabaseUrl, supabaseAnonKey);