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
      <body className="overflow-hidden relative">
        <Image
          src="/images/background.png"
          alt=""
          width={928}
          height={928}
          className="absolute right-[-200px] bottom-[-320px] z-[1] pointer-events-none"
        />
        <main className="pt-[180px] px-14 h-screen w-screen overflow-y-auto overflow-x-hidden pb-20">
          <Providers>
            <Header />
            {children}
          </Providers>
        </main>
      </body>
    </html>
  )
}
