import { useContractBuilderProvider } from '@/providers/ContractBuilderProvider'
import SplitType from './SplitType'
import { SPLIT_TYPE } from '@/hooks/useContractBuilder'
import ReadHereLink from '../ReadHereLink'
import SubmitButton from '../SubmitButton'

const SubmitForm = () => {
  const { splitType, setSplitType } = useContractBuilderProvider()

  return (
    <>
      <p className="font-share text-3xl tracking-[-0.05rem]">
        What type of splits contract <br />
        would you like to create?
      </p>
      <fieldset className="flex flex-col gap-3 pl-6 pt-6">
        <SplitType
          checked={splitType === SPLIT_TYPE.SONG_WRITING}
          onClick={() => setSplitType(SPLIT_TYPE.SONG_WRITING)}
          label="SongWriting"
        />
        <SplitType
          checked={splitType === SPLIT_TYPE.MASTER_RECORDING}
          onClick={() => setSplitType(SPLIT_TYPE.MASTER_RECORDING)}
          label="Master Recording"
        />
        <SplitType
          checked={splitType === SPLIT_TYPE.BOTH}
          onClick={() => setSplitType(SPLIT_TYPE.BOTH)}
          label="Both"
        />
      </fieldset>
      <ReadHereLink link="/" />
      <SubmitButton className="mt-10" onClick={() => {}} />
    </>
  )
}

export default SubmitForm
