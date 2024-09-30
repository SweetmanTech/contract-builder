import { useContractBuilderProvider } from '@/providers/ContractBuilderProvider'
import Button from '../Button'
import { CONTRACT_BUILDER_STEP } from '@/hooks/useContractBuilder'
import ReadHereLink from '../ReadHereLink'
import PassedQuestions from '../PassedQuestions'

const SubmitForm = () => {
  const { setTab, adminName, setAdminName } = useContractBuilderProvider()

  return (
    <>
      <PassedQuestions className='hidden sm:block' />
      <p className="text-white tracking-[-0.05rem] font-share sm:pt-6 sm:text-3xl">
        {`What is the name(s) of the designated administrator?`}
      </p>
      <fieldset className="mt-6">
        <p className="font-share text-base/4 pb-2">{`Legal Name (First Last) | Separate names by commas`}</p>
        <input
          type="text"
          className="w-full max-w-[500px] !outline-none font-rubik rounded-md border-white border !bg-transparent p-2"
          placeholder="NATE REID"
          onChange={(e) => setAdminName(e.target.value)}
          value={adminName}
        />
      </fieldset>
      <ReadHereLink
        link="#"
        label="Still not clear about designating an admin? read here."
        className="pt-5 sm:pt-10"
      />
      <Button
        className="mt-10 mx-auto sm:mx-0"
        onClick={() => setTab(CONTRACT_BUILDER_STEP.SUCCESS)}
        disabled={Boolean(!adminName)}>
        SUBMIT
      </Button>
      <PassedQuestions className='mt-8 sm:hidden' />
    </>
  )
}

export default SubmitForm
