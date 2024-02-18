import { Footer } from 'app/components/shared/Footer'
import { Header } from 'app/components/shared/Header/Header'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Future Store',
  description: 'Store where can see how will be a online future store',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
