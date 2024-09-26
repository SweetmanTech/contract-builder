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
          className="absolute right-[-200px] bottom-[-320px] z-[1]"
        />
        <div className="relative z-[2]">
          <Providers>
            <Header />
            {children}
          </Providers>
        </div>
      </body>
    </html>
  )
}
