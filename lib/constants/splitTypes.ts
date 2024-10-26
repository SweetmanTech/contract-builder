import MasterRecordingIdentification from '@/components/UnsignedVersion/MasterRecordingIdentification'
import SongWritingIdentification from '@/components/UnsignedVersion/SongWritingIdentification'
import { SPLIT_TYPE } from '@/hooks/useContractBuilder'
import { getSongwritingPDFHeadings } from './songwritingPDF'
import { PDFHeadingProps } from '@/types/pdfHeadingsProps'

export const splitTypes = [
  {
    label: 'Song Writing',
    type: SPLIT_TYPE.SONG_WRITING,
    text: 'Song Writing',
    pdfText: {
      headingText: 'music composition',
      musicalIdentification:
        'The contracting parties have collaborated in the authorship and composition of the Musical Work titled',
    },
    IdentificationComponent: SongWritingIdentification,
    headings: ({ type, adminName, votePercentage }: PDFHeadingProps) =>
      getSongwritingPDFHeadings({ type, adminName, votePercentage }),
  },
  {
    label: 'Master Recording',
    type: SPLIT_TYPE.MASTER_RECORDING,
    text: 'Master Recording',
    pdfText: {
      headingText: 'Master Recording',
      musicalIdentification: `The contracting parties will perform and fixate a performance of the song or Musical Work titled`,
    },
    IdentificationComponent: MasterRecordingIdentification,
    headings: ({ type, adminName, votePercentage }: PDFHeadingProps) =>
      getSongwritingPDFHeadings({ type, adminName, votePercentage }),
  },
  {
    label: 'Both',
    type: SPLIT_TYPE.BOTH,
    text: 'Song Writing and Master Recording',
  },
]
