"use client"
import Header from '@/components/Header'
import Providers from '@/providers/Providers'
import React from 'react'
import '@/styles/global.css'
import Image from 'next/image'
import { checkWidth } from '@/components/WindowWidthComponent'



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const windowWidth = checkWidth()
  return (
    <html lang="en">
      <body className="overflow-hidden relative">
        <Image
          src="/images/background.png"
          alt=""
          width={928}
          height={100}
          className=" hidden md:block absolute md:right-[-200px] sm:bottom-[-320px] z-[1] right-[10px] bottom-[-100px] pointer-events-none"
        />
         <Image
          src="/images/mesa vectorized logo-10 22.png"
          alt=""
          width={928}
          height={100}
          className="block md:hidden absolute md:left-[0px] sm:bottom-[0px] z-[1] left-[-40px] bottom-[0px] pointer-events-none "
        />
        <main className={`pt-[180px] ${windowWidth !== null && windowWidth < 402 ? "px-8" :"px-14"} h-screen w-screen overflow-y-auto overflow-x-hidden pb-20 relative z-[1000]`}>
          <Providers>
            <Header />
            {children}
          </Providers>
        </main>
      </body>
    </html>
  )
}
