import CollaboratorValues from './CollaboratorValues'
import PassedQuestions from '../PassedQuestions'
import { useContractBuilderProvider } from '@/providers/ContractBuilderProvider'
import ActionButtons from './ActionButtons'

const SubmitForm = () => {
  const { currentCollaborator } = useContractBuilderProvider()
  return (
    <>
      <PassedQuestions />
      <p className="text-white text-3xl tracking-[-0.05rem] font-share pt-6  hidden md:block">
        Collaborator {currentCollaborator + 1}:
      </p>
      <CollaboratorValues />
      <ActionButtons />
    </>
  )
}

export default SubmitForm
