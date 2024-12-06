import {
  CONTRACT_BUILDER_STEP,
  GOVERNANCE_TYPE,
} from '@/hooks/useContractBuilder'
import { useContractBuilderProvider } from '@/providers/ContractBuilderProvider'

interface PassedQuestionsProps {
  textSize?: string
}

const PassedQuestions: React.FC<PassedQuestionsProps> = ({ textSize }) => {
  const {
    tab,
    collaborators,
    governanceType,
    setTab,
    setCurrentCollaborator,
    collaboratorsAmount,
  } = useContractBuilderProvider()
  const intoClass = `text-grey md:text-xl text-[${textSize ? textSize : '20px'}] tracking-[-0.05rem] font-share leading-[33px] cursor-pointer`

  return (
    <>
      {tab >= CONTRACT_BUILDER_STEP.SONG_NAME && (
        <p
          className={intoClass}
          onClick={() => {
            setTab(CONTRACT_BUILDER_STEP.SPLITS_TYPE)
            // @refresh reset
          }}
        >
          What type of splits contract would you like to create?
        </p>
      )}
      {tab >= CONTRACT_BUILDER_STEP.COLLABORATORS_AMOUNT && (
        <p
          className={intoClass}
          onClick={() => {
            setTab(CONTRACT_BUILDER_STEP.SONG_NAME)
            // @refresh reset
          }}
        >
          What is the name of the song?
        </p>
      )}
      {tab >= CONTRACT_BUILDER_STEP.COLLABORATOR_INPUT && (
        <p
          className={intoClass}
          onClick={() => {
            setTab(CONTRACT_BUILDER_STEP.COLLABORATORS_AMOUNT)
            // @refresh reset
          }}
        >
          How many collaborators contributed to writing the song?
        </p>
      )}
      {tab >= CONTRACT_BUILDER_STEP.GOVERNANCE_TYPE && (
        <>
          {collaborators.slice(0, collaboratorsAmount).map((_, i) => (
            <p
              className="text-grey text-xl tracking-[-0.05rem] font-share leading-[33px] cursor-pointer"
              key={i}
              onClick={() => {
                // @refresh reset
                setCurrentCollaborator(i)
                setTab(CONTRACT_BUILDER_STEP.COLLABORATOR_INPUT)
              }}
            >
              Collaborator {i + 1}
            </p>
          ))}
        </>
      )}
      {tab >= CONTRACT_BUILDER_STEP.VOTE && (
        <>
          {governanceType === GOVERNANCE_TYPE.VOTE && (
            <p
              className={intoClass}
              onClick={() => setTab(CONTRACT_BUILDER_STEP.GOVERNANCE_TYPE)}
            >
              Vote or designate admin?
            </p>
          )}
          {governanceType === GOVERNANCE_TYPE.DESIGNATE_ADMIN && (
            <p
              className={intoClass}
              onClick={() => setTab(CONTRACT_BUILDER_STEP.GOVERNANCE_TYPE)}
            >
              Do you want to designate an administrator?
            </p>
          )}
        </>
      )}
    </>
  )
}

export default PassedQuestions
