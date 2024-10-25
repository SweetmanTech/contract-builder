import { useContractBuilderProvider } from '@/providers/ContractBuilderProvider'
import React from 'react'

const CollaboratorsSign = () => {
  const { collaborators } = useContractBuilderProvider()
  return (
    <div className="flex flex-col gap-6">
      <p>In witness whereof, the collaborators sign:</p>
      {collaborators.map((_, index) => (
        <div key={index} className="flex flex-col gap-2">
          <p className="font-semibold">Collaborator {index + 1}:</p>
          <p>
            Legal Name:
            <span>_______________________________________________________</span>
          </p>
          <p>
            Home address:
            <span>_______________________________________________________</span>
          </p>
          <div className="flex gap-2">
            <p>
              Signature:
              <span> _________________________________</span>
            </p>
            <p>
              Date:
              <span> _________________________________</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default CollaboratorsSign
