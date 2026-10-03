import { useMemo, useState } from 'react'
import { ArrowRight } from 'lucide-react'
import SectionLabel from '../components/SectionLabel'
import Reveal from '../components/Reveal'
import { filters, projects, type Filter, type Project } from '../data/projects'

function WorkItem({ project }: { project: Project }) {
  const [primary, secondary] = project.category.split(' / ')
  return (
    <article
      className="group flex items-center rounded-[12px] px-3 py-3.5 transition-colors duration-400 hover:bg-white/[0.03] sm:min-h-[68px] sm:py-0 sm:pl-5 sm:pr-[18px]"
      style={{ border: '1px solid var(--l-hair)', background: '#090a0a' }}
    >
      <span className="t-label-sm w-[16px] flex-none text-[#7e827c]">{project.index}</span>

      <span
        aria-hidden="true"
        className="mx-[24px] hidden h-7 w-px flex-none sm:block"
        style={{ background: 'var(--l-hair)' }}
      />

      {project.logo ? (
        <span
          className="ml-2.5 flex h-7 w-7 flex-none items-center justify-center overflow-hidden rounded-[9px] ring-1 ring-white/10 transition-transform duration-400 group-hover:scale-105 sm:ml-0 sm:h-8 sm:w-8 lg:h-10 lg:w-10 lg:rounded-[11px]"
          style={{ background: 'rgba(255,255,255,0.05)' }}
        >
          <img
            src={project.logo}
            alt=""
            aria-hidden="true"
            loading="lazy"
            decoding="async"
            width={400}
            height={400}
            className="h-full w-full object-contain"
          />
        </span>
      ) : (
        <project.icon
          size={23}
          strokeWidth={1.5}
          className="hidden flex-none text-[var(--c-signal)] transition-transform duration-400 group-hover:scale-105 sm:block"
        />
      )}

      <span
        aria-hidden="true"
        className="ml-[22px] hidden h-7 w-px flex-none sm:block"
        style={{ background: 'var(--l-hair)' }}
      />

      <div className="ml-2.5 min-w-0 flex-1 sm:ml-[21px]">
        <h3
          className={`text-[14px] leading-[1.3] tracking-[-0.012em] text-[#e8e6df] sm:text-[15.5px] sm:leading-[1.25] ${
            project.logo ? 'line-clamp-2' : 'truncate'
          }`}
        >
          {project.title}
        </h3>
        <p className="t-label-sm mt-[7px] flex items-center gap-2 text-[#8b8f88] sm:mt-[9px]">
          <span className="text-[#c3c5bd]">{primary}</span>
          {secondary && (
            <>
              <span aria-hidden="true" className="text-[var(--c-signal)]">
                |
              </span>
              <span>{secondary}</span>
            </>
          )}
        </p>
      </div>

      <p
        className={`t-body-sm ml-6 hidden w-[216px] flex-none text-[12.5px] leading-[1.76] xl:block ${
          project.logo ? 'line-clamp-3' : ''
        }`}
      >
        {project.body}
      </p>

      <span
        className="arrow-btn ml-3 h-[34px] w-[34px] flex-none sm:ml-auto sm:h-[38px] sm:w-[38px]"
        aria-hidden="true"
      >
        <ArrowRight
          size={15}
          strokeWidth={1.6}
          className="transition-transform duration-400 group-hover:translate-x-0.5"
        />
      </span>
    </article>
  )
}

