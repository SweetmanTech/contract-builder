import { SPLIT_TYPE } from '@/hooks/useContractBuilder'
import { useContractBuilderProvider } from '@/providers/ContractBuilderProvider'
import IdentificationSection from './IdentificationSection'
import { getIdentificationDescription } from '@/lib/constants/splitTypes'

const Descriptions = () => {
  const { songName, recordedVersion, splitType } = useContractBuilderProvider()

  const showMasterRecordingIdentification = [
    SPLIT_TYPE.MASTER_RECORDING,
    SPLIT_TYPE.BOTH,
  ].includes(splitType)

  const musicalIdentificationDescription = getIdentificationDescription(
    SPLIT_TYPE.SONG_WRITING,
  )
  const masterRecordingIdentificationDescription = getIdentificationDescription(
    SPLIT_TYPE.MASTER_RECORDING,
  )

  const songPlaceholder = '_______'

  const songNameDisplay =
    songName?.length > 0 ? songName + '.' : songPlaceholder

  const recordedVersionDisplay =
    recordedVersion?.length > 0 ? recordedVersion + '.' : songPlaceholder
  return (
    <>
      <p className="font-roboto_thin text-2xl">
        Your contract has yet to be completed. Continue to fill out the decision
        tree.
      </p>
      <div className="flex flex-col gap-6">
        <IdentificationSection
          title="1.0 Music Work Identification"
          content={
            <>
              {musicalIdentificationDescription}{' '}
              <span className="text-danger-dark font-roboto_bold">
                {songNameDisplay}
              </span>
            </>
          }
        />
        {showMasterRecordingIdentification && (
          <IdentificationSection
            title="2.0 Master Recording Identification"
            content={
              <>
                {masterRecordingIdentificationDescription}{' '}
                <span className="text-danger-dark font-roboto_bold">
                  {recordedVersionDisplay}
                </span>
              </>
            }
          />
        )}
      </div>
    </>
  )
}

export default Descriptions
