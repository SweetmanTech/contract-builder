import Image from 'next/image'

const Header = () => {
  return (
    <header className="fixed w-full px-6 py-2 flex justify-between items-center">
      <Image src="/images/logo-dark.svg" alt="" width={190} height={63} />
    </header>
  )
}

export default Header
