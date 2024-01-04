import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '../components/Header'
import { ReactNode } from 'react'
import { ThemeProvider } from '../components/ThemeProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Gaurav Kharel - Develop Interfaces',
  description: 'Develop Interfaces',
  content: 'width=device-width',
  initialscale: "1.0" 
}
interface RootLayoutProps {
  children: ReactNode
}
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="px-4 sm:px-8 md:px-10 lg:px-[500px] xl:px-[00px] 2xl:px-[1200px]">
            <Navbar />
            {children}
          </div>
        </ ThemeProvider>
      </body>
    </html>
  )
}
