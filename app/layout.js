import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Gaurav Kharel - Develop Interfaces',
  description: 'Develop Interfaces',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <div className="px-4 md:px-[450px] sm:px-[450px] ">
        <Navbar />
        {children}
      </div>
      </body>
    </html>
  )
}
