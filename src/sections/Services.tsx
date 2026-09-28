import { ArrowRight } from 'lucide-react'
import SectionLabel from '../components/SectionLabel'
import Reveal from '../components/Reveal'
import { services, type Service } from '../data/services'

function ServiceCard({ service, index }: { service: Service; index: number }) {
  return (
    <Reveal delay={(index % 4) * 0.05} className="h-full">
      <article
        className="group relative flex h-full flex-col overflow-hidden rounded-[16px] p-4 transition-[border-color] duration-500 hover:border-white/[0.22]"
        style={{ border: '1px solid var(--l-hair)', background: '#0a0b0b' }}
      >
        {/* cinematic media, heavily darkened so it reads as texture */}
        <img
          src={service.image}
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          width={1376}
          height={768}
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-[0.46] transition-[opacity,transform] duration-[1200ms] ease-out group-hover:scale-[1.04] group-hover:opacity-[0.58]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(7,9,9,0.50) 0%, rgba(7,9,9,0.62) 40%, rgba(7,9,9,0.92) 100%)',
          }}
        />

        <div className="relative flex h-full flex-col">
          <div className="flex items-start justify-between">
            <span
              className="flex h-14 w-14 flex-none items-center justify-center rounded-[12px]"
              style={{ background: 'rgba(255,255,255,0.06)' }}
            >
              <service.icon
                size={23}
                strokeWidth={1.5}
                className="text-[#eceae3] transition-transform duration-500 group-hover:scale-105"
              />
            </span>
            <span className="t-label-sm mt-1 text-[#8b8f88]">{service.index}</span>
          </div>

          <h3 className="mt-[14px] text-[19px] leading-[1.15] tracking-[-0.015em] text-[#eceae3]">
            {service.title}
          </h3>
          <p className="mt-[10px] text-[14px] leading-[1.5] text-[#8f938c]">{service.body}</p>

          <ul className="mt-3 flex flex-wrap gap-1.5">
            {service.tags.map((tag) => (
              <li key={tag} className="tag">
                {tag}
              </li>
            ))}
          </ul>

          <div className="mt-auto flex items-center justify-between gap-4 pt-2">
            <span className="text-[13px] text-[#a6a9a2] transition-colors duration-400 group-hover:text-[var(--c-ink)]">
              Learn more
            </span>
            <span className="arrow-btn flex-none" aria-hidden="true">
              <ArrowRight
                size={15}
                strokeWidth={1.6}
                className="transition-transform duration-400 group-hover:translate-x-0.5"
              />
            </span>
          </div>
        </div>
      </article>
    </Reveal>
  )
}

export default function Services() {
  return (
    <section id="services" className="relative scroll-mt-16 pt-[var(--section-y)]">
      <div aria-hidden="true" className="gridlines" />

      <div className="shell relative">
        <Reveal>
          <SectionLabel number="03">Services</SectionLabel>
        </Reveal>

        {/* ------------------------------------- headline + cinematic image */}
        <div className="mt-9 grid grid-cols-[minmax(0,1fr)] items-start gap-10 lg:mt-[28px] lg:grid-cols-[minmax(0,0.68fr)_minmax(0,1fr)] lg:gap-6">
          <Reveal>
            <h2 className="t-display">
              <span className="block font-display font-[300] tracking-[-0.03em] text-[var(--c-ink)]">
                What I can
              </span>
              <span className="tone-b block">build for you.</span>
            </h2>
            <p className="t-body mt-[25px] max-w-[540px] text-[17px] leading-[1.42] lg:text-[18px]">
              I build digital growth systems that help businesses get found, attract the right
              customers, and operate on autopilot using AI, automation and modern web technology.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="lg:-mt-[60px]">
            <div
              className="group relative overflow-hidden rounded-[14px]"
              style={{ border: '1px solid var(--l-hair)' }}
            >
              <img
                src="/assets/service-img.png"
                alt="Coastal city skyline lit at sunset seen from a high vantage point"
                width={1672}
                height={941}
                loading="lazy"
                decoding="async"
                className="aspect-[2.77/1] w-full object-cover object-center transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03]"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    'linear-gradient(180deg, rgba(6,8,8,0.28) 0%, rgba(6,8,8,0.02) 42%, rgba(6,8,8,0.55) 100%)',
                }}
              />
              <p className="t-label-sm absolute right-5 top-5 text-right text-[#d5d6cf]">
                Ideas.
                <br />
                Automation.
                <br />
                Growth.
                <br />
                Real results.
              </p>
              <p className="t-label-sm absolute bottom-5 right-5 flex items-center gap-3 text-[#d5d6cf]">
                <span aria-hidden="true" className="h-px w-10" style={{ background: 'var(--l-soft)' }} />
                Web3 → Real world
                <span aria-hidden="true" className="marker-sm" />
              </p>
            </div>
          </Reveal>
        </div>

        {/* ------------------------------------- service grid */}
        <div className="mt-[21px] grid grid-cols-[minmax(0,1fr)] gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
