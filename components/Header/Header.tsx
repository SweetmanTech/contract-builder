import Image from 'next/image'

const Header = () => {
  return (
    <header className="fixed w-full px-6 py-2 flex justify-between items-center left-0 top-0 border-b border-white-light">
      <Image src="/images/logo-dark.svg" alt="" width={190} height={63} />
      <div>
        <p className="uppercase font-rubik text-2xl">Music Splits</p>
        <p className="font-share text-center">Contract Builder</p>
      </div>
    </header>
  )
}

export default Header
