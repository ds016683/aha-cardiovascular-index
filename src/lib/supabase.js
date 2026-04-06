import { createClient } from '@supabase/supabase-js'
import { stateData } from '../data/syntheticStates'

const supabaseUrl = 'https://fbqcecmwviuixohlwemi.supabase.co'
const supabaseAnonKey = 'sb_publishable_pgmekuGHNsU2YeUzQzpy6g_HuMLK1yL'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Fetch state data - falls back to local data if Supabase fails
export async function fetchStateData() {
  try {
    const { data, error } = await supabase
      .from('cac_synthetic_data')
      .select('*')
    
    if (error) {
      console.log('Supabase fetch failed, using local data:', error.message)
      return stateData
    }
    
    if (data && data.length > 0) {
      return data
    }
    
    return stateData
  } catch (e) {
    console.log('Supabase connection failed, using local data:', e.message)
    return stateData
  }
}
