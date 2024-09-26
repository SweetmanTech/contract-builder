import { SPLIT_TYPE } from '@/hooks/useContractBuilder'

const getSplitTypeText = (splitType: SPLIT_TYPE) => {
  switch (splitType) {
    case SPLIT_TYPE.MASTER_RECORDING:
      return 'master recording'
    case SPLIT_TYPE.BOTH:
      return 'songwriting & master recording'
    case SPLIT_TYPE.SONG_WRITING:
    default:
      return 'songwriting'
  }
}

export default getSplitTypeText
