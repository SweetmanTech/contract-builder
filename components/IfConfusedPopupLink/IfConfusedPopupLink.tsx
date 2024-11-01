import ReadHereLink from '../ReadHereLink'

const IfConfusedPopupLink = ({ open }: { open: () => void }) => {
  return <ReadHereLink open={open} className="text-[15px] md:text-[24px]  " />
}

export default IfConfusedPopupLink
