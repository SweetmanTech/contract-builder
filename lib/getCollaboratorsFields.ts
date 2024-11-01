import { SPLIT_TYPE } from '@/hooks/useContractBuilder'
import { COLLABORATOR } from '@/types/collaborator'

export const getCollaboratorsFields = ({
  currentCollaborator,
  splitType,
}: {
  currentCollaborator: COLLABORATOR
  splitType: SPLIT_TYPE
}) => {
  const contribution =
    splitType === SPLIT_TYPE.SONG_WRITING
      ? 'typeOfSongWritingContribution'
      : 'typeOfMasterContribution'

  const contributionHeading =
    splitType === SPLIT_TYPE.BOTH
      ? {
          'Songwriting Contribution':
            currentCollaborator.typeOfSongWritingContribution,
          'Master Recording Contribution':
            currentCollaborator.typeOfMasterContribution,
        }
      : {
          Contribution: currentCollaborator[contribution],
        }
  const fields = {
    'Legal Name': currentCollaborator.legalName,
    'Email Address': currentCollaborator.email,
    ...contributionHeading,
    'Ownership percentage': currentCollaborator.split + '%',
  }
  const fieldsArray = Object.entries(fields)
  return fieldsArray as [string, string][]
}
