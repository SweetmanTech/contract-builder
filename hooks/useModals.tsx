import { useState } from 'react'

const useModals = () => {
  const [isDocuSignModalOpen, setIsDocuSignModalOpen] = useState(false)
  const [splitTypeInfoModalOpen, setSplitTypeInfoModalOpen] = useState(false)
  const [musicWorkInfoModalOpen, setMusicWorkInfoModalOpen] = useState(false)
  return {
    isDocuSignModalOpen,
    setIsDocuSignModalOpen,
    splitTypeInfoModalOpen,
    setSplitTypeInfoModalOpen,
    musicWorkInfoModalOpen,
    setMusicWorkInfoModalOpen,
  }
}

export default useModals