export default function Work() {
  const [filter, setFilter] = useState<Filter>('ALL')

  const visible = useMemo(
    () => (filter === 'ALL' ? projects : projects.filter((p) => p.groups.includes(filter))),
    [filter],
  )

  /* column-major layout — fills column one top-to-bottom, then column two,
     exactly as the reference index does. */
  const [first, second] = useMemo(() => {
    const col = Math.ceil(visible.length / 2)
    return [visible.slice(0, col), visible.slice(col)]
  }, [visible])

  return (
    <section id="work" className="relative scroll-mt-16 pt-[var(--section-y)]">
      <div aria-hidden="true" className="gridlines" />

      <div className="shell relative px-[16px] min-[380px]:px-[var(--gutter)]">
        <div className="grid grid-cols-[minmax(0,1fr)] gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.47fr)] lg:items-start lg:gap-10">
          {/* --------------------------------- label, heading, filters */}
          <Reveal>
            <SectionLabel number="04">Selected Work</SectionLabel>

            <h2 className="t-display mt-7 text-[clamp(1.65rem,8.1vw,2.2rem)] sm:mt-9 sm:text-[clamp(2.2rem,4.82vw,4.9rem)] lg:mt-[51px]">
              <span className="tone-a block">Built systems.</span>
              <span className="tone-b block">real use cases.</span>
            </h2>

            <p className="t-body mt-[18px] max-w-[500px] text-[16.5px] leading-[1.55] sm:mt-[22px] sm:text-[19px] sm:leading-[1.42] lg:max-w-[520px] lg:text-[22px] lg:leading-[1.32]">
              A collection of automation agents, growth systems and web applications built for real
              businesses and Web3 projects.
            </p>

            <ul className="no-scrollbar mt-7 flex max-w-full flex-nowrap gap-2.5 overflow-x-auto pb-1 sm:mt-8 sm:flex-wrap sm:overflow-visible">
              {filters.map((f) => {
                const isActive = filter === f
                return (
                  <li key={f} className="shrink-0 sm:shrink">
                    <button
                      type="button"
                      onClick={() => setFilter(f)}
                      aria-pressed={isActive}
                      className="flex h-9 items-center gap-2 whitespace-nowrap rounded-full px-[22px] text-[12px] uppercase tracking-[0.06em] transition-colors duration-400 sm:whitespace-normal sm:px-[26px]"
                      style={{
                        border: `1px solid ${isActive ? 'rgba(255,255,255,0.34)' : 'var(--l-soft)'}`,
                        background: isActive ? 'rgba(255,255,255,0.045)' : 'transparent',
                        color: isActive ? 'var(--c-ink)' : '#8b8f88',
                      }}
                    >
                      {f}
                      {isActive && <span aria-hidden="true" className="marker-sm" />}
                    </button>
                  </li>
                )
              })}
            </ul>
          </Reveal>

          {/* --------------------------------- cinematic image */}
          <Reveal delay={0.1} className="lg:-mt-[35px]">
            <div
              className="group relative overflow-hidden rounded-[14px]"
              style={{ border: '1px solid var(--l-hair)' }}
            >
              <img
                src="/assets/work-img.png"
                alt="Mountain peaks at sunrise with illuminated geometric wireframe volumes"
                width={1671}
                height={941}
                loading="lazy"
                decoding="async"
                className="aspect-[2.6/1] w-full object-cover object-center transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03]"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    'linear-gradient(180deg, rgba(6,8,8,0.46) 0%, rgba(6,8,8,0.20) 44%, rgba(6,8,8,0.66) 100%)',
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
              {/* signal marker welded to the frame corner */}
              <span
                aria-hidden="true"
                className="absolute right-0 top-0 h-[7px] w-[7px]"
                style={{ background: 'var(--c-signal)' }}
              />
            </div>
          </Reveal>
        </div>

        {/* --------------------------------- project index */}
        <div className="mt-8 grid grid-cols-[minmax(0,1fr)] gap-2.5 sm:mt-10 sm:gap-2 lg:mt-[48px] lg:grid-cols-2 lg:gap-x-[15px] lg:gap-y-2">
          {[first, second].map((col, ci) => (
            <div key={ci} className="flex flex-col gap-2.5 sm:gap-2">
              {col.length === 0 ? (
                <p className="t-body-sm border border-[var(--l-hair)] px-5 py-6">
                  No projects in this category.
                </p>
              ) : (
                col.map((project) => <WorkItem key={project.id} project={project} />)
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
