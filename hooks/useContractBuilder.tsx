import { useState } from 'react'
import useCollaborators from './useCollaborators'

export enum CONTRACT_BUILDER_STEP {
  SPLITS_TYPE,
  SONG_NAME,
  COLLABORATORS_AMOUNT,
  COLLABORATOR_INPUT,
  GOVERNANCE_TYPE,
  VOTE,
  DESIGNATE_ADMIN,
  SUCCESS,
}

export enum SPLIT_TYPE {
  SONG_WRITING,
  MASTER_RECORDING,
  BOTH,
}

export enum GOVERNANCE_TYPE {
  VOTE,
  DESIGNATE_ADMIN,
}

const useContractBuilder = () => {
  const [tab, setTab] = useState(CONTRACT_BUILDER_STEP.SPLITS_TYPE)
  const [splitType, setSplitType] = useState(SPLIT_TYPE.SONG_WRITING)
  const [governanceType, setGovernanceType] = useState(GOVERNANCE_TYPE.VOTE)
  const [votePercentage, setVotePercentage] = useState(0)
  const [songName, setSongName] = useState('')
  const collaborators = useCollaborators()

  return {
    tab,
    setTab,
    splitType,
    setSplitType,
    songName,
    setSongName,
    governanceType,
    setGovernanceType,
    votePercentage,
    setVotePercentage,
    ...collaborators,
  }
}

export default useContractBuilder
