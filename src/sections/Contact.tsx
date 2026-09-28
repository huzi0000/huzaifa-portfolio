import { useState, type FormEvent, type ReactNode } from 'react'
import { ArrowRight, ChevronDown } from 'lucide-react'
import SectionLabel from '../components/SectionLabel'
import Reveal from '../components/Reveal'
import { MailLogo, XLogo, DiscordLogo, TelegramLogo, GitHubLogo } from '../components/brands'

const EMAIL = 'huzaifasiddiqui561@gmail.com'

type Channel = {
  key: string
  label: string
  value: string
  href?: string
  Icon: (p: { className?: string }) => ReactNode
}

const CHANNELS: Channel[] = [
  { key: 'email', label: 'Email', value: EMAIL, href: `mailto:${EMAIL}`, Icon: MailLogo },
  { key: 'x', label: 'X (Twitter)', value: '@hs5402395', href: 'https://x.com/hs5402395', Icon: XLogo },
  { key: 'discord', label: 'Discord', value: 'huzaifa2306', Icon: DiscordLogo },
  {
    key: 'telegram',
    label: 'Telegram',
    value: '@Shah_20044',
    href: 'https://t.me/Shah_20044',
    Icon: TelegramLogo,
  },
  { key: 'github', label: 'GitHub', value: 'huzi0000', href: 'https://github.com/huzi0000', Icon: GitHubLogo },
]

const PROJECT_TYPES = [
  'AI Automation',
  'AEO / GEO',
  'Web Development',
  'Paid Growth',
  'Lead Generation',
  'Booking Bots',
  'Custom Tools',
  'Consultation',
]

type FieldKey = 'name' | 'email' | 'type' | 'message'
type Errors = Partial<Record<FieldKey, string>>

const inputClass =
  'mt-[13px] w-full border-b border-[rgba(255,255,255,0.17)] bg-transparent pb-[13px] pt-1 text-[16px] text-[var(--c-ink)] outline-none transition-colors duration-300 placeholder:text-[#6b6f6a] focus:border-[var(--c-signal)] md:text-[17px]'
