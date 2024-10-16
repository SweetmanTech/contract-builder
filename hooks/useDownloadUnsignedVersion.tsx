import html2canvas from 'html2canvas'
import jsPdf from 'jspdf'
import { useState } from 'react'

const useDownloadUnsignedVersion = () => {
  const [downloading, setDownloading] = useState(false)

  const downloadUnsignedVersion = async () => {
    setDownloading(true)
    const domElement = document.getElementById('unsigned-song-writer')
    if (!domElement) return

    const pdf = new jsPdf('p', 'mm', 'a4') // A4 page size
    const pdfWidth = pdf.internal.pageSize.getWidth()
    const pdfHeight = pdf.internal.pageSize.getHeight()

    // Capture the whole content
    const canvas = await html2canvas(domElement, {
      scale: 2, // Higher scale for better quality
      scrollX: 0,
      scrollY: 0,
      windowWidth: domElement.scrollWidth,
      windowHeight: domElement.scrollHeight,
    })

    const imgData = canvas.toDataURL('image/png')
    const imgWidth = pdfWidth
    const imgHeight = (canvas.height * pdfWidth) / canvas.width

    let heightLeft = imgHeight
    let position = 0

    // Add first image
    pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight)
    heightLeft -= pdfHeight

    // Continue adding pages as needed
    while (heightLeft > 0) {
      position = heightLeft - imgHeight
      pdf.addPage()
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight)
      heightLeft -= pdfHeight
    }

    pdf.save('unsigned-Songwriting-version.pdf')
    setDownloading(false)
  }

  return {
    downloadUnsignedVersion,
    downloading,
  }
}

export default useDownloadUnsignedVersion
