import { useContractBuilderProvider } from '@/providers/ContractBuilderProvider'
import Button from '../Button'
import { CONTRACT_BUILDER_STEP, SPLIT_TYPE } from '@/hooks/useContractBuilder'
import PassedQuestions from '../PassedQuestions'
import { splitTypes } from '@/lib/constants/splitTypes'
import FormInput from '../FormInput'
import useCollaboratorsAmount from '@/hooks/useCollaboratorsAmount'

const collaboratorAmountInputClass =
  '!outline-none font-roboto_bold rounded-md border-white border !bg-transparent mt-6 p-2 max-w-[90px]'
const SubmitForm = () => {
  const {
    setTab,
    collaboratorsAmount,
    splitType,
    songWritingCollaboratorsAmount,
    masterRecordingCollaboratorsAmount,
  } = useContractBuilderProvider()

  const { handleCollaboratorsChange } = useCollaboratorsAmount()

  const songWritingFormLabel = splitTypes.find(
    (item) => item.type === SPLIT_TYPE.SONG_WRITING,
  )?.formLabels?.collaboratorsAmount

  const masterRecordingFormLabel = splitTypes.find(
    (item) => item.type === SPLIT_TYPE.MASTER_RECORDING,
  )?.formLabels?.collaboratorsAmount

  const showSongWritingCollaboratorsAmount =
    splitType === SPLIT_TYPE.SONG_WRITING || splitType === SPLIT_TYPE.BOTH

  const showMasterRecordingCollaboratorsAmount =
    splitType === SPLIT_TYPE.MASTER_RECORDING || splitType === SPLIT_TYPE.BOTH
  return (
    <>
      <div className=" size-full flex flex-col md:justify-center justify-start z-[1]">
        <div className="hidden md:block">
          <PassedQuestions />
        </div>

        <div className="flex flex-col gap-8 mt-6">
          {showSongWritingCollaboratorsAmount && (
            <div>
              <p className="text-white md:text-3xl tracking-[-0.05rem] font-share pt-6 text-[20px]">
                {songWritingFormLabel}
              </p>
              <FormInput
                value={songWritingCollaboratorsAmount}
                className={collaboratorAmountInputClass}
                type="text"
                handleChange={(e) =>
                  handleCollaboratorsChange(e, SPLIT_TYPE.SONG_WRITING)
                }
                labelProps={{
                  htmlFor: 'collaboratorsAmount',
                }}
              />
            </div>
          )}
          {showMasterRecordingCollaboratorsAmount && (
            <div>
              <p className="text-white md:text-3xl tracking-[-0.05rem] font-share pt-6 text-[20px]">
                {masterRecordingFormLabel}
              </p>
              <FormInput
                value={masterRecordingCollaboratorsAmount}
                className={collaboratorAmountInputClass}
                type="text"
                handleChange={(e) =>
                  handleCollaboratorsChange(e, SPLIT_TYPE.MASTER_RECORDING)
                }
                labelProps={{
                  htmlFor: 'collaboratorsAmount',
                }}
              />
            </div>
          )}
        </div>
      </div>

      <Button
        className="mb-25 mt-10 mb-0 mx-auto md:mx-[unset] relative z-[2] md:w-52 md:h-12 w-36 h-12 font-normal md:bg-transparent bg-[#AC444475] border-[#E18583] text-[12px]"
        onClick={() => setTab(CONTRACT_BUILDER_STEP.COLLABORATOR_INPUT)}
        disabled={Boolean(!collaboratorsAmount)}
      >
        SUBMIT
      </Button>
    </>
  )
}

export default SubmitForm
