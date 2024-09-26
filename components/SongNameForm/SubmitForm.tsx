import { useContractBuilderProvider } from '@/providers/ContractBuilderProvider'
import Button from '../Button'
import { CONTRACT_BUILDER_STEP } from '@/hooks/useContractBuilder'
import PassedQuestions from '../PassedQuestions'

const SubmitForm = () => {
  const { setTab, songName, setSongName } = useContractBuilderProvider()

  return (
    <>
      <div className="absolute size-full flex flex-col justify-center z-[1]">
        <PassedQuestions />
        <p className="text-white text-3xl tracking-[-0.05rem] font-share pt-6">
          What is the name of the song?
        </p>
        <input
          type="text"
          className="!outline-none font-rubik rounded-md border-white border !bg-transparent mt-6 p-2 max-w-[350px]"
          placeholder="The One"
          onChange={(e) => setSongName(e.target.value)}
          value={songName}
        />
      </div>
      <Button
        className="mt-10 relative z-[2]"
        onClick={() => setTab(CONTRACT_BUILDER_STEP.COLLABORATORS_AMOUNT)}
        disabled={Boolean(!songName)}
      >
        SUBMIT
      </Button>
    </>
  )
}

export default SubmitForm
