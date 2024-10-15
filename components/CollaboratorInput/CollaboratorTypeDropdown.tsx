import React from 'react'
import { DropdownList } from './DropdownList'
import { useContractBuilderProvider } from '@/providers/ContractBuilderProvider'

const masterOptions = ['Artist', 'Producer', 'Executive producer', 'Engineer']
const songWritingOptions = ['Lyrics', 'Music', 'Both']

export function CollaboratorTypeDropdown() {
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
    <div className="flex gap-2">
      {(splitType === 'Master Recording' || splitType === 'Both') && (
        <DropdownList
          label={`${splitType === 'Both' ? 'Master' : 'Type of'} contribution`}
          options={masterOptions}
          selectedOptions={typeOfMasterContribution}
          onOptionSelect={(option) => {
            setTypeOfMasterContribution(option)
          }}
        />
      )}

      {(splitType === 'Song Writing' || splitType === 'Both') && (
        <DropdownList
          label={`${splitType === 'Both' ? 'Songwriting' : 'Type of'} contribution`}
          options={songWritingOptions}
          selectedOptions={typeOfSongWritingContribution}
          onOptionSelect={(option) => {
            setTypeOfSongWritingContribution(option)
          }}
        />
      )}
    </div>
  )
}
