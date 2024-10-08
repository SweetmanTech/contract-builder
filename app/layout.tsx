import Footer from '@/components/Footer/Footer';
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
      <body className="relative overflow-hidden">
        <Image
          src="/images/background.png"
          alt="Background"
          width={928}
          height={100}
          priority
          className="absolute right-0 left-[-100px] sm:scale-150 md:scale-100 scale-125 
            md:left-[unset] md:right-[-200px] bottom-[-100px] md:bottom-[-400px] z-0 pointer-events-none"
        />

        <main className="relative z-10 h-screen w-screen overflow-y-auto overflow-x-hidden pb-20 px-8 md:px-14 pt-[180px]">
          <Providers>
            <Header />
            {children}
            <Footer/>
          </Providers>
        </main>
      </body>
    </html>
  );
}
