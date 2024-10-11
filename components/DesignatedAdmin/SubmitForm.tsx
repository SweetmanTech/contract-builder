import { useContractBuilderProvider } from '@/providers/ContractBuilderProvider'
import Button from '../Button'
import { CONTRACT_BUILDER_STEP } from '@/hooks/useContractBuilder'
import ReadHereLink from '../ReadHereLink'
import PassedQuestions from '../PassedQuestions'
import InfoDialog from '../InfoDialog'
import Info from './Info'
import { useState } from 'react'

const SubmitForm = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { setTab, adminName, setAdminName } = useContractBuilderProvider()

  return (
    <>
    <div className="hidden md:block">
        <PassedQuestions />
        </div>
      <p className="text-white md:text-3xl text-[16px] tracking-[-0.05rem] font-share pt-6">
        {`What is the name(s) of the designated administrator?`}
      </p>
      <fieldset className="mt-6">
        <p className="font-share text-base/4 pb-2">{`Legal Name (First Last) | Separate names by commas`}</p>
        <input
          type="text"
          className="!outline-none font-rubik rounded-md border-white border !bg-transparent p-2"
          onChange={(e) => setAdminName(e.target.value)}
          value={adminName}
        />
      </fieldset>
      <ReadHereLink
        label="Still not clear about designating an admin? read here."
        className="pt-10 text-[16px] md:text-[24px]"
        open={() => setIsOpen(true)}
      />
      <Button
 className="mb-25 mt-10 mb-0 mx-auto md:mx-[unset] relative z-[2] md:w-52 md:h-12 w-36 h-12 font-normal md:bg-transparent bg-[#AC444475] border-[#E18583] text-[12px]"
        onClick={() => setTab(CONTRACT_BUILDER_STEP.SUCCESS)}
        disabled={Boolean(!adminName)}
      >
        SUBMIT
      </Button>
      <InfoDialog isOpen={isOpen} close={() => setIsOpen(false)}>
        <Info />
      </InfoDialog>
    </>
  )
}

export default SubmitForm
