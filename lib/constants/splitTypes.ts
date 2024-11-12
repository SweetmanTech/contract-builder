import MasterRecordingIdentification from '@/components/UnsignedVersion/MasterRecordingIdentification'
import SongWritingIdentification from '@/components/UnsignedVersion/SongWritingIdentification'
import { SPLIT_TYPE } from '@/hooks/useContractBuilder'
import { getSongwritingPDFHeadings } from './songwritingPDF'
import { PDFHeadingProps } from '@/types/pdfHeadingsProps'
import { getMasterPDFHeadings } from './masterPDF'
import { getBothPDFHeadings } from './bothPDF'

const masterAndBothCollaboratorInfoText = {
  heading: '1.0 Musical Work and Master Recording Identification',
  text: 'The parties acknowledge and accept their contribution to the authorship or composition of the musical work and the production of the sound recording, and agree to the distribution of both rights as follows:',
}

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
    showCollaboratorsInfo: false,
    serialNumber: 2,
    formText: `What is the name of the song?`,
    collaboratorInfoText: {
      heading: '1.0 Music Work Identification',
      text: `The parties acknowledge and accept their contribution to the authorship or composition of the musical work and agree to the distribution of copyright ownership as follows:`,
    },
    formLabels: {
      collaboratorsAmount:
        'How many collaborators contributed to writing the song?',
    },
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
      getMasterPDFHeadings({ type, adminName, votePercentage }),
    showCollaboratorsInfo: false,
    serialNumber: 3,
    formText: `What is the name of the song and its recorded version?`,
    collaboratorInfoText: {
      ...masterAndBothCollaboratorInfoText,
    },
    formLabels: {
      collaboratorsAmount:
        'How many collaborators contributed to the recording of the song?',
    },
  },
  {
    label: 'Both',
    type: SPLIT_TYPE.BOTH,
    text: 'Song Writing and Master Recording',
    IdentificationComponent: MasterRecordingIdentification,
    headings: ({ type, adminName, votePercentage }: PDFHeadingProps) =>
      getBothPDFHeadings({ type, adminName, votePercentage }),
    pdfText: {
      headingText: `Musical Work and Master Recording`,
      musicalIdentification:
        'The contracting parties have collaborated in the authorship and composition of the musical work titled',
    },
    showCollaboratorsInfo: true,
    serialNumber: 3,
    formText: `What is the name of the song and its recorded version?`,
    collaboratorInfoText: {
      ...masterAndBothCollaboratorInfoText,
    },
    formLabels: {
      collaboratorsAmount:
        'How many collaborators contributed to writing the song and its recorded version.',
    },
  },
]

export const getIdentificationDescription = (type: SPLIT_TYPE) =>
  splitTypes.find((item) => item.type === type)?.pdfText.musicalIdentification
