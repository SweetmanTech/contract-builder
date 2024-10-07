"use client";
import Header from '@/components/Header';
import Providers from '@/providers/Providers';
import '@/styles/global.css';
import Image from 'next/image';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="overflow-hidden relative">
        {/* Background Images */}
        <Image
          src="/images/background.png"
          alt=""
          width={928}
          height={100}
          className="hidden md:block absolute right-[10px] md:right-[-200px] bottom-[-100px] sm:bottom-[-320px] z-[1] pointer-events-none"
        />
        <Image
          src="/images/mesa vectorized logo-10 22.png"
          alt=""
          width={600}
          height={100}
          className="block md:hidden absolute left-[-40px] bottom-0 md:left-0 z-[1] pointer-events-none"
        />

        {/* Main Content */}
        <main className="pt-[180px] px-8 md:px-14 h-screen w-screen overflow-y-auto overflow-x-hidden pb-20 relative z-[1000]">
          <Providers>
            <Header />
            {children}
          </Providers>
        </main>
      </body>
    </html>
  );
}
