import {
  CONTRACT_BUILDER_STEP,
  GOVERNANCE_TYPE,
} from '@/hooks/useContractBuilder'
import { useContractBuilderProvider } from '@/providers/ContractBuilderProvider'

const PassedQuestions = ({ className = '' }) => {
  const {
    tab,
    collaborators,
    governanceType,
    setTab,
    setCurrentCollaborator,
    setCollaborators,
    currentCollaborator
  } = useContractBuilderProvider()
  const intoClass = 'block text-left text-grey tracking-[-0.05rem] font-share sm:text-xl sm:leading-[33px]'

  const handleTab = (tab: CONTRACT_BUILDER_STEP) => () => {
    switch (tab) {
      case CONTRACT_BUILDER_STEP.SONG_NAME:
        return setTab(CONTRACT_BUILDER_STEP.SPLITS_TYPE)
      case CONTRACT_BUILDER_STEP.COLLABORATORS_AMOUNT:
        return setTab(CONTRACT_BUILDER_STEP.SONG_NAME)
      case CONTRACT_BUILDER_STEP.COLLABORATOR_INPUT:
        return setTab(CONTRACT_BUILDER_STEP.COLLABORATORS_AMOUNT)
      case CONTRACT_BUILDER_STEP.VOTE:
      case CONTRACT_BUILDER_STEP.DESIGNATE_ADMIN:
        return setTab(CONTRACT_BUILDER_STEP.GOVERNANCE_TYPE)
    }
  }
  const handleCollaborator = (index: number) => () => {
    setCurrentCollaborator(index)
    setCollaborators(items => items.slice(0, index + 1))
    setTab(CONTRACT_BUILDER_STEP.COLLABORATOR_INPUT)
  }
  return (
    <div className={className}>
      <h3 className="font-rubik text-xs sm:hidden">Tap Question to Return:</h3>
      {tab >= CONTRACT_BUILDER_STEP.SONG_NAME && (
        <button onClick={handleTab(CONTRACT_BUILDER_STEP.SONG_NAME)} className={intoClass}>
          What type of splits contract would you like to create?
        </button>
      )}
      {tab >= CONTRACT_BUILDER_STEP.COLLABORATORS_AMOUNT && (
        <button onClick={handleTab(CONTRACT_BUILDER_STEP.COLLABORATORS_AMOUNT)} className={intoClass}>
          What is the name of the song?
        </button>
      )}
      {tab >= CONTRACT_BUILDER_STEP.COLLABORATOR_INPUT && (
        <>
          <button onClick={handleTab(CONTRACT_BUILDER_STEP.COLLABORATOR_INPUT)} className={intoClass}>
            How many collaborators contributed to writing the song?
          </button>

          {collaborators.map((_, i) => {
            if (tab >= CONTRACT_BUILDER_STEP.GOVERNANCE_TYPE || i < currentCollaborator) {
              return (
                <button
                  key={`collaborator-${i}`}
                  onClick={handleCollaborator(i)}
                  className={intoClass}>
                  Collaborator {i + 1}
                </button>
              )
            }
          })}
        </>
      )}
      {(tab >= CONTRACT_BUILDER_STEP.VOTE || tab >= CONTRACT_BUILDER_STEP.DESIGNATE_ADMIN) && (
        <button onClick={handleTab(CONTRACT_BUILDER_STEP.VOTE)} className={intoClass}>
          Vote or designate admin?
        </button>
      )}
      {tab >= CONTRACT_BUILDER_STEP.SUCCESS && (
        <>
          {governanceType === GOVERNANCE_TYPE.VOTE && (
            <button onClick={() => setTab(CONTRACT_BUILDER_STEP.VOTE)} className={intoClass}>
              What percentage of ownership...?
            </button>
          )}
          {governanceType === GOVERNANCE_TYPE.DESIGNATE_ADMIN && (
            <button onClick={() => setTab(CONTRACT_BUILDER_STEP.DESIGNATE_ADMIN)} className={intoClass}>
              Do you want to designate an administrator?
            </button>
          )}
        </>
      )}
    </div>
  )
}

export default PassedQuestions
