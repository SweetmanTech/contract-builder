'use client'
import { createPdf } from '@/lib/pdf/createPdf'
import { setPdfDownloaded } from '@/lib/supabase/setPdfDownloaded'
import { useContractBuilderProvider } from '@/providers/ContractBuilderProvider'
import { useState } from 'react'

const useDownloadUnsignedVersion = () => {
  const { collaboratorDbId } = useContractBuilderProvider()
  const [downloading, setDownloading] = useState(false)

  const downloadUnsignedVersion = async () => {
    setDownloading(true)
    try {
      if (!collaboratorDbId) return
      const doc = await createPdf({ pdfDomElementId: 'unsigned-version' })
      doc?.save('contract-agreement.pdf')
      await setPdfDownloaded(collaboratorDbId)
    } catch (error) {
      console.error('Error generating PDF:', error)
    } finally {
      setDownloading(false)
    }
  }

  return {
    downloadUnsignedVersion,
    downloading,
  }
}

export default useDownloadUnsignedVersion
