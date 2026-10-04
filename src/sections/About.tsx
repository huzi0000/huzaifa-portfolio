import { Layers3, ChartNoAxesColumn, TrendingUp, Users, CodeXml, Monitor, Workflow, Box } from 'lucide-react'
import SectionLabel from '../components/SectionLabel'
import Reveal from '../components/Reveal'

/* Facts only — no invented numbers anywhere. */
const FACTS = [
  { value: 'AI + Web', label: 'Core Discipline' },
  { value: 'Karachi, PK', label: 'Based In' },
  { value: 'Growth Systems', label: 'What I Build' },
  { value: 'Worldwide', label: 'Availability' },
]

const CAPABILITIES = [
  { title: 'AI Automation', body: 'Custom agents & workflows that actually work.', icon: Layers3 },
  { title: 'AEO / GEO', body: 'Get your brand found in AI and search.', icon: ChartNoAxesColumn },
  {
    title: 'Web Development',
    body: 'Modern, high-converting websites & 3D experiences.',
    icon: TrendingUp,
  },
  { title: 'Paid Growth', body: 'Ads, UGC and growth systems to scale your brand.', icon: Users },
]

/* Canonical brand marks bundled locally in public/assets/tech.
   Official full-colour artwork where the brand has an intrinsic colour
   (Python, HTML5, CSS, JavaScript, Figma, Supabase, Git, Groq, React, n8n,
   Gemini); the light-ink variants are the officially monochrome marks. */
const STACK = [
  {
    title: 'Programming',
    body: 'Core languages I use for development and automation.',
    icon: CodeXml,
    marks: [
      { name: 'Python', src: '/assets/tech/python.svg' },
      { name: 'C', src: '/assets/tech/c.svg' },
      { name: 'Rust', src: '/assets/tech/rust.svg' },
      { name: 'JavaScript', src: '/assets/tech/javascript.svg' },
    ],
  },
  {
    title: 'Frontend',
    body: 'Modern frameworks for fast and beautiful experiences.',
    icon: Monitor,
    marks: [
      { name: 'HTML5', src: '/assets/tech/html5.svg' },
      { name: 'CSS', src: '/assets/tech/css.svg' },
      { name: 'JavaScript', src: '/assets/tech/javascript.svg' },
      { name: 'React', src: '/assets/tech/react.svg' },
      { name: 'Next.js', src: '/assets/tech/nextjs.svg' },
    ],
  },
  {
    title: 'Automation & AI',
    body: 'Building intelligent agents and workflows with modern tools.',
    icon: Workflow,
    marks: [
      { name: 'n8n', src: '/assets/tech/n8n.svg' },
      { name: 'OpenAI', src: '/assets/tech/openai.svg' },
      { name: 'Claude', src: '/assets/tech/claude.svg' },
      { name: 'Gemini', src: '/assets/tech/gemini.svg' },
      { name: 'Groq', src: '/assets/tech/groq.svg' },
    ],
  },
  {
    title: 'Tools & Platforms',
    body: 'Everything I use to build, deploy and grow projects.',
    icon: Box,
    marks: [
      { name: 'Vercel', src: '/assets/tech/vercel.svg' },
      { name: 'GitHub', src: '/assets/tech/github.svg' },
      { name: 'Figma', src: '/assets/tech/figma.svg' },
      { name: 'Supabase', src: '/assets/tech/supabase.svg' },
      { name: 'Git', src: '/assets/tech/git.svg' },
    ],
  },
]

function MarkTile({ name, src }: { name: string; src: string }) {
  return (
    <li
      title={name}
      className="flex h-12 w-12 items-center justify-center rounded-[12px] transition-colors duration-400 hover:bg-white/[0.075]"
      style={{ background: 'rgba(255,255,255,0.045)' }}
    >
      <img
        src={src}
        alt={name}
        width={24}
        height={24}
        loading="lazy"
        decoding="async"
        className="h-6 w-6 object-contain"
      />
    </li>
  )
}

