import { useContractBuilderProvider } from '@/providers/ContractBuilderProvider'
import { ChangeEvent, useEffect } from 'react'
import { SPLIT_TYPE } from './useContractBuilder'

const useCollaboratorsAmount = () => {
  const {
    songWritingCollaboratorsAmount,
    masterRecordingCollaboratorsAmount,
    setCollaboratorsAmount,
    setMasterRecordingCollaboratorsAmount,
    setSongWritingCollaboratorsAmount,
  } = useContractBuilderProvider()

  const handleCollaboratorsChange = (
    e: ChangeEvent<HTMLInputElement>,
    type: SPLIT_TYPE,
  ) => {
    const value = e.target.value
    let intValue = parseInt(value, 10)

    if (value === '' || isNaN(intValue)) {
      intValue = 0
    }

    // setSongWritingCollaboratorsAmount(0)
    // setMasterRecordingCollaboratorsAmount(0)

    switch (type) {
      case SPLIT_TYPE.SONG_WRITING:
        setSongWritingCollaboratorsAmount(intValue)
        setCollaboratorsAmount(songWritingCollaboratorsAmount)
        break

      case SPLIT_TYPE.MASTER_RECORDING:
        setMasterRecordingCollaboratorsAmount(intValue)
        setCollaboratorsAmount(masterRecordingCollaboratorsAmount)
        break

      case SPLIT_TYPE.BOTH:
        setCollaboratorsAmount(
          songWritingCollaboratorsAmount + masterRecordingCollaboratorsAmount,
        )
    }
  }

  // useEffect(() => {
  //   setCollaboratorsAmount(
  //     songWritingCollaboratorsAmount + masterRecordingCollaboratorsAmount,
  //   )
  // }, [
  //   songWritingCollaboratorsAmount,
  //   masterRecordingCollaboratorsAmount,
  //   setCollaboratorsAmount,
  // ])
  return {
    handleCollaboratorsChange,
  }
}

export default useCollaboratorsAmount
