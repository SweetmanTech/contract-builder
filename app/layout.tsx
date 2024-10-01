import Header from '@/components/Header'
import Providers from '@/providers/Providers'
import React from 'react'
import '@/styles/global.css'
import Image from 'next/image'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-max h-screen overflow-x-hidden bg-[url('/images/background.png')] bg-[length:580px] bg-[-200px_125%] bg-no-repeat sm:bg-[length:608px] sm:bg-[calc(100%+50px)_calc(100%+100px)]">
        <Providers>
          <Header />
          <main className="grow relative mt-7 px-14">{children}</main>
        </Providers>
        <Image
          src='/images/logo-text.svg'
          alt='mesa logo'
          aria-hidden
          width={52}
          height={26}
          className='mt-4 mx-auto sm:hidden'
        />
      </body>
    </html>
  )
}
