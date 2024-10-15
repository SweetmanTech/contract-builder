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
    splitType,
  } = useContractBuilderProvider()
  const {
    legalName,
    email,
    split,
    typeOfMasterContribution,
    typeOfSongWritingContribution,
  } = collaborators[currentCollaborator]

  let isContributor = false

  if (splitType === 'Master Recording') {
    isContributor = Boolean(!typeOfMasterContribution)
  } else if (splitType === 'Song Writing') {
    isContributor = Boolean(!typeOfSongWritingContribution)
  } else if (splitType === 'Both') {
    isContributor =
      Boolean(!typeOfMasterContribution) ||
      Boolean(!typeOfSongWritingContribution)
  }

  const handleSubmit = () => {
    if (collaborators.length === collaboratorsAmount) {
      setTab(CONTRACT_BUILDER_STEP.GOVERNANCE_TYPE)
      return
    }
    setCollaborator()
  }

  return (
    <>
      <PassedQuestions />
      <p className="text-white text-3xl tracking-[-0.05rem] font-share pt-6  hidden md:block">
        Collaborator {currentCollaborator + 1}:
      </p>
      <CollaboratorValues />
      <Button
        className="mt-10 mb-0 mx-auto md:mx-[unset] relative z-[2] md:w-52 md:h-12 w-36 h-12 font-normal md:bg-transparent bg-[#AC444475] border-[#E18583] text-[12px]"
        onClick={handleSubmit}
        disabled={
          Boolean(!legalName) ||
          Boolean(!email) ||
          Boolean(!split) ||
          isContributor
        }
      >
        SUBMIT
      </Button>
    </>
  )
}

export default SubmitForm
