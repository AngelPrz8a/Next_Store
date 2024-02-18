import {Roboto} from "next/font/google"
import { Footer } from 'app/components/shared/Footer'
import { Header } from 'app/components/shared/Header/Header'
import type { Metadata } from 'next'
import 'app/sass/globals.sass'


const roboto = Roboto({ 
  weight:["100","300","500","700"],
  subsets: ["latin"],
})

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
      <body className={roboto.className}>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
