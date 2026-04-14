import Image from 'next/image'
import type { Dictionary } from '../dictionaries'

const MAP_IMG = '/images/map.jpg'
const MOBILE_MAP_IMG = '/images/mobile-map.jpg'

export default function MapSection({ dict }: { dict: Dictionary }) {
  const t = dict.map

  const locations = [
    { name: t.halfmoon, dist: t.halfmoonDist },
    { name: t.dreamArena, dist: t.dreamArenaDist },
    { name: t.seaBreeze, dist: t.seaBreezeDist },
    { name: t.airport, dist: t.airportDist },
  ]

  return (
    <section className="bg-white w-full" style={{ contentVisibility: 'auto' }}>
      {/* ── MOBILE (< lg) ── */}
      <div className="lg:hidden flex flex-col gap-[40px] px-[20px] py-[40px]">
        {/* Title */}
        <div className="flex flex-col gap-[20px]">
          <div className="backdrop-blur-[10px] bg-[rgba(230,184,103,0.1)] flex items-center justify-center px-[20px] py-[10px] rounded-[8px] self-start">
            <span className="font-sans font-bold text-[12px] text-[#e6b867] tracking-[3.2px] uppercase">{t.badge}</span>
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-[#425263] text-[38px] leading-[46px]">{t.titleLine1}</span>
            <span className="font-serif text-[#425263] text-[38px] leading-[46px]">{t.titleLine2}</span>
          </div>
        </div>

        {/* Map image */}
        <div className="relative h-[320px] w-full rounded-[8px] overflow-hidden">
          <Image
            alt="Map"
            src={MOBILE_MAP_IMG}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw"
          />
        </div>

        {/* Location list */}
        <div className="flex flex-col w-full">
          {locations.map((loc, i) => (
            <div
              key={loc.name}
              className={`flex items-start justify-between pt-[24px] pb-[25px] gap-[12px] ${i < locations.length - 1 ? 'border-b border-[rgba(66,82,99,0.1)]' : ''}`}
            >
              <span className="font-sans font-normal text-[18px] text-[#425263] leading-[22px] flex-1">{loc.name}</span>
              <span className="font-sans font-semibold text-[18px] text-[#425263] leading-[22px] text-right">{loc.dist}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── DESKTOP (>= lg) ── */}
      <div className="hidden lg:flex flex-col items-start px-[80px] py-[140px]">
        <div className="flex gap-[80px] h-[600px] items-center justify-center w-full max-w-[1280px] mx-auto">
          <div className="border border-[rgba(66,82,99,0.1)] h-[600px] overflow-hidden relative rounded-[12px] w-[721px] shrink-0">
            <Image
              alt="Map"
              src={MAP_IMG}
              fill
              className="object-cover rounded-[12px]"
              sizes="721px"
            />
          </div>
          <div className="flex flex-col gap-[40px] w-[479px] shrink-0">
            <div className="flex flex-col gap-[16px]">
              <div className="backdrop-blur-[10px] bg-[rgba(230,184,103,0.1)] flex items-center justify-center px-[20px] py-[10px] rounded-[8px] self-start">
                <span className="font-sans font-bold text-[16px] text-[#e6b867] tracking-[3.2px] uppercase">{t.badge}</span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-[#425263] text-[56px] leading-[64px]">{t.titleLine1}</span>
                <span className="font-serif text-[#425263] text-[56px] leading-[64px]">{t.titleLine2}</span>
              </div>
            </div>
            <div className="flex flex-col">
              {locations.map((loc, i) => (
                <div key={loc.name} className={`flex items-center justify-between py-[24px] ${i < locations.length - 1 ? 'border-b border-[rgba(66,82,99,0.1)]' : ''}`}>
                  <span className="font-sans font-normal text-[18px] text-[#425263] leading-[22px]">{loc.name}</span>
                  <span className="font-sans font-semibold text-[18px] text-[#425263] leading-[22px]">{loc.dist}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
