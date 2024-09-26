import { useState } from 'react'
import useCollaborators from './useCollaborators'

export enum CONTRACT_BUILDER_STEP {
  SPLITS_TYPE,
  SONG_NAME,
  COLLABORATORS_AMOUNT,
  COLLABORATOR_INPUT,
  SUCCESS,
}

export enum SPLIT_TYPE {
  SONG_WRITING,
  MASTER_RECORDING,
  BOTH,
}

const useContractBuilder = () => {
  const [tab, setTab] = useState(CONTRACT_BUILDER_STEP.SPLITS_TYPE)
  const [splitType, setSplitType] = useState(SPLIT_TYPE.SONG_WRITING)
  const [songName, setSongName] = useState('')
  const collaborators = useCollaborators()

  return {
    tab,
    setTab,
    splitType,
    setSplitType,
    songName,
    setSongName,
    ...collaborators,
  }
}

export default useContractBuilder
