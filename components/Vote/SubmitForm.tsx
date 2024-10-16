import { useContractBuilderProvider } from '@/providers/ContractBuilderProvider'
import Button from '../Button'
import { CONTRACT_BUILDER_STEP } from '@/hooks/useContractBuilder'
import ReadHereLink from '../ReadHereLink'
import getSplitTypeText from '@/lib/getSplitTypeText'
import PassedQuestions from '../PassedQuestions'
import { ChangeEvent, useState } from 'react'
import InfoDialog from '../InfoDialog'
import VoteInfo from './Info'

const SubmitForm = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { setTab, setVotePercentage, votePercentage, splitType } =
    useContractBuilderProvider()

  const handleVotesChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    const intValue = parseInt(value, 10)

    if (value === '' || isNaN(intValue)) {
      setVotePercentage(0)

      return
    }

    setVotePercentage(intValue)
  }

  return (
    <>
      <div className="hidden md:block">
        <PassedQuestions />
      </div>
      <p className="text-white md:text-3xl text-[16px] tracking-[-0.05rem] font-share pt-6">
        What percentage of ownership of the {getSplitTypeText(splitType)}{' '}
        agreement is necessary to make business decisions about the song
        composition?
      </p>
      <fieldset className="mt-6">
        <p className="font-share text-base/4 pb-1">{`(%)`}</p>
        <input
          type="text"
          className="!outline-none font-rubik rounded-md border-white border !bg-transparent p-2 max-w-[90px]"
          maxLength={3}
          onChange={handleVotesChange}
          value={votePercentage}
        />
      </fieldset>
      <ReadHereLink
        label="Still not clear about voting? read here."
        className="pt-3 md:text-[24px] text-[16px] text-left"
        open={() => setIsOpen(true)}
      />
      <Button
        className="mt-10 relative z-[2]"
        onClick={() => setTab(CONTRACT_BUILDER_STEP.SUCCESS)}
        disabled={Boolean(!votePercentage)}
      >
        SUBMIT
      </Button>

      <div className="md:hidden  block ">
        <h4 className="font-rubik text-[13px] mt-5 ">
          Tap Question to Return:
        </h4>
        <PassedQuestions />
      </div>

      <InfoDialog isOpen={isOpen} close={() => setIsOpen(false)}>
        <VoteInfo />
      </InfoDialog>
    </>
  )
}

export default SubmitForm
