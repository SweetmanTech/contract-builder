import { ChangeEvent } from 'react'
import { useContractBuilderProvider } from '@/providers/ContractBuilderProvider'
import Button from '../Button'
import { CONTRACT_BUILDER_STEP } from '@/hooks/useContractBuilder'
import PassedQuestions from '../PassedQuestions'

const SubmitForm = () => {
  const { setTab, collaboratorsAmount, setCollaboratorsAmount } =
    useContractBuilderProvider()

  const handleCollaboratorsChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    const intValue = parseInt(value, 10)

    if (value === '' || isNaN(intValue)) {
      setCollaboratorsAmount(0)

      return
    }

    setCollaboratorsAmount(intValue)
  }

  return (
    <>
      <div className=" size-full flex flex-col md:justify-center justify-start z-[1]">
        <div className="hidden md:block">
          <PassedQuestions />
        </div>
        <p className="text-white md:text-3xl tracking-[-0.05rem] font-share pt-6 text-[20px]">
          How many collaborators contributed to writing the song?
        </p>

        <label htmlFor="#songName" className="mt-6 text-[#696969] text-[15px] ">
          <input
            id="songName"
            type="text"
            className="  !outline-none font-rubik rounded-md border-white border !bg-transparent mt-6 p-2 max-w-[90px]"
            placeholder="2"
            onChange={handleCollaboratorsChange}
            value={collaboratorsAmount}
          />
        </label>
      </div>

      <Button
        className="mb-25 mt-10 mb-0 mx-auto md:mx-[unset] relative z-[2] md:w-52 md:h-12 w-36 h-12 font-normal md:bg-transparent bg-[#AC444475] border-[#E18583] text-[12px]"
        onClick={() => setTab(CONTRACT_BUILDER_STEP.COLLABORATOR_INPUT)}
        disabled={Boolean(!collaboratorsAmount)}
      >
        SUBMIT
      </Button>
    </>
  )
}

export default SubmitForm
