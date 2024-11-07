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

  const ContributionParagraph = ({ text }: { text: string }) => {
    return (
      <p className="font-share text-base/4 pb-1 text-[15px] text-[#696969]">
        {`${text} contribution`}
      </p>
    )
  }
  return (
    <fieldset className="w-full">
      <div className="flex gap-2">
        {(splitType === 'Master Recording' || splitType === 'Both') && (
          <div className="w-full">
            <ContributionParagraph text="Master recording" />
            <CollaboratorDropdown
              contributionType={typeOfMasterContribution}
              options={masterOptions}
              setContributionType={setTypeOfMasterContribution}
            />
          </div>
        )}

        {(splitType === 'Song Writing' || splitType === 'Both') && (
          <div className="w-full">
            <ContributionParagraph text="Song writing" />
            <CollaboratorDropdown
              contributionType={typeOfSongWritingContribution}
              options={songWritingOptions}
              setContributionType={setTypeOfSongWritingContribution}
            />
          </div>
        )}
      </div>
    </fieldset>
  )
}
