import { splitTypes } from '@/lib/constants/splitTypes'
import { useContractBuilderProvider } from '@/providers/ContractBuilderProvider'
import React from 'react'
import CollaboratorsInfo from './CollaboratorsInfo'

const MusicalWorkIdentification = ({
  showCollaboratorsInfo = false,
}: {
  showCollaboratorsInfo?: boolean
}) => {
  const { songName, splitType } = useContractBuilderProvider()

  const paragraph = splitTypes.find((split) => split.label === splitType)
    ?.pdfText?.musicalIdentification
  return (
    <div className="flex flex-col gap-3">
      <h2 className="pl-7 text-lg font-bold">1. Musical Work Identification</h2>
      <p>
        {paragraph} <span className=" underline">{songName}</span>
      </p>

      {showCollaboratorsInfo && (
        <div className="flex flex-col gap-3">
          <p>
            The parties acknowledge and accept their contribution to the
            authorship or composition of the musical work and agree to the
            distribution of copyright ownership as follows:
          </p>
          <CollaboratorsInfo contributionType="songwriting" />
        </div>
      )}
    </div>
  )
}

export default MusicalWorkIdentification
