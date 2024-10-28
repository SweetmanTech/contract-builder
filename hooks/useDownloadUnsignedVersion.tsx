'use client'
import { setPdfDownloaded } from '@/lib/supabase/setPdfDownloaded'
import { useContractBuilderProvider } from '@/providers/ContractBuilderProvider'
import { useState } from 'react'

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
        margin: [0.5, 0.5],
        filename: 'contract-agreement.pdf',
        image: { type: 'jpeg', quality: 1 },
        html2canvas: {
          scale: 2,
          useCORS: true,
          allowTaint: true,
        },
        jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' },
      }

      const pdf = html2pdf().from(element).set(options).toPdf().get('pdf')

      pdf.then((doc: any) => {
        const pageCount = doc?.internal?.getNumberOfPages()
        for (let i = pageCount; i > 0; i--) {
          const pageContent = doc?.internal?.pages[i]
          if (+pageContent[3]?.split(' ')?.[3] < 10) {
            doc?.deletePage(i)
          }
        }

        doc?.save(options.filename)
      })

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
