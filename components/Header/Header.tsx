'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import BuilderMarks from './BuilderMarks'
import { useContractBuilderProvider } from '@/providers/ContractBuilderProvider'
import { getMobileClassesBasedOnSteps } from '@/lib/constants/header'

const Header = () => {
  const path = usePathname()
  const { tab } = useContractBuilderProvider()

  const isBuilder = path.includes('/contract-builder')

  const mobileClassesBasedOnSteps = getMobileClassesBasedOnSteps({
    tab,
    path,
  })
  return (
    <header
      className={`fixed w-full min-h-fit py-3 md:pt-0 flex ${mobileClassesBasedOnSteps.header} md:flex-row md:justify-between items-center top-0 left-0 border-b border-white-light bg-black z-50`}
    >
      <Link href="/">
        <div
          className={`w-32 h-auto md:w-48 md:h-auto lg:w-50 lg:h-auto -ml-2`}
        >
          <Image
            src="/images/logo-dark.svg"
            alt="Logo"
            layout="responsive"
            width={190}
            height={63}
          />
        </div>
      </Link>

      {isBuilder && (
        <div className="hidden md:block">
          <BuilderMarks />
        </div>
      )}
      <div className="text-center mb-1 md:mb-0">
        <p
          className={`uppercase font-rubik ${mobileClassesBasedOnSteps?.musicSplits} md:text-3xl`}
        >
          Music Splits
        </p>
        <p className="font-share text-base md:text-lg tracking-wider">
          Contract Builder
        </p>
      </div>
    </header>
  )
}

export default Header
