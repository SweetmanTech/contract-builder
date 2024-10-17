import { createClient } from './client'

export const upsertContract = async (names: string[], emails: string[]) => {
  const supabase = createClient()

  const { error, data } = await supabase
    .from('contracts')
    .upsert({ names, emails })
    .select('id')
    .single()

  if (error) {
    alert(error.message)
    console.error(error)

    return
  }

  return data
}
