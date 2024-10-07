'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import BuilderMarks from './BuilderMarks'

const Header = () => {
  const pathname = usePathname()
  const isBuilder = pathname.includes('/contract-builder')

  return (
    <>
 {/* Mobile Header */}
<header className="block bg-black md:hidden fixed w-full px-6   pb-2 pt-8 flex items-center flex-col justify-center items-center left-0 top-0 border-b border-white-light">
  
  <div className='flex flex-col gap-2'>
    <div>
    <p className="uppercase font-rubik text-2xl">Music Splits</p>
    <p className="font-share text-center">Contract Builder</p>
    </div>
  {/* {isBuilder && <BuilderMarks />} */}
    <Link href={'/'} className='flex items-center justify-center ' >
    <Image src="/images/logo-dark.svg" alt="Logo" width={129} height={27} />
  </Link>
  </div>
</header>

{/* Desktop Header */}
<header className="hidden md:flex fixed w-full px-6 min-h-[145px] justify-between items-center left-0 top-0 border-b border-white-light">
  <Link href={'/'}>
    <Image src="/images/logo-dark.svg" alt="Logo" width={190} height={63} />
  </Link>
  {isBuilder && <BuilderMarks />}
  <div>
    <p className="uppercase font-rubik text-2xl text-[24px]">Music Splits</p>
    <p className="font-share text-center text-[15px]">Contract Builder</p>
  </div>
</header>


    </>
  )
}

export default Header
