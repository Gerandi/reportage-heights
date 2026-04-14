import type { ReactNode } from 'react'
import { Montserrat, Libre_Baskerville, Marcellus } from 'next/font/google'
import { notFound } from 'next/navigation'
import { hasLocale } from './dictionaries'
import '../globals.css'

// EN/AZ: latin only (~250KB smaller than including cyrillic)
const montserratLatin = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
})

// RU: latin + cyrillic
const montserratCyrillic = Montserrat({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-montserrat',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
})

const libreBaskerville = Libre_Baskerville({
  subsets: ['latin'],
  variable: '--font-baskerville',
  weight: ['400'],
  display: 'swap',
})

const marcellus = Marcellus({
  subsets: ['latin'],
  variable: '--font-marcellus',
  weight: ['400'],
  display: 'swap',
})

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'az' }, { lang: 'ru' }]
}

export default async function LangLayout({
  children,
  params,
}: {
  children: ReactNode
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params

  if (!hasLocale(lang)) notFound()

  return (
    <html
      lang={lang}
      className={`${lang === 'ru' ? montserratCyrillic.variable : montserratLatin.variable} ${libreBaskerville.variable} ${marcellus.variable}`}
    >
      <head>
        {/* Preload LCP hero images — desktop gets full bg, mobile gets mobile bg */}
        <link rel="preload" as="image" href="/images/hero-bg.avif" media="(min-width: 1024px)" />
        <link rel="preload" as="image" href="/images/mobile-hero-bg.avif" media="(max-width: 1023px)" />
      </head>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  )
}
