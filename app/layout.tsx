import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '../components/Header'
import { ReactNode } from 'react'
import { ThemeProvider } from '../components/ThemeProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Gaurav Kharel - Develop Interfaces',
  description: 'Developing Interfaces',
  content: 'width=device-width, initial-scale=1.0'
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
          <div className="w-full px-1 sm:px-1 md:px-8 lg:px-[400px] xl:px-[500px] text-sm md:text-md lg:text-lg">
            <Navbar />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}