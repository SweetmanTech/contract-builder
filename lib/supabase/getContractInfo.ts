import { createClient } from './client'

export const getContractInfo = async (id: string) => {
  const supabase = createClient()

  const { data, error } = await supabase
    .from('contracts')
    .select('*')
    .eq('id', id)
    .single()

  if (error) {
    console.error(error)
  }

  return data
}
