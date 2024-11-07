import { useContractBuilderProvider } from '@/providers/ContractBuilderProvider'
import Button from '../Button'
import { CONTRACT_BUILDER_STEP } from '@/hooks/useContractBuilder'
import CollaboratorValues from './CollaboratorValues'
import PassedQuestions from '../PassedQuestions'
import { upsertContract } from '@/lib/supabase/upsertContract'

const SubmitForm = () => {
  const {
    setTab,
    collaborators,
    currentCollaborator,
    collaboratorsAmount,
    setCurrentCollaborator,
    setCollaborator,
    splitType,
    setCollaboratorDbId,
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

  const handleSubmit = async () => {
    if (
      collaborators.length < collaboratorsAmount ||
      currentCollaborator < collaboratorsAmount - 1
    ) {
      if (collaborators.length < collaboratorsAmount) {
        setCollaborator()
        return
      }
      setCurrentCollaborator(currentCollaborator + 1)
      return
    }

    const names = collaborators.map(({ legalName }) => legalName)
    const emails = collaborators.map(({ email }) => email)

    const data = await upsertContract(names, emails)

    if (data) {
      setCollaboratorDbId(data.id)
      setTab(CONTRACT_BUILDER_STEP.GOVERNANCE_TYPE)
    }
  }

  return (
    <>
      <PassedQuestions />
      <p className="text-white text-3xl tracking-[-0.05rem] font-share pt-6  hidden md:block">
        Collaborator {currentCollaborator + 1}:
      </p>
      <CollaboratorValues />
      <div className="mt-10 flex items-center gap-4">
        {currentCollaborator > 0 && (
          <Button
            className="mb-0 mx-auto md:mx-[unset] relative z-[2] md:w-52 md:h-12 w-36 h-12 font-normal md:bg-transparent bg-[#AC444475] border-[#E18583] text-[12px]"
            onClick={() => setCurrentCollaborator(currentCollaborator - 1)}
          >
            BACK
          </Button>
        )}
        <Button
          className="mb-0 mx-auto md:mx-[unset] relative z-[2] md:w-52 md:h-12 w-36 h-12 font-normal md:bg-transparent bg-[#AC444475] border-[#E18583] text-[12px]"
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
      </div>
    </>
  )
}

export default SubmitForm
