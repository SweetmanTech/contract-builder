import { useContractBuilderProvider } from '@/providers/ContractBuilderProvider'
import Button from '../Button'
import { CONTRACT_BUILDER_STEP } from '@/hooks/useContractBuilder'
import ReadHereLink from '../ReadHereLink'
import getSplitTypeText from '@/lib/getSplitTypeText'
import PassedQuestions from '../PassedQuestions'

const SubmitForm = () => {
  const { setTab, setVotePercentage, votePercentage, splitType } =
    useContractBuilderProvider()

  return (
    <>
      <PassedQuestions className='hidden sm:block' />
      <p className="text-white tracking-[-0.05rem] font-share sm:pt-6 sm:text-3xl">
        What percentage of ownership of the {getSplitTypeText(splitType)}{' '}
        agreement is necessary to make business decisions about the song
        composition?
      </p>
      <fieldset className="mt-6">
        <p className="font-share text-base/4 pb-1">{`(%)`}</p>
        <input
          type="text"
          className="!outline-none font-rubik rounded-md border-white border !bg-transparent p-2 max-w-[90px]"
          placeholder="2"
          onChange={(e) => setVotePercentage(parseInt(e.target.value, 10))}
          value={votePercentage}
        />
      </fieldset>
      <ReadHereLink
        link="#"
        label="Still not clear about voting? read here."
        className="pt-3"
      />
      <Button
        className="mt-10 mx-auto sm:mx-0"
        onClick={() => setTab(CONTRACT_BUILDER_STEP.SUCCESS)}
        disabled={Boolean(!votePercentage)}
      >
        SUBMIT
      </Button>
      <PassedQuestions className='mt-8 sm:hidden' />
    </>
  )
}

export default SubmitForm
