import {
  CONTRACT_BUILDER_STEP,
  GOVERNANCE_TYPE,
} from '@/hooks/useContractBuilder'
import { useContractBuilderProvider } from '@/providers/ContractBuilderProvider'

const PassedQuestions = () => {
  const { tab, collaborators, governanceType } = useContractBuilderProvider()
  const intoClass =
    'text-grey text-xl tracking-[-0.05rem] font-share leading-[33px]'

  return (
    <>
      {tab >= CONTRACT_BUILDER_STEP.SONG_NAME && (
        <p className={intoClass}>
          What type of splits contract would you like to create?
        </p>
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
    </>
  )
}

export default PassedQuestions
