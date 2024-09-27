'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import BuilderMarks from './BuilderMarks'

const Header = () => {
  const pathname = usePathname()
  const isBuiler = pathname.includes('/contract-builder')

  return (
    <header className={`pt-4 pb-2 fixed top-0 inset-x-0 flex border-b border-white-light bg-black sm:pr-6 ${isBuiler ? "pr-4 justify-between items-center" : "flex-col-reverse items-center sm:flex-row sm:justify-between"}`}>
      <Link href='/'>
        <Image
          className='sm:w-[190px] sm:h-[63px]'
          src="/images/logo-dark.svg"
          alt=""
          width={129}
          height={27}
        />
      </Link>
      {isBuiler && <div className='hidden sm:block'><BuilderMarks /></div>}
      <div className='text-center'>
        <p className={`uppercase font-rubik ${isBuiler ? "text-base/4 sm:text-2xl/6" : "text-2xl/6"}`}>
          Music Splits
        </p>
        <p className="font-share">Contract Builder</p>
      </div>
    </header>
  )
}

export default Header
