import type { Metadata } from 'next'
import { Space_Grotesk, Inter } from 'next/font/google'
import './globals.css'
import { business } from '@/lib/business'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { ScrollProgress } from '@/components/animations/ScrollProgress'
import { CalEmbed } from '@/components/CalEmbed'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['400', '500', '600'],
})

export const metadata: Metadata = {
  title: business.seo.title,
  description: business.seo.description,
  keywords: business.seo.keywords,
  metadataBase: new URL('https://physiocure.com.cy'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: business.seo.title,
    description: business.seo.description,
    url: 'https://physiocure.com.cy',
    siteName: business.name,
    locale: 'en_CY',
    type: 'website',
    images: [
      {
        url: business.seo.ogImage,
        width: 1200,
        height: 630,
        alt: `${business.name} - ${business.tagline}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: business.seo.title,
    description: business.seo.description,
    images: [business.seo.ogImage],
    creator: business.seo.twitterHandle,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#080B10" />
      </head>
      <body className="min-h-screen bg-paper text-ink antialiased">
        <ScrollProgress />
        <CalEmbed />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
