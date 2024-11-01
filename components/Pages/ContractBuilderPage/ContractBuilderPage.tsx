import BuildSuccess from '@/components/BuildSuccess'
import CollaboratorInput from '@/components/CollaboratorInput'
import CollaboratorsAmount from '@/components/CollaboratorsAmount'
import DesignatedAdmin from '@/components/DesignatedAdmin'
import GovernanceTypes from '@/components/GovernanceTypes'
import InfoDialog from '@/components/InfoDialog'
import { SplitsTypesInfo } from '@/components/InfoDialogsContent'
import SongNameForm from '@/components/SongNameForm'
import SplitsTypes from '@/components/SplitsTypes'
import UnsignedVersion from '@/components/UnsignedVersion/UnsignedVersion'

import Vote from '@/components/Vote'
import { CONTRACT_BUILDER_STEP } from '@/hooks/useContractBuilder'
import { useContractBuilderProvider } from '@/providers/ContractBuilderProvider'
import { useModalProvider } from '@/providers/ModalProvider'

const ContractBuilderPage = () => {
  const { tab } = useContractBuilderProvider()
  const { ifConfusedModalOpen, setIfConfusedModalOpen } = useModalProvider()

  return (
    <>
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

      <UnsignedVersion />
      <InfoDialog
        isOpen={ifConfusedModalOpen}
        close={() => setIfConfusedModalOpen(false)}
      >
        <SplitsTypesInfo />
      </InfoDialog>
    </>
  )
}

export default ContractBuilderPage
