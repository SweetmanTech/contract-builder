import { uploadFile } from '@/lib/ipfs/uploadFile'
import { createPdf } from '@/lib/pdf/createPdf'
import { addCid } from '@/lib/supabase/cid'
import { useContractBuilderProvider } from '@/providers/ContractBuilderProvider'
import { useState } from 'react'

const useUploadContractIpfs = () => {
  const { collaboratorDbId } = useContractBuilderProvider()
  const [uploading, setUploading] = useState(false)

  const uploadContractIpfs = async () => {
    setUploading(true)

    const pdf = await createPdf('unsigned-version')

    if (!collaboratorDbId || !pdf) return

    const file = new File([pdf.output('blob')], 'unsigned-version')

    const { cid } = await uploadFile(file)

    await addCid(collaboratorDbId, cid)

    setUploading(false)
  }

  return {
    uploadContractIpfs,
    uploading,
  }
}

export default useUploadContractIpfs
