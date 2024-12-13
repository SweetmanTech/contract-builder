import { useContractBuilderProvider } from '@/providers/ContractBuilderProvider'
import { ChangeEvent, useEffect } from 'react'
import { SPLIT_TYPE } from './useContractBuilder'

const useCollaboratorsAmount = () => {
  const {
    songWritingCollaboratorsAmount,
    masterRecordingCollaboratorsAmount,
    bothCollaboratorsAmount,
    collaboratorsAmount,
    setCollaboratorsAmount,
    setMasterRecordingCollaboratorsAmount,
    setSongWritingCollaboratorsAmount,
    setBothCollaboratorsAmount,
  } = useContractBuilderProvider()

  // useEffect(() => {
  //   setSongWritingCollaboratorsAmount(0)
  //   setMasterRecordingCollaboratorsAmount(0)
  //   setBothCollaboratorsAmount(0)
  // }, [])

  const handleCollaboratorsChange = (
    e: ChangeEvent<HTMLInputElement>,
    type: SPLIT_TYPE,
  ) => {
    const value = e.target.value
    let intValue = parseInt(value, 10)
    if (value === '' || isNaN(intValue)) {
      intValue = 0
    }

    switch (type) {
      case SPLIT_TYPE.SONG_WRITING:
        setSongWritingCollaboratorsAmount(intValue)
        setMasterRecordingCollaboratorsAmount(0)
        setCollaboratorsAmount(intValue)
        break

      case SPLIT_TYPE.MASTER_RECORDING:
        setSongWritingCollaboratorsAmount(0)
        setMasterRecordingCollaboratorsAmount(intValue)
        setCollaboratorsAmount(intValue)
        break

      case SPLIT_TYPE.BOTH:
        setSongWritingCollaboratorsAmount(0)
        setMasterRecordingCollaboratorsAmount(0)
        setBothCollaboratorsAmount(intValue)
        setCollaboratorsAmount(intValue)
        break
    }
  }

  // useEffect(() => {
  //   setCollaboratorsAmount(
  //     songWritingCollaboratorsAmount +
  //       masterRecordingCollaboratorsAmount +
  //       bothCollaboratorsAmount,
  //   )
  // }, [
  //   songWritingCollaboratorsAmount,
  //   masterRecordingCollaboratorsAmount,
  //   bothCollaboratorsAmount,
  //   setCollaboratorsAmount,
  // ])
  return {
    handleCollaboratorsChange,
  }
}

export default useCollaboratorsAmount
