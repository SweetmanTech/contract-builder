import { useContractBuilderProvider } from '@/providers/ContractBuilderProvider'
import CheckboxLabel from '../CheckboxLabel'
import {
  CONTRACT_BUILDER_STEP,
  GOVERNANCE_TYPE,
} from '@/hooks/useContractBuilder'
import ReadHereLink from '../ReadHereLink'
import Button from '../Button'

const SubmitForm = () => {
  const { setTab, collaborators, governanceType, setGovernanceType } =
    useContractBuilderProvider()

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
      {collaborators.map((_, i) => (
        <p className="text-grey text-xl tracking-[-0.05rem] font-share leading-[33px]">
          Collaborator {i + 1}
        </p>
      ))}
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
      <ReadHereLink link="/" label="Confused? read here." />
      <Button
        className="mt-10"
        onClick={() => setTab(CONTRACT_BUILDER_STEP.SONG_NAME)}
      >
        SUBMIT
      </Button>
    </>
  )
}

export default SubmitForm
