import { useContractBuilderProvider } from '@/providers/ContractBuilderProvider'
import React from 'react'
import PageBreakInside from '../PageBreakInside/PageBreakInside'
import { collaboratorsInfoPDF } from '@/lib/constants/collaboratorsInfoPDF'

const CollaboratorsInfo = ({
  contributionType = 'master',
}: {
  contributionType?: 'songwriting' | 'master'
}) => {
  const { collaborators } = useContractBuilderProvider()
  const contributionText = collaboratorsInfoPDF[contributionType].contribution
  return (
    <div className="flex flex-col gap-3">
      {collaborators.map((collaborator, index) => (
        <PageBreakInside key={index} className="pl-7 flex flex-col gap-2">
          <PageBreakInside>
            <span className="text-md font-semibold">
              Collaborator {index + 1}:
            </span>
          </PageBreakInside>
          <PageBreakInside>
            Legal Name:{' '}
            <span className="underline">{collaborator.legalName}</span>
          </PageBreakInside>
          <PageBreakInside>
            Email address:{' '}
            <span className="underline">{collaborator.email}</span>
          </PageBreakInside>
          <PageBreakInside>
            {contributionText}:{' '}
            <span className="underline">
              {contributionType === 'songwriting'
                ? collaborator.typeOfSongWritingContribution
                : collaborator.typeOfMasterContribution}
            </span>
          </PageBreakInside>
          <PageBreakInside>
            Ownership percentage:{' '}
            <span className="underline">{collaborator.split}</span>
          </PageBreakInside>
        </PageBreakInside>
      ))}
    </div>
  )
}

export default CollaboratorsInfo
