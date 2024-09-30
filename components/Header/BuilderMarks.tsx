import { CONTRACT_BUILDER_STEP } from '@/hooks/useContractBuilder'
import { useContractBuilderProvider } from '@/providers/ContractBuilderProvider'
import Image from 'next/image'

const BuilderMarks = () => {
  const { tab } = useContractBuilderProvider()

  return (
    <>
      {tab === CONTRACT_BUILDER_STEP.SPLITS_TYPE && (
        <Image src="/images/splits-type.svg" alt="" width={117} height={106} />
      )}
      {tab === CONTRACT_BUILDER_STEP.SONG_NAME && (
        <Image src="/images/song-name.svg" alt="" width={310} height={77} />
      )}
      {tab === CONTRACT_BUILDER_STEP.COLLABORATORS_AMOUNT && (
        <Image
          src="/images/collaborators-amount.svg"
          alt=""
          width={310}
          height={77}
        />
      )}
      {tab === CONTRACT_BUILDER_STEP.COLLABORATOR_INPUT && (
        <Image
          src="/images/collaborator-input.svg"
          alt=""
          width={310}
          height={77}
        />
      )}
      {tab === CONTRACT_BUILDER_STEP.GOVERNANCE_TYPE && (
        <Image
          src="/images/governance-type.svg"
          alt=""
          width={310}
          height={77}
        />
      )}
      {tab === CONTRACT_BUILDER_STEP.VOTE && (
        <Image src="/images/vote.svg" alt="" width={310} height={77} />
      )}
      {tab === CONTRACT_BUILDER_STEP.DESIGNATE_ADMIN && (
        <Image
          src="/images/designate-admin.svg"
          alt=""
          width={310}
          height={77}
        />
      )}
      {tab === CONTRACT_BUILDER_STEP.SUCCESS && (
        <Image src="/images/success.svg" alt="" width={310} height={77} />
      )}
    </>
  )
}

export default BuilderMarks
