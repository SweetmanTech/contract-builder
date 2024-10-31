'use client'

import useModals from '@/hooks/useModals'
import { ReactNode, createContext, useContext, useMemo } from 'react'

const ModalContext = createContext<ReturnType<typeof useModals> | undefined>(
  undefined,
)

const ModalProvider = ({ children }: { children: ReactNode }) => {
  const modals = useModals()

  const value = useMemo(
    () => ({
      ...modals,
    }),
    [modals],
  )

  return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
}

export const useModalProvider = () => {
  const context = useContext(ModalContext)
  if (!context) {
    throw new Error('useModalProvider must be used within a ModalProvider')
  }
  return context
}

export default ModalProvider
