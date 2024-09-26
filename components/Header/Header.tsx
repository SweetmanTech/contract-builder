'use client'

import Image from 'next/image'
import { usePathname } from 'next/navigation'
import BuilderMarks from './BuilderMarks'

const Header = () => {
  const pathname = usePathname()
  const isBuiler = pathname.includes('/contract-builder')

  return (
    <header className="fixed w-full px-6 min-h-[145px] flex justify-between items-center left-0 top-0 border-b border-white-light">
      <Image src="/images/logo-dark.svg" alt="" width={190} height={63} />
      {isBuiler && <BuilderMarks />}
      <div>
        <p className="uppercase font-rubik text-2xl">Music Splits</p>
        <p className="font-share text-center">Contract Builder</p>
      </div>
    </header>
  )
}

export default Header
