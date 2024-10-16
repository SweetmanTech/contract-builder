import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header'
import Providers from '@/providers/Providers'
import '@/styles/global.css'
import Image from 'next/image'
import Script from 'next/script'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <Script
          id="google-analytic"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-T7ZGQBC8');
            `,
          }}
        />
      </head>
      <body className="relative overflow-hidden">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-T7ZGQBC8"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        <Image
          src="/images/background.png"
          alt="Background"
          width={928}
          height={100}
          priority
          className="absolute right-0 left-[-100px] sm:scale-150 md:scale-100 scale-125 
            md:left-[unset] md:right-[-200px] bottom-[-100px] md:bottom-[-400px] z-0 pointer-events-none"
        />

        <main className="relative z-10 h-screen w-screen overflow-y-auto overflow-x-hidden pb-20 px-7 md:px-14 pt-[180px]">
          <Providers>
            <Header />
            {children}
            <Footer />
          </Providers>
        </main>
      </body>
    </html>
  )
}
