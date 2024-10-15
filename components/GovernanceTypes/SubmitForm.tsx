import { useContractBuilderProvider } from '@/providers/ContractBuilderProvider'
import CheckboxLabel from '../CheckboxLabel'
import {
  CONTRACT_BUILDER_STEP,
  GOVERNANCE_TYPE,
} from '@/hooks/useContractBuilder'
import ReadHereLink from '../ReadHereLink'
import Button from '../Button'
import { useState } from 'react'
import InfoDialog from '../InfoDialog'
import { GovernanceTypesInfo } from '../InfoDialogsContent'
import PassedQuestions from '../PassedQuestions'

const SubmitForm = () => {
  const [isOpen, setIsOpen] = useState(false)
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
      <div className="md:block hidden">
        <PassedQuestions />
      </div>
      <p className="font-share md:text-3xl text-[19px] tracking-[-0.05rem] pt-4">
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
      <ReadHereLink
        className="text-[16px]"
        label="Confused? read here."
        open={() => setIsOpen(true)}
      />
      <Button className="mt-10" onClick={handleSubmit}>
        SUBMIT
      </Button>
      <InfoDialog isOpen={isOpen} close={() => setIsOpen(false)}>
        <GovernanceTypesInfo />
      </InfoDialog>
      <div className="md:hidden  block ">
        <h4 className="font-rubik text-[13px] mt-5">Tap Question to Return:</h4>
        <PassedQuestions textSize="16px" />
      </div>
    </>
  )
}

export default SubmitForm
