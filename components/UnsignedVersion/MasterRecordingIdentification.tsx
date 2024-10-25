import { useContractBuilderProvider } from '@/providers/ContractBuilderProvider'

import React from 'react'

const MasterRecordingIdentification = () => {
  const { splitType, collaborators, songName } = useContractBuilderProvider()
  return (
    <div className="flex flex-col gap-3 text-md">
      {' '}
      <h2 className="pl-7 text-lg font-bold">
        2. Identification of the {splitType}
      </h2>
      <p>
        The contracting parties have collaborated in the recording and
        production of the Master Recording titled{' '}
        <span className="underline">{songName}</span>, which fixes a performance
        of the Musical Work identified in clause 1 of this agreement.
      </p>
      <p>
        The parties acknowledge and accept their contribution to the recording
        and production of the Master Recording and agree to the distribution of
        ownership as follows:
      </p>
      <div className="flex flex-col gap-3">
        {collaborators.map((collaborator, index) => (
          <div key={index} className="pl-7 flex flex-col gap-2">
            <p>
              <span className="text-md font-semibold">
                Collaborator {index + 1}:
              </span>
            </p>
            <p>
              Legal Name:{' '}
              <span className="underline">{collaborator.legalName}</span>
            </p>
            <p>
              Email address:{' '}
              <span className="underline">{collaborator.email}</span>
            </p>
            <p>
              Master Contribution:{' '}
              <span className="underline">
                {collaborator.typeOfMasterContribution}
              </span>
            </p>
            <p>
              Ownership percentage:{' '}
              <span className="underline">{collaborator.split}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MasterRecordingIdentification