const labelClass = 't-label-sm block text-[#8b8f88]'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', type: '', message: '' })
  const [errors, setErrors] = useState<Errors>({})
  const [sent, setSent] = useState(false)

  const set = (key: FieldKey) => (value: string) => {
    setForm((f) => ({ ...f, [key]: value }))
    setErrors((e) => ({ ...e, [key]: undefined }))
    setSent(false)
  }

  const validate = (): Errors => {
    const next: Errors = {}
    if (!form.name.trim()) next.name = 'Please enter your name.'
    if (!form.email.trim()) next.email = 'Please enter your email.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email.trim()))
      next.email = 'That email address doesn’t look valid.'
    if (!form.type) next.type = 'Please choose a project type.'
    if (!form.message.trim()) next.message = 'Tell me a little about the project.'
    else if (form.message.trim().length < 12) next.message = 'A few more details would help.'
    return next
  }

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    const next = validate()
    setErrors(next)
    if (Object.keys(next).length > 0) {
      const firstKey = Object.keys(next)[0] as FieldKey
      document.getElementById(`field-${firstKey}`)?.focus()
      return
    }

    /* No backend or paid form service is configured: compose a pre-filled
       message and hand it to the visitor's own mail client. Nothing leaves
       the browser, and no credentials are embedded. */
    const subject = encodeURIComponent(`${form.type} — enquiry from ${form.name}`)
    const body = encodeURIComponent(
      `${form.message}\n\n—\nName: ${form.name}\nEmail: ${form.email}\nProject type: ${form.type}`,
    )
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`
    setSent(true)
  }

  const error = (key: FieldKey) =>
    errors[key] ? (
      <span id={`${key}-error`} className="mt-2 block text-[11.5px] leading-none text-[var(--c-signal)]">
        {errors[key]}
      </span>
    ) : null

  const rowSurface = {
    border: '1px solid var(--l-hair)',
    background: '#0a0b0b',
  } as const

  return (
    <section id="contact" className="relative scroll-mt-16 pb-[38px] pt-[var(--section-y)]">
      <div aria-hidden="true" className="gridlines" />

      <div className="shell relative">
        <div className="grid grid-cols-[minmax(0,1fr)] gap-14 lg:grid-cols-[minmax(0,656fr)_minmax(0,175fr)_minmax(0,700fr)] lg:gap-0">
          {/* ============================================ left: pitch + channels */}
          <div>
            <Reveal>
              <SectionLabel number="05">Contact</SectionLabel>

              <h2 className="t-display mt-9 lg:mt-[20px]">
                <span className="tone-a block">Let&rsquo;s build</span>
                <span className="tone-b block">something</span>
                <span className="tone-a block">
                  that works
                  <span aria-hidden="true" className="marker-sm ml-[0.16em] inline-block align-baseline" />
                </span>
              </h2>

              <p className="t-body mt-[26px] max-w-[460px] text-[19px] leading-[1.48] lg:text-[22px] lg:leading-[1.28]">
                Have a project, an idea or a system that needs building? Tell me what you&rsquo;re
                working on.
              </p>
            </Reveal>

            <Reveal delay={0.06}>
              <div className="relative mt-9 pl-[38px]">
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-[5px] h-6 w-px"
                  style={{ background: 'var(--l-hair)' }}
                />
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-[5px] h-[6px] w-[6px] -translate-x-[2.5px] rounded-full bg-[var(--c-signal)]"
                />
                <p className="t-label text-[#a3a69f]">
                  Available for selected projects
                  <br />
                  worldwide.
                </p>
              </div>
            </Reveal>

            <ul className="mt-7 flex flex-col gap-[15px]">
              {CHANNELS.map((c, i) => {
                const inner = (
                  <>
                    <span
                      className="flex h-11 w-11 flex-none items-center justify-center rounded-[12px] text-[var(--c-signal)]"
                      style={{ background: 'rgba(255,255,255,0.045)' }}
                    >
                      <c.Icon className="h-[19px] w-[19px]" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="t-label-sm block text-[#8b8f88]">{c.label}</span>
                      <span className="mt-[11px] block truncate text-[13px] leading-none text-[#e8e6df] sm:text-[14px] lg:text-[15px]">
                        {c.value}
                      </span>
                    </span>
                    <span className="arrow-btn h-9 w-9 flex-none" aria-hidden="true">
                      <ArrowRight
                        size={14}
                        strokeWidth={1.6}
                        className="transition-transform duration-400 group-hover:translate-x-0.5"
                      />
                    </span>
                  </>
                )

                return (
                  <Reveal key={c.key} delay={0.04 * i} as="li">
                    {c.href ? (
                      <a
                        href={c.href}
                        target={c.href.startsWith('http') ? '_blank' : undefined}
                        rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="group flex h-[58px] items-center gap-5 rounded-[10px] px-[18px] transition-colors duration-400 hover:bg-white/[0.03]"
                        style={rowSurface}
                      >
                        {inner}
                      </a>
                    ) : (
                      <div
                        className="flex h-[58px] items-center gap-5 rounded-[10px] px-[18px]"
                        style={rowSurface}
                      >
                        {inner}
                        <span className="sr-only">(username only — no public profile link)</span>
                      </div>
                    )}
                  </Reveal>
                )
              })}
            </ul>
          </div>

          {/* the structural rule between the two columns */}
          <div aria-hidden="true" className="hidden lg:flex lg:justify-center">
            <div className="h-full w-px" style={{ background: 'var(--l-hair)' }} />
          </div>

          {/* ============================================ right: form */}
          <Reveal delay={0.1} className="relative">
            <p className="t-label-sm absolute right-0 top-0 hidden text-right text-[#8d918a] lg:block">
              Ideas.
              <br />
              Automation.
              <br />
              Growth.
              <br />
              Real results.
            </p>

            <div className="relative z-10 flex items-center gap-4">
              <span aria-hidden="true" className="h-px w-10" style={{ background: 'var(--c-signal)' }} />
              <span className="t-label-sm text-[#a3a69f]">Send a message</span>
            </div>

            <h3 className="t-display-light mt-8 text-[clamp(2.1rem,3.5vw,3.68rem)]">
              <span className="tone-a block">Tell me about</span>
              <span className="tone-b block">your project.</span>
            </h3>

            <form onSubmit={onSubmit} noValidate className="mt-[42px]">
              <div>
                <label htmlFor="field-name" className={labelClass}>
                  Your name
                </label>
                <input
                  id="field-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  value={form.name}
                  onChange={(e) => set('name')(e.target.value)}
                  placeholder="Enter your name"
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                  className={inputClass}
                />
                {error('name')}
              </div>

              <div className="mt-7">
                <label htmlFor="field-email" className={labelClass}>
                  Your email
                </label>
                <input
                  id="field-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={form.email}
                  onChange={(e) => set('email')(e.target.value)}
                  placeholder="Enter your email"
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                  className={inputClass}
                />
                {error('email')}
              </div>

              <div className="mt-7">
                <label htmlFor="field-type" className={labelClass}>
                  Project type
                </label>
                <div className="relative">
                  <select
                    id="field-type"
                    name="type"
                    value={form.type}
                    onChange={(e) => set('type')(e.target.value)}
                    aria-invalid={Boolean(errors.type)}
                    aria-describedby={errors.type ? 'type-error' : undefined}
                    className={`${inputClass} appearance-none pr-7 ${form.type ? '' : 'text-[#6b6f6a]'}`}
                    style={{ colorScheme: 'dark' }}
                  >
                    <option value="" className="bg-[#0d0f0f] text-[#e8e6df]">
                      Select a project type
                    </option>
                    {PROJECT_TYPES.map((t) => (
                      <option key={t} value={t} className="bg-[#0d0f0f] text-[#e8e6df]">
                        {t}
                      </option>
                    ))}
                  </select>
                  <ChevronDown
                    size={17}
                    strokeWidth={1.5}
                    aria-hidden="true"
                    className="pointer-events-none absolute right-0 top-[22px] text-[#9a9d96]"
                  />
                </div>
                {error('type')}
              </div>

              <div className="mt-7">
                <label htmlFor="field-message" className={labelClass}>
                  Tell me about your project
                </label>
                <textarea
                  id="field-message"
                  name="message"
                  rows={3}
                  value={form.message}
                  onChange={(e) => set('message')(e.target.value)}
                  placeholder="Share your goals, ideas or requirements..."
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                  className={`${inputClass} min-h-[76px] resize-none leading-[1.6]`}
                />
                {error('message')}
              </div>

              <button
                type="submit"
                className="group mt-[38px] flex h-[62px] w-full items-center gap-5 rounded-full bg-[#eceae3] pl-[8px] pr-6 text-left transition-colors duration-400 hover:bg-[var(--c-signal)]"
              >
                <span className="flex h-[46px] w-[46px] flex-none items-center justify-center rounded-full bg-[#0b0c0c]">
                  <ArrowRight
                    size={16}
                    strokeWidth={1.7}
                    className="text-[var(--c-signal)] transition-transform duration-400 group-hover:translate-x-0.5 group-hover:text-[#0b0c0c]"
                  />
                </span>
                <span className="text-[15px] text-[#0b0c0c]">
                  {sent ? 'Opening your mail app…' : 'Send Message'}
                </span>
              </button>

              <p aria-live="polite" className="mt-4 min-h-[15px] text-[11.5px] leading-tight text-[var(--c-muted)]">
                {sent
                  ? 'Your mail client should now be open with the message ready to send.'
                  : 'Opens a pre-filled message in your email app. Nothing is stored or sent anywhere else.'}
              </p>
            </form>
          </Reveal>
        </div>

        {/* ============================================ footer */}
        <footer className="mt-[clamp(60px,6.6vw,104px)]">
          <div className="h-px" style={{ background: 'var(--l-hair)' }} />
          <div className="flex flex-col gap-4 pt-7 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
              <span className="flex items-center gap-2 text-[10.5px] uppercase tracking-[0.18em] text-[#c6c7c0]">
                Huzaifa Siddiqui
                <span aria-hidden="true" className="marker-sm" />
              </span>
              <span aria-hidden="true" className="hidden h-3.5 w-px bg-[var(--l-hair)] sm:block" />
              <span className="t-label-sm text-[#8b8f88]">Digital Growth Systems</span>
            </div>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
              <span className="t-label-sm flex items-center gap-2 text-[#8b8f88]">
                Karachi → World
                <span aria-hidden="true" className="marker-sm" />
              </span>
              <span aria-hidden="true" className="hidden h-3.5 w-px bg-[var(--l-hair)] sm:block" />
              <span className="t-label-sm text-[#8b8f88]">&copy; 2026</span>
            </div>
          </div>
        </footer>
      </div>
    </section>
  )
}
