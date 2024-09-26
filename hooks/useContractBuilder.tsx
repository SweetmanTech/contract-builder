import { useState } from 'react'

export enum CONTRACT_BUILDER_STEP {
  SPLITS_TYPE,
  SONG_NAME,
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

  return {
    tab,
    setTab,
    splitType,
    setSplitType,
    songName,
    setSongName,
  }
}

export default useContractBuilder
