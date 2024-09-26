'use client'

import useContractBuilder from '@/hooks/useContractBuilder'
import { ReactNode, createContext, useContext, useMemo } from 'react'

const ContractBuilderContext = createContext<
  ReturnType<typeof useContractBuilder> | undefined
>(undefined)

const ContractBuilderProvider = ({ children }: { children: ReactNode }) => {
  const contractBuilder = useContractBuilder()

  const value = useMemo(
    () => ({
      ...contractBuilder,
    }),
    [contractBuilder],
  )

  return (
    <ContractBuilderContext.Provider value={value}>
      {children}
    </ContractBuilderContext.Provider>
  )
}

export const useContractBuilderProvider = () => {
  const context = useContext(ContractBuilderContext)
  if (!context) {
    throw new Error(
      'useContractBuilderProvider must be used within a ContractBuilderProvider',
    )
  }
  return context
}

export default ContractBuilderProvider
