import { useContractBuilderProvider } from '@/providers/ContractBuilderProvider'
import Button from '../Button'
import { CONTRACT_BUILDER_STEP } from '@/hooks/useContractBuilder'
import CollaboratorValues from './CollaboratorValues'
import PassedQuestions from '../PassedQuestions'

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
      <PassedQuestions className='hidden sm:block' />
      <p className="text-white text-xl tracking-[-0.05rem] font-share sm:pt-6 sm:text-3xl">
        Collaborator {currentCollaborator + 1}:
      </p>
      <CollaboratorValues />
      <Button
        className="mt-12 mx-auto sm:mx-0"
        onClick={handleSubmit}
        disabled={
          Boolean(!legalName) ||
          Boolean(!email) ||
          Boolean(!typeOfcontribution) ||
          Boolean(!split)
        }>
        SUBMIT
      </Button>
      <PassedQuestions className='mt-8 sm:hidden' />
    </>
  )
}

export default SubmitForm
