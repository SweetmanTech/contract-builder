import { createPdf } from '@/lib/pdf/createPdf'
import { setPdfDownloaded } from '@/lib/supabase/setPdfDownloaded'
import { useContractBuilderProvider } from '@/providers/ContractBuilderProvider'
import { useState } from 'react'

const useDownloadUnsignedVersion = () => {
  const { collaboratorDbId } = useContractBuilderProvider()
  const [downloading, setDownloading] = useState(false)

  const downloadUnsignedVersion = async () => {
    setDownloading(true)

    const pdf = await createPdf('unsigned-version')

    if (!pdf || !collaboratorDbId) return

    pdf.save('unsigned-version.pdf')

    await setPdfDownloaded(collaboratorDbId)

    setDownloading(false)
  }

  return {
    downloadUnsignedVersion,
    downloading,
  }
}

export default useDownloadUnsignedVersion
