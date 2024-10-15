import { CONTRACT_BUILDER_STEP } from '@/hooks/useContractBuilder'
import { useContractBuilderProvider } from '@/providers/ContractBuilderProvider'
import Image from 'next/image'

const Dot = ({
  image,
  className,
  onClick,
}: {
  image: string
  className: string
  onClick: () => void
}) => {
  return (
    <div className="relative">
      <Image src={image} alt="" width={310} height={77} />

      <div
        className={`absolute top-1/2 -translate-y-1/2 size-6 bg-transparent cursor-pointer ${className}`}
        onClick={onClick}
      />
    </div>
  )
}

const BuilderMarks = () => {
  const { tab } = useContractBuilderProvider()
  const { setTab } = useContractBuilderProvider()

  return (
    <>
      {tab === CONTRACT_BUILDER_STEP.SPLITS_TYPE && (
        <Image src="/images/splits-type.svg" alt="" width={117} height={106} />
      )}
      {tab === CONTRACT_BUILDER_STEP.SONG_NAME && (
        <Dot
          image="/images/song-name.svg"
          className="left-0"
          onClick={() => setTab(CONTRACT_BUILDER_STEP.SPLITS_TYPE)}
        />
      )}
      {tab === CONTRACT_BUILDER_STEP.COLLABORATORS_AMOUNT && (
        <Dot
          image="/images/collaborators-amount.svg"
          className="left-12"
          onClick={() => setTab(CONTRACT_BUILDER_STEP.SONG_NAME)}
        />
      )}
      {tab === CONTRACT_BUILDER_STEP.COLLABORATOR_INPUT && (
        <Dot
          image="/images/collaborator-input.svg"
          className="left-24"
          onClick={() => setTab(CONTRACT_BUILDER_STEP.COLLABORATORS_AMOUNT)}
        />
      )}
      {tab === CONTRACT_BUILDER_STEP.GOVERNANCE_TYPE && (
        <Dot
          image="/images/governance-type.svg"
          className="left-36"
          onClick={() => setTab(CONTRACT_BUILDER_STEP.COLLABORATOR_INPUT)}
        />
      )}
      {tab === CONTRACT_BUILDER_STEP.VOTE && (
        <Dot
          image="/images/vote.svg"
          className="left-48"
          onClick={() => setTab(CONTRACT_BUILDER_STEP.GOVERNANCE_TYPE)}
        />
      )}
      {tab === CONTRACT_BUILDER_STEP.DESIGNATE_ADMIN && (
        <Dot
          image="/images/designate-admin.svg"
          className="left-[184px]"
          onClick={() => setTab(CONTRACT_BUILDER_STEP.GOVERNANCE_TYPE)}
        />
      )}
      {tab === CONTRACT_BUILDER_STEP.SUCCESS && (
        <Dot
          image="/images/success.svg"
          className="left-[234px] top-[10px]"
          onClick={() => setTab(CONTRACT_BUILDER_STEP.DESIGNATE_ADMIN)}
        />
      )}
    </>
  )
}

export default BuilderMarks
