import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Female Genital Schistosomiasis Society of Nigeria',
  description: 'The Female Genital Schistosomiasis Society of Nigeria is a registered NGO committed to research and elimination of FGS.',
  generator: 'FGSSoN',
  icons: {
    icon: '/Logo.png',
    apple: '/Logo.png',
  },
  openGraph: {
    title: 'FGSSoN - Female Genital Schistosomiasis Society of Nigeria',
    description: 'Leading the fight against FGS through research and advocacy.',
    images: [{ url: '/Logo.png' }],
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
