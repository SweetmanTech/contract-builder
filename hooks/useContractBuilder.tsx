import { useState } from 'react'

export enum CONTRACT_BUILDER_STEP {
  SPLITS_TYPE,
  SONG_NAME,
  COLLABORATORS_AMOUNT,
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
  const [collaboratorsAmount, setCollaboratorsAmount] = useState(0)

  return {
    tab,
    setTab,
    splitType,
    setSplitType,
    songName,
    setSongName,
    collaboratorsAmount,
    setCollaboratorsAmount,
  }
}

export default useContractBuilder
