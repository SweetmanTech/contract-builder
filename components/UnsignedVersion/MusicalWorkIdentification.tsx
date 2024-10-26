import { splitTypes } from '@/lib/constants/splitTypes'
import { useContractBuilderProvider } from '@/providers/ContractBuilderProvider'
import React from 'react'

const MusicalWorkIdentification = () => {
  const { songName, splitType } = useContractBuilderProvider()

  const paragraph = splitTypes.find((split) => split.label === splitType)
    ?.pdfText?.musicalIdentification
  return (
    <div className="flex flex-col gap-3">
      <h2 className="pl-7 text-lg font-bold">1. Musical Work Identification</h2>
      <p>
        {paragraph} <span className=" underline">{songName}</span>
      </p>
    </div>
  )
}

export default MusicalWorkIdentification
