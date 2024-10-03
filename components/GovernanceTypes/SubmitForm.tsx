import { useContractBuilderProvider } from '@/providers/ContractBuilderProvider'
import CheckboxLabel from '../CheckboxLabel'
import {
  CONTRACT_BUILDER_STEP,
  GOVERNANCE_TYPE,
} from '@/hooks/useContractBuilder'
import ReadHereLink from '../ReadHereLink'
import Button from '../Button'
import PassedQuestions from '../PassedQuestions'

const SubmitForm = () => {
  const { setTab, governanceType, setGovernanceType } =
    useContractBuilderProvider()

  const handleSubmit = () => {
    if (governanceType === GOVERNANCE_TYPE.VOTE) {
      setTab(CONTRACT_BUILDER_STEP.VOTE)
      return
    }

    setTab(CONTRACT_BUILDER_STEP.DESIGNATE_ADMIN)
  }

  return (
    <>
      <PassedQuestions />
      <p className="font-share text-3xl tracking-[-0.05rem] pt-4">
        Would you like to vote when making business decisions or designate an
        administrator?
      </p>
      <fieldset className="flex flex-col gap-3 pl-6 pt-6">
        <CheckboxLabel
          checked={governanceType === GOVERNANCE_TYPE.VOTE}
          onClick={() => setGovernanceType(GOVERNANCE_TYPE.VOTE)}
          label="Vote"
        />
        <CheckboxLabel
          checked={governanceType === GOVERNANCE_TYPE.DESIGNATE_ADMIN}
          onClick={() => setGovernanceType(GOVERNANCE_TYPE.DESIGNATE_ADMIN)}
          label="Designate admin"
        />
      </fieldset>
      <ReadHereLink link="/popups/moreInfoQ6" label="Confused? read here." />
      <Button className="mt-10" onClick={handleSubmit}>
        SUBMIT
      </Button>
    </>
  )
}

export default SubmitForm
