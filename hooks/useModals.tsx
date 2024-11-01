import { useState } from 'react'

const useModals = () => {
  const [isDocuSignModalOpen, setIsDocuSignModalOpen] = useState(false)
  const [ifConfusedModalOpen, setIfConfusedModalOpen] = useState(false)
  return {
    isDocuSignModalOpen,
    setIsDocuSignModalOpen,
    ifConfusedModalOpen,
    setIfConfusedModalOpen,
  }
}

export default useModals
