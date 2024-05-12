import type { Metadata } from 'next'
import { Inter_Tight } from 'next/font/google'
import './globals.css'

const inter = Inter_Tight({ subsets: ['latin'], weight: '400' })

export const metadata: Metadata = {
  title: 'Next JS Authentication',
  description: 'Generated by create next app',
}
type LayoutProps = Readonly<{ children: React.ReactNode }>
export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang='en'>
      <body className={`overflow-hidden ${inter.className}`}>{children}</body>
    </html>
  )
}
