'use client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiProvider } from 'wagmi'
import { SplitsProvider } from '@0xsplits/splits-sdk-react'
import { ReactNode } from 'react'
import wagmiConfig from '@/lib/wagmi/config'
import ContractBuilderProvider from './ContractBuilderProvider'

const queryClient = new QueryClient()

const splitsConfig = {
  chainId: 1,
  publicClient: (wagmiConfig as any).publicClient,
}

const Providers = ({ children }: { children: ReactNode }) => (
  <WagmiProvider config={wagmiConfig}>
    <QueryClientProvider client={queryClient}>
      <ContractBuilderProvider>
        <SplitsProvider config={splitsConfig}>{children}</SplitsProvider>
      </ContractBuilderProvider>
    </QueryClientProvider>
  </WagmiProvider>
)

export default Providers
