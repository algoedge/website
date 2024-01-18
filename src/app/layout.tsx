import Footer from '@/components/footer'
import Header from '@/components/header'
import { Analytics } from '@vercel/analytics/react'
import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'

const customFont = localFont({
  src: [
    {
      path: '../fonts/regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../fonts/bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-custom',
})

export const metadata: Metadata = {
  title: 'Algoedge Technologies',
  description: `Leading Innovation in Web Applications and Digital Solutions`,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${customFont.variable}`}
    >
      <body>
        <div className="container mx-auto px-4">
          <Header />
          <main className="min-h-[calc(100vh-10rem)] my-10">{children}</main>
        </div>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
