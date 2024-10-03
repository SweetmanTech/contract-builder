import { useContractBuilderProvider } from '@/providers/ContractBuilderProvider'
import CheckboxLabel from '../CheckboxLabel'
import { CONTRACT_BUILDER_STEP, SPLIT_TYPE } from '@/hooks/useContractBuilder'
import ReadHereLink from '../ReadHereLink'
import Button from '../Button'

const SubmitForm = () => {
  const { splitType, setSplitType, setTab } = useContractBuilderProvider()

  return (
    <>
      <p className="font-share text-3xl tracking-[-0.05rem]">
        What type of splits contract <br />
        would you like to create?
      </p>
      <fieldset className="flex flex-col gap-3 pl-6 pt-6">
        <CheckboxLabel
          checked={splitType === SPLIT_TYPE.SONG_WRITING}
          onClick={() => setSplitType(SPLIT_TYPE.SONG_WRITING)}
          label="SongWriting"
        />
        <CheckboxLabel
          checked={splitType === SPLIT_TYPE.MASTER_RECORDING}
          onClick={() => setSplitType(SPLIT_TYPE.MASTER_RECORDING)}
          label="Master Recording"
        />
        <CheckboxLabel
          checked={splitType === SPLIT_TYPE.BOTH}
          onClick={() => setSplitType(SPLIT_TYPE.BOTH)}
          label="Both"
        />
      </fieldset>
      <ReadHereLink link="/popups/moreInfoQ1" />
      <Button
        className="mt-10"
        onClick={() => setTab(CONTRACT_BUILDER_STEP.SONG_NAME)}
      >
        SUBMIT
      </Button>
    </>
  )
}

export default SubmitForm
