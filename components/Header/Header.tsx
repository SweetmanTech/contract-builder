'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import BuilderMarks from './BuilderMarks';

const Header = () => {
  const isBuilder = usePathname().includes('/contract-builder');

  return (
    <header className="fixed w-full px-6 min-h-[87px] pt-8 md:pt-0 flex flex-col md:flex-row md:justify-between items-center top-0 left-0 border-b border-white-light bg-black z-50">
      {/* Logo Section */}
      <Link href="/" className="md:order-1 order-3">
        <Image src="/images/logo-dark.svg" alt="Logo" width={190} height={63} />
      </Link>

      {/* Text Section */}
      <div className="order-1 md:order-3 text-center mb-1 md:mb-0">
        <p className="uppercase font-rubik text-2xl md:text-3xl">Music Splits</p>
        <p className="font-share text-base md:text-lg tracking-wider">Contract Builder</p>
      </div>

      {/* Conditional Rendering of BuilderMarks */}
      {isBuilder && (
        <div className="order-2 hidden md:block">
          <BuilderMarks />
        </div>
      )}
    </header>
  );
};

export default Header;
