import { useContractBuilderProvider } from '@/providers/ContractBuilderProvider'
import React from 'react'

const MusicalWorkIdentification = () => {
  const { songName } = useContractBuilderProvider()
  return (
    <div className="flex flex-col gap-3">
      <h2 className="pl-7 text-lg font-bold">1. Musical Work Identification</h2>
      <p>
        The contracting parties will perform and fixate a performance of the
        song or Musical Work titled{' '}
        <span className=" underline">{songName}</span>
      </p>
    </div>
  )
}

export default MusicalWorkIdentification
