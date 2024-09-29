import { useContractBuilderProvider } from '@/providers/ContractBuilderProvider'
import Button from '../Button'
import { CONTRACT_BUILDER_STEP } from '@/hooks/useContractBuilder'
import PassedQuestions from '../PassedQuestions'

const SubmitForm = () => {
  const { setTab, songName, setSongName } = useContractBuilderProvider()

  return (
    <>
      <div className="flex flex-col justify-center z-[1] sm:absolute sm:size-full">
        <PassedQuestions className='hidden sm:block' />
        <p className="text-xl tracking-[-0.05rem] font-share sm:pt-6 sm:text-3xl">
          What is the name of the song?
        </p>
        <input
          type="text"
          className="!outline-none font-rubik rounded-md border-white border !bg-transparent mt-6 p-2 sm:max-w-[350px]"
          placeholder="The One"
          onChange={(e) => setSongName(e.target.value)}
          value={songName}
        />
      </div>
      <Button
        className="mt-24 mx-auto relative z-[2] sm:mx-0 sm:mt-10"
        onClick={() => setTab(CONTRACT_BUILDER_STEP.COLLABORATORS_AMOUNT)}
        disabled={Boolean(!songName)}>
        SUBMIT
      </Button>
      <PassedQuestions className='mt-8 sm:hidden' />
    </>
  )
}

export default SubmitForm
