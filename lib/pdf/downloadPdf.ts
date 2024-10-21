import { setPdfDownloaded } from '../supabase/setPdfDownloaded'
import { getPdf } from './getPdf'

export const downloadPdf = async (collaboratorDbId?: string) => {
  const pdf = await getPdf('unsigned-version')

  if (!collaboratorDbId || !pdf) return

  pdf.save('unsigned-version.pdf')

  await setPdfDownloaded(collaboratorDbId)
}
