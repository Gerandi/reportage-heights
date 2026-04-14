import Image from 'next/image'
import type { Dictionary } from '../dictionaries'

const REPORTAGE_LOGO = 'https://www.figma.com/api/mcp/asset/4df335b9-9f6b-455b-889a-8da26cf6f5c8'
const MOBILE_REPORTAGE_LOGO = 'https://www.figma.com/api/mcp/asset/fad3cebb-5b4b-4945-a445-09145bc64c20'

export default function About({ dict }: { dict: Dictionary }) {
  const t = dict.about

  const stats = [
    { value: t.established, label: t.establishedLabel },
    { value: t.countries, label: t.countriesLabel },
    { value: t.projects, label: t.projectsLabel },
  ]

  return (
    <section className="bg-[#425263] w-full" style={{ contentVisibility: 'auto' }}>
      {/* ── MOBILE (< lg) ── */}
      <div className="lg:hidden flex flex-col gap-[60px] items-center px-[20px] pb-[60px] pt-[40px]">
        <div className="flex flex-col gap-[27px] items-center w-full">
          <div className="flex flex-col items-center">
            <span className="font-sans font-normal text-[12px] text-white uppercase leading-[29px]">{t.label}</span>
            <Image
              alt="Reportage Group"
              src={MOBILE_REPORTAGE_LOGO}
              width={181}
              height={40}
              className="object-cover mt-[4px]"
            />
          </div>
          <p className="font-sans font-normal text-[18px] text-white text-center leading-[26px] w-full">
            {t.descPart1}
            <br /><br />
            <strong className="font-bold">{t.descBold1}</strong>
            {t.descPart2}
            <br /><br />
            <strong className="font-bold">{t.descBold2}</strong>
            {t.descPart3}
          </p>
        </div>

        {/* Stats */}
        <div className="flex items-center justify-between font-sans text-center uppercase w-full">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center">
              <span className="text-[32px] text-white leading-[40px]">{stat.value}</span>
              <span className="text-[12px] text-[#f1f1f1] leading-[20px]">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── DESKTOP (>= lg) ── */}
      <div className="hidden lg:flex flex-col gap-[60px] items-center px-[258px] py-[85px]">
        <div className="flex flex-col gap-[27px] items-center w-full">
          <div className="flex flex-col items-center">
            <span className="font-sans font-normal text-[12px] text-white uppercase leading-[29px]">{t.label}</span>
            <Image
              alt="Reportage Group"
              src={REPORTAGE_LOGO}
              width={181}
              height={40}
              className="object-contain mt-[4px]"
            />
          </div>
          <p className="font-sans font-normal text-[18px] text-white text-center leading-[26px] max-w-[924px]">
            {t.descPart1}
            <br /><br />
            <strong className="font-bold">{t.descBold1}</strong>
            {t.descPart2}
            <br /><br />
            <strong className="font-bold">{t.descBold2}</strong>
            {t.descPart3}
          </p>
        </div>
        <div className="flex gap-[157px] items-center font-sans text-center uppercase">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center">
              <span className="text-[32px] text-white leading-[40px]">{stat.value}</span>
              <span className="text-[12px] text-[#f1f1f1] leading-[20px]">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
