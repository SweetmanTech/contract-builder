import { useContractBuilderProvider } from '@/providers/ContractBuilderProvider'
import CheckboxLabel from '../CheckboxLabel'
import { CONTRACT_BUILDER_STEP } from '@/hooks/useContractBuilder'
import Button from '../Button'
import { splitTypes } from '@/lib/constants/splitTypes'
import IfConfusedPopupLink from '../IfConfusedPopupLink/IfConfusedPopupLink'
import { useModalProvider } from '@/providers/ModalProvider'
import InfoDialog from '../InfoDialog'
import { SplitsTypesInfo } from '../InfoDialogsContent'

const SubmitForm = () => {
  const { splitType, setSplitType, setTab } = useContractBuilderProvider()
  const { splitTypeInfoModalOpen, setSplitTypeInfoModalOpen } =
    useModalProvider()
  return (
    <>
      <p className="font-share md:text-3xl tracking-[-0.05rem] text-[20px]">
        What type of splits contract <br />
        would you like to create?
      </p>
      <fieldset className="flex flex-col gap-3 pl-6 pt-6">
        {splitTypes.map((splitTypeInfo, index) => (
          <CheckboxLabel
            key={index}
            label={splitTypeInfo.label}
            checked={splitType === splitTypeInfo.type}
            onClick={() => setSplitType(splitTypeInfo.type)}
          />
        ))}
      </fieldset>
      <IfConfusedPopupLink open={() => setSplitTypeInfoModalOpen(true)} />
      <Button
        className="mt-20 mb-0 mx-auto md:mx-[unset] md:w-52 md:h-12 w-36 h-12 font-normal md:bg-transparent bg-[#AC444475]  border-[#E18583] text-[12px]"
        onClick={() => setTab(CONTRACT_BUILDER_STEP.SONG_NAME)}
      >
        Next
      </Button>
      <InfoDialog
        isOpen={splitTypeInfoModalOpen}
        close={() => setSplitTypeInfoModalOpen(false)}
      >
        <SplitsTypesInfo />
      </InfoDialog>
    </>
  )
}

export default SubmitForm
