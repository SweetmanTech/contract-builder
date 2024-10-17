import { useState } from 'react'
import useCollaborators from './useCollaborators'
import useDownloadUnsignedVersion from './useDownloadUnsignedVersion'
import useDownloadSongwritingVersion from './useDownloadSongwritingVersion'

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
  SONG_WRITING = 'Song Writing',
  MASTER_RECORDING = 'Master Recording',
  BOTH = 'Both',
}

export enum GOVERNANCE_TYPE {
  VOTE = 'Vote',
  DESIGNATE_ADMIN = 'Designate Administrator',
}

const useContractBuilder = () => {
  const [tab, setTab] = useState(CONTRACT_BUILDER_STEP.SPLITS_TYPE)
  const [splitType, setSplitType] = useState(SPLIT_TYPE.SONG_WRITING)
  const [governanceType, setGovernanceType] = useState(GOVERNANCE_TYPE.VOTE)
  const [adminName, setAdminName] = useState('')
  const [votePercentage, setVotePercentage] = useState(51)
  const [songName, setSongName] = useState('')
  const collaborators = useCollaborators()
  const unsignedVersion = useDownloadUnsignedVersion()
  const songwritingVersion = useDownloadSongwritingVersion()

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
    adminName,
    setAdminName,
    ...collaborators,
    ...unsignedVersion,
    ...songwritingVersion,
  }
}

export default useContractBuilder
