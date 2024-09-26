import { useContractBuilderProvider } from '@/providers/ContractBuilderProvider'
import Button from '../Button'
import { CONTRACT_BUILDER_STEP } from '@/hooks/useContractBuilder'

const SubmitForm = () => {
  const { setTab, collaboratorsAmount, setCollaboratorsAmount } =
    useContractBuilderProvider()

  return (
    <>
      <div className="absolute size-full flex flex-col justify-center z-[1]">
        <p className="text-grey text-xl tracking-[-0.05rem] font-share leading-[33px]">
          What type of splits contract would you like to create?
        </p>
        <p className="text-grey text-xl tracking-[-0.05rem] font-share leading-[33px]">
          What is the name of the song?
        </p>
        <p className="text-white text-3xl tracking-[-0.05rem] font-share pt-6">
          How many collaborators contributed to writing the song?
        </p>
        <input
          type="text"
          className="!outline-none font-rubik rounded-md border-white border !bg-transparent mt-6 p-2 max-w-[90px]"
          placeholder="2"
          onChange={(e) => setCollaboratorsAmount(parseInt(e.target.value, 10))}
          value={collaboratorsAmount}
        />
      </div>
      <Button
        className="mt-10 relative z-[2]"
        onClick={() => setTab(CONTRACT_BUILDER_STEP.SUCCESS)}
        disabled={Boolean(!collaboratorsAmount)}
      >
        SUBMIT
      </Button>
    </>
  )
}

export default SubmitForm
