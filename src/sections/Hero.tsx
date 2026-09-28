import { useEffect, useRef } from 'react'

const CAPABILITIES = ['Websites', 'AI Automation', 'Paid Growth', 'GEO + AEO']

function ArrowGlyph({ className = '' }: { className?: string }) {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <path
        d="M4.5 12h14m0 0-5-5m5 5-5 5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)

  /* pause the cinematic loop when the tab is hidden */
  useEffect(() => {
    const el = videoRef.current
    if (!el) return
    const onVisibility = () => {
      if (document.hidden) el.pause()
      else el.play().catch(() => undefined)
    }
    document.addEventListener('visibilitychange', onVisibility)
    return () => document.removeEventListener('visibilitychange', onVisibility)
  }, [])

  return (
    <section id="home" className="relative p-2 lg:p-[26px]">
      <div
        className="relative isolate flex min-h-[calc(100svh_-_16px)] flex-col overflow-hidden bg-[#070909] bg-cover bg-center lg:min-h-[calc(100svh_-_52px)] lg:rounded-[26px]"
        style={{
          border: '1px solid rgba(255,255,255,0.13)',
          backgroundImage: 'url(/assets/hero-poster.jpg)',
        }}
      >
        {/* ---------------------------------------------- cinematic media */}
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover"
          style={{ objectPosition: '50% 38%' }}
          src="/assets/hero-video.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/assets/hero-poster.jpg"
          aria-hidden="true"
          tabIndex={-1}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(5,7,7,0.90) 0%, rgba(5,7,7,0.52) 22%, rgba(5,7,7,0.30) 50%, rgba(5,7,7,0.80) 100%)',
          }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(108% 78% at 21% 49%, rgba(4,6,6,0.80) 0%, rgba(4,6,6,0.30) 46%, rgba(4,6,6,0) 78%)',
          }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-1/3"
          style={{ background: 'linear-gradient(to top, rgba(4,6,6,0.88), rgba(4,6,6,0))' }}
        />

        {/* ---------------------------------------------- content */}
        <div className="relative z-10 flex flex-1 flex-col px-[22px] pb-[26px] pt-[84px] sm:px-8 lg:px-[66px] lg:pb-[30px] lg:pt-[60px]">
          <div className="flex flex-1 flex-col justify-center">
            <div className="grid items-start gap-x-[56px] gap-y-12 lg:grid-cols-[minmax(0,1fr)_354px]">
              {/* ---- left column ---- */}
              <div>
                <div className="flex items-center gap-5">
                  <span aria-hidden="true" className="h-px w-10 shrink-0" style={{ background: 'var(--c-signal)' }} />
                  <span className="t-label text-[#a3a69f]">Digital Growth Systems</span>
                </div>

                <h1
                  className="mt-8 font-display font-bold uppercase text-[var(--c-ink)] lg:mt-[34px]"
                  style={{
                    fontSize: 'var(--fs-hero)',
                    lineHeight: 0.755,
                    letterSpacing: '-0.035em',
                    marginLeft: '-0.052em',
                  }}
                >
                  <span className="block">Huzaifa</span>
                  <span className="block text-[#ece9e1]">Siddiqui</span>
                </h1>

                <p className="t-label mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-[#a3a69f] lg:mt-[34px] lg:text-[12px]">
                  {CAPABILITIES.map((item, i) => (
                    <span key={item} className="inline-flex items-center gap-5">
                      <span>{item}</span>
                      {i < CAPABILITIES.length - 1 && (
                        <span aria-hidden="true" className="text-[#5f645e]">
                          &times;
                        </span>
                      )}
                    </span>
                  ))}
                </p>
              </div>

              {/* ---- right column ---- */}
              <div className="lg:pt-0">
                <div className="flex items-center gap-[19px]">
                  <span className="t-label-sm whitespace-nowrap text-[#a3a69f]">Karachi, Pakistan</span>
                  <span aria-hidden="true" className="relative h-px flex-1">
                    <span className="absolute inset-0" style={{ background: 'var(--l-hard)' }} />
                    <span className="absolute right-0 top-1/2 h-[7px] w-[7px] -translate-y-1/2 rounded-full bg-[var(--c-signal)]" />
                  </span>
                </div>

                <p className="t-display-light mt-[30px] text-[clamp(23px,1.65vw,29px)] lg:mt-[34px] lg:leading-[1.18]">
                  I build digital{' '}
                  <em className="t-display-serif text-[var(--c-signal)]">growth&nbsp;systems</em>
                  <br />
                  for modern businesses.
                </p>

                <p className="t-body-sm mt-[26px] text-[14.5px] leading-[1.66] text-[#9a9d96] lg:mt-[30px] lg:text-[16px] lg:leading-[1.56]">
                  From high-converting websites to AI automation and paid growth, I help brands
                  acquire, convert, and scale with systems that actually work.
                </p>

                <a
                  href="#work"
                  className="group mt-[36px] inline-flex h-[54px] items-center gap-5 rounded-full bg-[#eceae3] pl-[30px] pr-[9px] text-[15px] text-[#0b0c0c] transition-colors duration-400 hover:bg-[var(--c-signal)] lg:mt-[40px] lg:h-[64px] lg:gap-6 lg:pl-[44px] lg:text-[16px]"
                >
                  <span>View my work</span>
                  <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-[#0b0c0c] lg:h-[46px] lg:w-[46px]">
                    <ArrowGlyph className="text-[var(--c-signal)] transition-transform duration-400 group-hover:translate-x-0.5 group-hover:text-[#0b0c0c]" />
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* ---- bottom metadata rail ---- */}
          <div className="mt-auto flex items-center justify-between gap-6 pt-14">
            <div className="flex items-center gap-4">
              <span className="t-label-sm text-[#9a9d97]">01</span>
              <span aria-hidden="true" className="h-px w-12 sm:w-16" style={{ background: 'var(--l-soft)' }} />
              <span className="t-label-sm hidden text-[#9a9d97] sm:inline">Digital Growth Systems Builder</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="t-label-sm hidden text-[#9a9d97] sm:inline">Let&apos;s build together</span>
              <span aria-hidden="true" className="relative h-px w-12 sm:w-16">
                <span className="absolute inset-0" style={{ background: 'var(--l-soft)' }} />
                <span className="absolute right-0 top-1/2 h-[7px] w-[7px] -translate-y-1/2 rounded-full bg-[var(--c-signal)]" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
