import Header from '@/components/Header'
import Providers from '@/providers/Providers'
import React from 'react'
import '@/styles/global.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden">
        <main className="relative w-screen min-h-max h-screen pt-[140px] px-14 pb-20 bg-[url('/images/background.png')] bg-[length:580px] bg-[-200px_125%] bg-no-repeat sm:pt-[180px] sm:bg-[length:608px] sm:bg-[calc(100%+50px)_calc(100%+100px)]">
          <Providers>
            <Header />
            {children}
          </Providers>
        </main>
      </body>
    </html>
  )
}
