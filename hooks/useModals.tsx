import { useState } from 'react'

const useModals = () => {
  const [isDocuSignModalOpen, setIsDocuSignModalOpen] = useState(false)
  return {
    isDocuSignModalOpen,
    setIsDocuSignModalOpen,
  }
}

export default useModals
