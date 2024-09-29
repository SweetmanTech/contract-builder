import {
  CONTRACT_BUILDER_STEP,
  GOVERNANCE_TYPE,
} from '@/hooks/useContractBuilder'
import { useContractBuilderProvider } from '@/providers/ContractBuilderProvider'

const PassedQuestions = ({ className = '' }) => {
  const { tab, collaborators, governanceType, setTab } = useContractBuilderProvider()
  const intoClass = 'block text-left text-grey tracking-[-0.05rem] font-share sm:text-xl sm:leading-[33px]'

  const handleClick = (tab: CONTRACT_BUILDER_STEP) => () => {
    switch (tab) {
      case CONTRACT_BUILDER_STEP.SONG_NAME:
        return setTab(CONTRACT_BUILDER_STEP.SPLITS_TYPE)
    }
  }
  return (
    <div className={className}>
      <h3 className="font-rubik text-xs sm:hidden">Tap Question to Return:</h3>
      {tab >= CONTRACT_BUILDER_STEP.SONG_NAME && (
        <button onClick={handleClick(CONTRACT_BUILDER_STEP.SONG_NAME)} className={intoClass}>
          What type of splits contract would you like to create?
        </button>
      )}
      {tab >= CONTRACT_BUILDER_STEP.COLLABORATORS_AMOUNT && (
        <p className={intoClass}>What is the name of the song?</p>
      )}
      {tab >= CONTRACT_BUILDER_STEP.COLLABORATOR_INPUT && (
        <p className={intoClass}>
          How many collaborators contributed to writing the song?
        </p>
      )}
      {tab >= CONTRACT_BUILDER_STEP.GOVERNANCE_TYPE && (
        <>
          {collaborators.map((_, i) => (
            <p
              className="text-grey text-xl tracking-[-0.05rem] font-share leading-[33px]"
              key={i}
            >
              Collaborator {i + 1}
            </p>
          ))}
        </>
      )}
      {tab >= CONTRACT_BUILDER_STEP.VOTE && (
        <>
          {governanceType === GOVERNANCE_TYPE.VOTE && (
            <p className={intoClass}>Vote or designate admin?</p>
          )}
          {governanceType === GOVERNANCE_TYPE.DESIGNATE_ADMIN && (
            <p className={intoClass}>
              Do you want to designate an administrator?
            </p>
          )}
        </>
      )}
    </div>
  )
}

export default PassedQuestions
