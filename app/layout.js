import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Anisha Kumari - Full Stack Developer & Explorer',
  description: 'Portfolio of Anisha Kumari - Computer Science Student, Full Stack Developer, DevOps Enthusiast & Avid Traveler',
  icons: {
    icon: '/images/logo.png',
    apple: '/images/logo.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}