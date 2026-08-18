import './globals.css'

export const metadata = {
  title: 'Anisha Kumari | Product Engineer',
  description: 'Product engineer building mobile and web products from interface to production.',
  icons: {
    icon: '/anisha-mark.svg',
    shortcut: '/anisha-mark.svg',
    apple: '/anisha-mark.svg',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans">{children}</body>
    </html>
  )
}
