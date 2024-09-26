'use client'

import React from 'react'
import '@/styles/global.css'
import Providers from '@/providers/Providers'

export default function Page() {
  return (
    <Providers>
      <div className="mx-auto flex h-screen max-w-lg flex-col items-center justify-center"></div>
    </Providers>
  )
}
