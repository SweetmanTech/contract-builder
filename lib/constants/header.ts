import { CONTRACT_BUILDER_STEP } from '@/hooks/useContractBuilder'

export const getMobileClassesBasedOnSteps = ({
  path,
  tab,
}: {
  tab: CONTRACT_BUILDER_STEP
  path: string
}) => {
  const basePath = !path.split('/')[1]
  const horizontalHeaderCondition =
    basePath ||
    (path.includes('/contract-builder') &&
      [
        CONTRACT_BUILDER_STEP.SPLITS_TYPE,
        CONTRACT_BUILDER_STEP.SONG_NAME,
        CONTRACT_BUILDER_STEP.COLLABORATORS_AMOUNT,
        CONTRACT_BUILDER_STEP.COLLABORATOR_INPUT,
        CONTRACT_BUILDER_STEP.GOVERNANCE_TYPE,
        CONTRACT_BUILDER_STEP.VOTE,
        CONTRACT_BUILDER_STEP.DESIGNATE_ADMIN,
      ].includes(tab))

  return horizontalHeaderCondition
    ? {
        header: 'flex-row justify-between px-6',
        musicSplits: 'text-md',
      }
    : {
        header: 'flex-col-reverse px-6',
        musicSplits: 'text-2xl',
      }
}
