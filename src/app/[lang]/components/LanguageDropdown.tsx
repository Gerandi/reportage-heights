'use client'

import { useState } from 'react'
import Link from 'next/link'

const locales = [
  { code: 'en', label: 'EN' },
  { code: 'az', label: 'AZ' },
  { code: 'ru', label: 'RU' },
]

interface Props {
  lang: string
  currentLabel: string
  variant: 'mobile' | 'desktop'
  langIcon: string
  chevronIcon: string
}

export default function LanguageDropdown({ lang, currentLabel, variant, langIcon, chevronIcon }: Props) {
  const [open, setOpen] = useState(false)
  const isMobile = variant === 'mobile'

  return (
    <>
      {open && <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />}
      <div
        className={`relative flex items-center z-50 ${isMobile ? 'gap-[6px]' : 'gap-[7px] cursor-pointer'}`}
        onClick={(e) => { e.stopPropagation(); setOpen(!open) }}
      >
        <img alt="" src={langIcon} className={isMobile ? 'w-[12px] h-[18px]' : 'w-[11px] h-[18px]'} />
        <span className={`font-sans font-medium text-[14px] tracking-[1.4px] uppercase ${isMobile ? 'text-white' : 'text-black'}`}>
          {currentLabel}
        </span>
        <img alt="" src={chevronIcon} className={`w-[11px] h-[16px] transition-transform ${open ? 'rotate-180' : ''}`} />
        {open && (
          <div className={`absolute top-full right-0 mt-[8px] rounded-[4px] py-[4px] z-50 min-w-[64px] ${isMobile ? 'bg-[#2b3641]' : 'bg-white border border-[rgba(0,0,0,0.1)] shadow-md'}`}>
            {locales.filter(l => l.code !== lang).map(locale => (
              <Link
                key={locale.code}
                href={`/${locale.code}`}
                prefetch={false}
                className={`block px-[16px] py-[8px] font-sans font-medium text-[13px] tracking-[1.4px] uppercase hover:text-[#e6b867] ${isMobile ? 'text-white' : 'text-black'}`}
              >
                {locale.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  )
}
