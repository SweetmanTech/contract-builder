import React from 'react'
import { useContractBuilderProvider } from '@/providers/ContractBuilderProvider'
import CollaboratorDropdown from './CollaboratorDropdown'

const masterOptions = ['Artist', 'Producer', 'Executive producer', 'Engineer']
const songWritingOptions = ['Lyrics', 'Music', 'Both']

export default function CollaboratorTypeDropdown() {
  const {
    setTypeOfMasterContribution,
    setTypeOfSongWritingContribution,
    splitType,
    collaborators,
    currentCollaborator,
  } = useContractBuilderProvider()
  const { typeOfMasterContribution, typeOfSongWritingContribution } =
    collaborators[currentCollaborator]

  return (
    <fieldset className="w-full">
      <p className="font-share text-base/4 pb-1 text-[15px] text-[#696969]">
        {`${splitType === 'Both' ? 'Both' : 'Type of'} contribution`}
      </p>
      <div className="flex gap-2">
        {(splitType === 'Master Recording' || splitType === 'Both') && (
          <CollaboratorDropdown
            contributionType={typeOfMasterContribution}
            options={masterOptions}
            setContributionType={setTypeOfMasterContribution}
          />
        )}

        {(splitType === 'Song Writing' || splitType === 'Both') && (
          <CollaboratorDropdown
            contributionType={typeOfSongWritingContribution}
            options={songWritingOptions}
            setContributionType={setTypeOfSongWritingContribution}
          />
        )}
      </div>
    </fieldset>
  )
}
