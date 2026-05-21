import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
})

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: '--font-space'
})

export const metadata: Metadata = {
  title: 'L Monhit Raju | AI & Machine Learning Engineer',
  description: 'Premium portfolio of L Monhit Raju - AI & Machine Learning Engineer building intelligent systems and futuristic digital experiences.',
  keywords: ['AI', 'Machine Learning', 'Engineer', 'Portfolio', 'Python', 'React', 'Flutter'],
  authors: [{ name: 'L Monhit Raju' }],
  openGraph: {
    title: 'L Monhit Raju | AI & Machine Learning Engineer',
    description: 'Building AI-powered intelligent systems and futuristic digital experiences.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
