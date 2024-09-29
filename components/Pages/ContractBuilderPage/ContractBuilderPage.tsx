import BuildSuccess from '@/components/BuildSuccess'
import CollaboratorInput from '@/components/CollaboratorInput'
import CollaboratorsAmount from '@/components/CollaboratorsAmount'
import DesignatedAdmin from '@/components/DesignatedAdmin'
import GovernanceTypes from '@/components/GovernanceTypes'
import BuilderMarks from '@/components/Header/BuilderMarks'
import SongNameForm from '@/components/SongNameForm'
import SplitsTypes from '@/components/SplitsTypes'
import UnsignedVersion from '@/components/UnsignedVersion'
import Vote from '@/components/Vote'
import { CONTRACT_BUILDER_STEP } from '@/hooks/useContractBuilder'
import { useContractBuilderProvider } from '@/providers/ContractBuilderProvider'

const ContractBuilderPage = () => {
  const { tab } = useContractBuilderProvider()

  return (
    <div className='h-full flex flex-col items-center gap-2 sm:pb-12'>
      {tab === CONTRACT_BUILDER_STEP.SPLITS_TYPE && <SplitsTypes />}
      {tab === CONTRACT_BUILDER_STEP.SONG_NAME && <SongNameForm />}
      {tab === CONTRACT_BUILDER_STEP.COLLABORATORS_AMOUNT && (
        <CollaboratorsAmount />
      )}
      {tab === CONTRACT_BUILDER_STEP.COLLABORATOR_INPUT && (
        <CollaboratorInput />
      )}
      {tab === CONTRACT_BUILDER_STEP.GOVERNANCE_TYPE && <GovernanceTypes />}
      {tab === CONTRACT_BUILDER_STEP.VOTE && <Vote />}
      {tab === CONTRACT_BUILDER_STEP.DESIGNATE_ADMIN && <DesignatedAdmin />}
      {tab === CONTRACT_BUILDER_STEP.SUCCESS && <BuildSuccess />}

      <div className='sm:hidden'><BuilderMarks /></div>
      <UnsignedVersion />
    </div>
  )
}

export default ContractBuilderPage
