import { useContractBuilderProvider } from '@/providers/ContractBuilderProvider'
import Button from '../Button'
import { CONTRACT_BUILDER_STEP } from '@/hooks/useContractBuilder'
import CollaboratorValues from './CollaboratorValues'

const SubmitForm = () => {
  const {
    setTab,
    collaborators,
    currentCollaborator,
    collaboratorsAmount,
    setCollaborator,
  } = useContractBuilderProvider()
  const collaborator = collaborators[currentCollaborator]
  const { legalName, email, typeOfcontribution, split } = collaborator

  const handleSubmit = () => {
    if (collaborators.length === collaboratorsAmount) {
      setTab(CONTRACT_BUILDER_STEP.GOVERNANCE_TYPE)
      return
    }
    setCollaborator()
  }

  return (
    <>
      <p className="text-grey text-xl tracking-[-0.05rem] font-share leading-[33px]">
        What type of splits contract would you like to create?
      </p>
      <p className="text-grey text-xl tracking-[-0.05rem] font-share leading-[33px]">
        What is the name of the song?
      </p>
      <p className="text-grey text-xl tracking-[-0.05rem] font-share leading-[33px]">
        How many collaborators contributed to writing the song?
      </p>
      <p className="text-white text-3xl tracking-[-0.05rem] font-share pt-6">
        Collaborator {currentCollaborator + 1}:
      </p>
      <CollaboratorValues />
      <Button
        className="mt-12"
        onClick={handleSubmit}
        disabled={
          Boolean(!legalName) ||
          Boolean(!email) ||
          Boolean(!typeOfcontribution) ||
          Boolean(!split)
        }
      >
        SUBMIT
      </Button>
    </>
  )
}

export default SubmitForm