export default function About() {
  return (
    <section id="about" className="relative scroll-mt-16 pt-[var(--section-y)]">
      <div aria-hidden="true" className="gridlines" />

      <div className="shell relative">
        <Reveal>
          <SectionLabel number="02">About Me</SectionLabel>
        </Reveal>

        {/* ------------------------------------- heading + fact rail + image */}
        <div className="mt-9 grid grid-cols-[minmax(0,1fr)] gap-x-[23px] gap-y-10 lg:mt-[27px] lg:grid-cols-[minmax(0,1fr)_190px_minmax(0,1.52fr)] lg:items-start">
          <Reveal>
            <h2 className="t-display-light">
              <span className="tone-a block">Turning ideas into</span>
              <span className="tone-b block">working systems.</span>
            </h2>
            <p className="t-body mt-[18px] text-[19px] leading-[1.7] lg:text-[20px]">
              I&apos;m Huzaifa Siddiqui, a builder who creates AI automation agents, modern websites,
              and growth systems that help businesses acquire, convert, and scale. I work at the
              intersection of automation, search (AEO/GEO), and creative digital experiences.
            </p>
          </Reveal>

          <Reveal delay={0.06} className="lg:-mt-[25px]">
            <div className="lg:border-l lg:border-[var(--l-hair)] lg:pl-[38px]">
              {FACTS.map((f) => (
                <div key={f.label} className="border-t border-[var(--l-hair)] py-[19px]">
                  <div className="text-[20px] leading-none tracking-[-0.012em] text-[#e8e6df]">
                    {f.value}
                  </div>
                  <div className="mt-[12px] text-[12px] leading-none text-[var(--c-muted)]">
                    {f.label}
                  </div>
                </div>
              ))}
              <div aria-hidden="true" className="h-px bg-[var(--l-hair)]" />
            </div>
          </Reveal>

          <Reveal delay={0.12} className="lg:-mt-[55px]">
            <div
              className="group relative overflow-hidden rounded-[14px]"
              style={{ border: '1px solid var(--l-hair)' }}
            >
              <img
                src="/assets/about-img.png"
                alt="Cinematic view of a coastal city at dusk seen from a mountain ridge"
                width={1672}
                height={941}
                loading="lazy"
                decoding="async"
                className="aspect-[2.13/1] w-full object-cover object-center transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03]"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    'linear-gradient(180deg, rgba(6,8,8,0.40) 0%, rgba(6,8,8,0) 34%, rgba(6,8,8,0.20) 66%, rgba(6,8,8,0.68) 100%)',
                }}
              />
              <p className="t-label-sm absolute right-5 top-5 text-right text-[#d5d6cf]">
                Same mindset.
                <br />
                Bigger systems.
              </p>
              <p className="t-label-sm absolute bottom-5 right-5 flex items-center gap-3 text-[#d5d6cf]">
                <span aria-hidden="true" className="h-px w-10" style={{ background: 'var(--l-soft)' }} />
                Karachi → World
                <span aria-hidden="true" className="marker-sm" />
              </p>
            </div>
          </Reveal>
        </div>

        {/* ------------------------------------- capability cards */}
        <div className="mt-12 grid grid-cols-[minmax(0,1fr)] gap-5 sm:grid-cols-2 lg:mt-[33px] lg:grid-cols-4">
          {CAPABILITIES.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.05} className="h-full">
              <article className="panel group flex h-full gap-[18px] p-[18px] transition-colors duration-500 hover:border-white/[0.16] hover:bg-white/[0.022]">
                <span
                  className="flex h-14 w-14 flex-none items-center justify-center rounded-[12px]"
                  style={{ background: 'rgba(255,255,255,0.05)' }}
                >
                  <c.icon
                    size={23}
                    strokeWidth={1.5}
                    className="text-[var(--c-signal)] transition-transform duration-500 group-hover:scale-105"
                  />
                </span>
                <div className="pt-[2px]">
                  <h3 className="text-[19px] leading-[1.15] tracking-[-0.015em] text-[#e8e6df]">
                    {c.title}
                  </h3>
                  <p className="mt-[13px] text-[15px] leading-[1.65] text-[var(--c-muted)]">{c.body}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* ------------------------------------- tech stack */}
        <div className="mt-[29px] border-t border-[var(--l-hair)] pt-[26px]">
          <div className="grid items-center gap-5 md:grid-cols-[minmax(0,1fr)_minmax(0,auto)_minmax(0,1fr)]">
            <div className="flex items-center gap-4">
              <span aria-hidden="true" className="h-px w-10" style={{ background: 'var(--c-signal)' }} />
              <span className="t-label-sm text-[#b6b8b1]">Tech Stack</span>
            </div>
            <p className="text-[13px] leading-[1.5] text-[var(--c-muted)] md:text-center">
              Tools and technologies I work with to build, automate and scale.
            </p>
            <p className="t-label-sm flex items-center gap-2 text-[#8d918a] md:justify-end">
              A full-stack approach
              <span aria-hidden="true" className="marker-sm" />
            </p>
          </div>

          <div className="mt-6 grid grid-cols-[minmax(0,1fr)] gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {STACK.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.05} className="h-full">
                <article className="panel h-full p-[18px] transition-colors duration-500 hover:border-white/[0.16] hover:bg-white/[0.022]">
                  <div className="flex items-center gap-3">
                    <s.icon size={20} strokeWidth={1.5} className="flex-none text-[#e4e2db]" />
                    <h3 className="flex-1 text-[15px] leading-none text-[#e8e6df]">{s.title}</h3>
                    <span className="t-label-sm text-[#6f736d]">{String(i + 1).padStart(2, '0')}</span>
                  </div>
                  <p className="mt-[13px] text-[12.5px] leading-[1.45] text-[var(--c-muted)]">{s.body}</p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {s.marks.map((m) => (
                      <MarkTile key={m.name} name={m.name} src={m.src} />
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
