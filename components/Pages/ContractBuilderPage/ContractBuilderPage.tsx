import BuildSuccess from '@/components/BuildSuccess'
import SplitsTypes from '@/components/SplitsTypes'
import { CONTRACT_BUILDER_STEP } from '@/hooks/useContractBuilder'
import { useContractBuilderProvider } from '@/providers/ContractBuilderProvider'

const ContractBuilderPage = () => {
  const { tab } = useContractBuilderProvider()

  return (
    <>
      {tab === CONTRACT_BUILDER_STEP.SPLITS_TYPE && <SplitsTypes />}
      {tab === CONTRACT_BUILDER_STEP.SUCCESS && <BuildSuccess />}
    </>
  )
}

export default ContractBuilderPage
