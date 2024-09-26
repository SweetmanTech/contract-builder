import Header from '@/components/Header'
import Providers from '@/providers/Providers'
import React from 'react'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="px-2 bg">
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  )
}
