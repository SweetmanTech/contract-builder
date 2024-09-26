'use client'

import { CONTRACT_BUILDER_STEP } from '@/hooks/useContractBuilder'
import { useContractBuilderProvider } from '@/providers/ContractBuilderProvider'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Header = () => {
  const { tab } = useContractBuilderProvider()
  const pathname = usePathname()
  const isBuiler = pathname.includes('/contract-builder')

  return (
    <header className="fixed w-full px-6 py-3 flex justify-between items-center left-0 top-0 border-b border-white-light">
      <Link href={'/'}>
        <Image src="/images/logo-dark.svg" alt="" width={190} height={63} />
      </Link>
      {isBuiler && (
        <>
          {tab === CONTRACT_BUILDER_STEP.SPLITS_TYPE && (
            <Image
              src="/images/splits-type.svg"
              alt=""
              width={117}
              height={106}
            />
          )}
        </>
      )}
      <div>
        <p className="uppercase font-rubik text-2xl">Music Splits</p>
        <p className="font-share text-center">Contract Builder</p>
      </div>
    </header>
  )
}

export default Header
