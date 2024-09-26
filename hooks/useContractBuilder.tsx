import { useState } from 'react'

export enum CONTRACT_BUILDER_STEP {
  SPLITS_TYPE,
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

  return {
    tab,
    setTab,
    splitType,
    setSplitType,
  }
}

export default useContractBuilder
