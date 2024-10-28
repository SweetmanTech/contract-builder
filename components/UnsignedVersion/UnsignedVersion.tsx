import { useContractBuilderProvider } from '@/providers/ContractBuilderProvider'
import MusicalWorkIdentification from './MusicalWorkIdentification'
import MasterRecordingIdentification from './MasterRecordingIdentification'
import { getMasterPDFHeadings } from '@/lib/constants/masterPDF'
import LabeledParagraphs from '../LabeledParagraphs/LabeledParagraphs'
import CollaboratorsSign from './CollaboratorsSign'

const UnsignedVersion = () => {
  const { splitType, governanceType, adminName, votePercentage } =
    useContractBuilderProvider()
  const date = new Date()
  const currentDate = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`
  const masterPDFHeadings = getMasterPDFHeadings({
    type: governanceType,
    adminName,
    votePercentage,
  })
  return (
    <div className="bg-white w-full min-h-screen flex justify-center">
      <div
        id="unsigned-version"
        className="text-black max-w-[9.5in] w-full bg-white p-[0.3in] text-[11pt] leading-normal  relative box-border min-h-[11in]"
      >
        <div className="flex flex-col gap-10">
          <div className="text-center flex flex-col gap-10 page-break-inside-avoid">
            <p className="text-2xl font-bold">
              Copyright ownership agreement for {splitType}, made as a joint
              work.
            </p>
            <p className="text-md">
              This agreement is entered into on {currentDate} between the
              following parties
            </p>
          </div>

          <div className="flex flex-col gap-8">
            <div>
              <MusicalWorkIdentification />
            </div>

            <div>
              <MasterRecordingIdentification />
            </div>

            {masterPDFHeadings.map((heading, index) => (
              <div key={index}>
                <LabeledParagraphs
                  serialNumber={index + 3}
                  heading={heading.heading}
                  paragraphs={heading.paragraphs}
                />
              </div>
            ))}
            <CollaboratorsSign />
          </div>
        </div>
      </div>
    </div>
  )
}

export default UnsignedVersion
