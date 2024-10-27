import { SPLIT_TYPE } from '@/hooks/useContractBuilder'

export const splitTypes = [
  {
    label: 'Song Writing',
    type: SPLIT_TYPE.SONG_WRITING,
    text: 'Song Writing',
    formText: `What is the name of the song?`,
  },
  {
    label: 'Master Recording',
    type: SPLIT_TYPE.MASTER_RECORDING,
    text: 'Master Recording',
    formText: `What is the name of the song and its recorded version?`,
  },
  {
    label: 'Both',
    type: SPLIT_TYPE.BOTH,
    text: 'Song Writing and Master Recording',
    formText: `What is the name of the song?`,
  },
]
