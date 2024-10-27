import { useContractBuilderProvider } from '@/providers/ContractBuilderProvider'
import Button from '../Button'
import { CONTRACT_BUILDER_STEP, SPLIT_TYPE } from '@/hooks/useContractBuilder'
import PassedQuestions from '../PassedQuestions'
import ReadHereLink from '../ReadHereLink'
import { splitTypes } from '@/lib/constants/splitTypes'

const SubmitForm = () => {
  const {
    setTab,
    songName,
    setSongName,
    recordedVersion,
    setRecordedVersion,
    splitType,
  } = useContractBuilderProvider()

  const formText = splitTypes.find((item) => item.type === splitType)?.formText
  const showRecordedVersion = splitType === SPLIT_TYPE.MASTER_RECORDING
  return (
    <>
      <div className=" md:size-full flex flex-col md:justify-center justify-start ">
        <div className="hidden md:block">
          {' '}
          <PassedQuestions />
        </div>
        <p className="text-white md:text-3xl tracking-[-0.05rem] font-share pt-6 text-[20px]">
          {formText}
        </p>
        <label
          htmlFor="#songName"
          className="mt-6 flex flex-col gap-2 text-[#696969] text-[15px]"
        >
          <p>Song composition</p>
          <input
            id="songName"
            type="text"
            className="!outline-none font-rubik rounded-md border-white border !bg-transparent p-2 max-w-[350px]"
            onChange={(e) => setSongName(e.target.value)}
            value={songName}
          />
        </label>
        {showRecordedVersion && (
          <label
            htmlFor="#recodedVersion"
            className="mt-6 flex flex-col gap-2 text-[#696969] text-[15px]"
          >
            <p>Recorded Version</p>
            <input
              id="recodedVersion"
              type="text"
              className="!outline-none font-rubik rounded-md border-white border !bg-transparent p-2 max-w-[350px]"
              onChange={(e) => setRecordedVersion(e.target.value)}
              value={recordedVersion}
            />
          </label>
        )}
        <ReadHereLink link="/" className="text-[15px] md:text-[24px]  " />
      </div>

      <Button
        className="mt-10 mb-0 mx-auto md:mx-[unset] relative z-[2] md:w-52 md:h-12 w-36 h-12 font-normal md:bg-transparent bg-[#AC444475] border-[#E18583] text-[12px]"
        onClick={() => setTab(CONTRACT_BUILDER_STEP.COLLABORATORS_AMOUNT)}
        disabled={Boolean(!songName)}
      >
        SUBMIT
      </Button>
    </>
  )
}

export default SubmitForm
