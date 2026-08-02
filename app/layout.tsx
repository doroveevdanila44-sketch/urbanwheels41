import type { Metadata, Viewport } from 'next'
import { Manrope, Oswald } from 'next/font/google'

import { GoldGradientDefs } from '@/components/icons'
import { site } from '@/data/site'

import './globals.css'

const oswald = Oswald({
  subsets: ['cyrillic', 'latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-oswald',
})

const manrope = Manrope({
  subsets: ['cyrillic', 'latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-manrope',
})

const title = 'Urban Wheels 41 — прокат автомобилей в Петропавловске-Камчатском'
const description =
  'Прокат компактных городских автомобилей и внедорожников Suzuki Jimny в Петропавловске-Камчатском. Исправный парк, быстрое оформление, поддержка на всё время аренды.'

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title,
  description,
  keywords: [
    'прокат автомобилей Петропавловск-Камчатский',
    'аренда авто Камчатка',
    'прокат внедорожников Камчатка',
    'Suzuki Jimny аренда',
    'Urban Wheels 41',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: '/',
    siteName: site.name,
    title,
    description,
    images: [
      {
        url: '/images/hero.png',
        width: 1672,
        height: 941,
        alt: 'Автомобили Urban Wheels 41 на фоне Авачинской бухты',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/images/hero.png'],
  },
  robots: { index: true, follow: true },
}

export const viewport: Viewport = {
  themeColor: '#0A0A0A',
  colorScheme: 'dark',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" className={`${oswald.variable} ${manrope.variable}`}>
      <body>
        <GoldGradientDefs />
        {children}
      </body>
    </html>
  )
}
