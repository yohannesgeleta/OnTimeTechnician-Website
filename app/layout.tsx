import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import NavBar from './components/NavBar'
import Header from './components/Header'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'On-Time Technician',
  description: 'Home services company in PA',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="sticky top-0 z-50 bg-white">
          <Header />
          <NavBar />
        </div>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
