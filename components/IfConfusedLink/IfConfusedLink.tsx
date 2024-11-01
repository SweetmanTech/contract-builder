import { useModalProvider } from '@/providers/ModalProvider'
import ReadHereLink from '../ReadHereLink'

const IfConfusedLink = () => {
  const { setIfConfusedModalOpen } = useModalProvider()
  return (
    <ReadHereLink
      open={() => setIfConfusedModalOpen(true)}
      className="text-[15px] md:text-[24px]  "
    />
  )
}

export default IfConfusedLink
