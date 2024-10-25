'use client'
import { setPdfDownloaded } from '@/lib/supabase/setPdfDownloaded'
import { useContractBuilderProvider } from '@/providers/ContractBuilderProvider'
import { useState } from 'react'

// Dynamically import html2pdf.js
const useDownloadUnsignedVersion = () => {
  const { collaboratorDbId } = useContractBuilderProvider()
  const [downloading, setDownloading] = useState(false)

  const downloadUnsignedVersion = async () => {
    setDownloading(true)

    try {
      const html2pdf = (await import('html2pdf.js')).default

      const element = document.getElementById('unsigned-version')
      if (!element || !collaboratorDbId) return

      const options = {
        margin: [1, 0.5],
        filename: 'contract-agreement.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: {
          scale: 2,
          useCORS: true,
          allowTaint: true,
        },
        jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' },
      }

      await html2pdf().from(element).set(options).save()

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
