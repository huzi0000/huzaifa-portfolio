/* Compact, hand-tuned brand marks used in the tech-stack tiles and the
   contact rows. Single-colour, currentColor-driven so they inherit the
   orange / cream treatment used everywhere else. */

type P = { className?: string }

export function PythonLogo({ className }: P) {
  return (
    <svg viewBox="0 0 24 24" className={className} role="img" aria-label="Python">
      <path
        fill="#3776AB"
        d="M11.9 1.4c-1.3 0-2.4.2-3.1.5-1 .4-1.3 1-1.3 1.9v1.6h5v.5H5.6c-.9 0-1.7.5-2 1.5-.4 1.2-.4 2.3 0 3.6.3 1 .9 1.6 1.8 1.6h1.2v-1.9c0-1 .9-1.9 2-1.9h3.2c.9 0 1.6-.7 1.6-1.6V3.8c0-.9-.7-1.5-1.7-1.9-.7-.3-1.8-.5-3.1-.5Zm-1.9 1.1c.3 0 .6.1.6.4 0 .3-.3.4-.6.4s-.6-.1-.6-.4c0-.3.3-.4.6-.4Z"
      />
      <path
        fill="#FFD43B"
        d="M16.4 5.3v1.8c0 1-.8 1.9-1.9 1.9h-3.2c-.9 0-1.6.7-1.6 1.6v3.2c0 .9.7 1.5 1.6 1.5 1.3.5 2.6.5 3.8 0 .7-.3 1.3-1 1.3-1.8v-1.6h-5v-.5h5.9c.9 0 1.2-.6 1.6-1.6.4-1 .4-2.2 0-3.5-.3-.9-.7-1.6-1.6-1.6h-1.9Zm-2.3 11.4c-.3 0-.6.1-.6.4s.3.4.6.4.6-.1.6-.4c0-.3-.3-.4-.6-.4Z"
      />
    </svg>
  )
}

export function CLangLogo({ className }: P) {
  return (
    <svg viewBox="0 0 24 24" className={className} role="img" aria-label="C">
      <path
        fill="#5C6BC0"
        d="M12 1.6 3.2 5.5v6.2c0 5.1 3.7 9.8 8.8 11.1 5.1-1.3 8.8-6 8.8-11.1V5.5L12 1.6Zm3.3 14.9a5.1 5.1 0 1 1 0-7.2l-1.9 1.5a2.6 2.6 0 1 0 0 4.2l1.9 1.5Z"
      />
    </svg>
  )
}

export function RustLogo({ className }: P) {
  return (
    <svg viewBox="0 0 24 24" className={className} role="img" aria-label="Rust">
      <circle cx="12" cy="12" r="10.4" fill="none" stroke="#D14D2B" strokeWidth="1.7" />
      <path
        fill="#D14D2B"
        d="M8.6 7.6h4.3c1.9 0 2.9.9 2.9 2.3 0 .9-.5 1.6-1.4 1.9 1.1.3 1.7 1 1.7 2.1 0 1.6-1.1 2.5-3.1 2.5H8.6V7.6Zm3.9 3.7c.8 0 1.2-.3 1.2-.9s-.4-.8-1.2-.8h-1.7v1.7h1.7Zm.2 3.4c.9 0 1.3-.3 1.3-1s-.4-.9-1.3-.9h-1.9v1.9h1.9Z"
      />
    </svg>
  )
}

export function HtmlLogo({ className }: P) {
  return (
    <svg viewBox="0 0 24 24" className={className} role="img" aria-label="HTML5">
      <path
        fill="#E44D26"
        d="M3.4 1.7h17.2L18.9 21 12 23 5.1 21 3.4 1.7Zm2 2.4 1.3 15.2L12 20.6l5.3-1.3L18.6 4.1H5.4Z"
      />
      <path fill="#E44D26" d="M12 6.1h5.1l-.4 3.1H12v-.8h3.5l.1-.7H12V6.1Zm.5 4.4h2.8l-.7 5.3-2.6.7v-1l1.7-.4.4-2.9h-1.6v-1.7Zm-4.2-4.4H13v.8H9.5l.3 2.3h3.2l-.7 5.5-3.3.9v-1.1l2.2-.6.2-1.5H8.7l-.4-2.4V6.1Z" />
    </svg>
  )
}

export function CssLogo({ className }: P) {
  return (
    <svg viewBox="0 0 24 24" className={className} role="img" aria-label="CSS3">
      <path
        fill="#1572B6"
        d="M3.4 1.7h17.2L18.9 21 12 23 5.1 21 3.4 1.7Zm2 2.4 1.3 15.2L12 20.6l5.3-1.3L18.6 4.1H5.4Z"
      />
      <path
        fill="#1572B6"
        d="M12 6.1h5.1l-.6 5.2-1.7 1.6 1.8 1.6-.3 3.1-2.7 1.2-1.7.5-1.5-.6.1-1.1 1.5.5 1.2-.4.2-1.5-1.3-.5-.1-.4 2.8-2.2.3-1.4H12v-.8h5.5l.1-.7H12V6.1Zm-4.2 0H13v.8H9.5l.3 2.3h3.2l-.7 5.5-3.3.9v-1.1l2.2-.6.2-1.5H8.7l-.4-2.4V6.1Z"
      />
    </svg>
  )
}

export function JsLogo({ className }: P) {
  return (
    <svg viewBox="0 0 24 24" className={className} role="img" aria-label="JavaScript">
      <rect width="24" height="24" rx="3" fill="#F0DB4F" />
      <path
        fill="#323330"
        d="M11.1 10.4h1.6v5c0 1.2-.4 1.8-1.4 1.8-.6 0-1.1-.2-1.4-.6l.8-1c.2.2.3.3.5.3.3 0 .4-.2.4-.6v-4.9h-1.5Zm3.9-.4c.3 0 .5.3.5.7 0 .3-.3.6-.7.6-.4 0-.7-.3-.7-.6 0-.4.4-.7.9-.7Zm-1 1h1.5v4.4c0 1-.5 1.5-1.4 1.5-.6 0-1.1-.2-1.4-.6l.8-1c.2.2.4.3.5.3.3 0 .4-.2.4-.6v-4h-.4Z"
      />
    </svg>
  )
}

export function ReactLogo({ className }: P) {
  return (
    <svg viewBox="0 0 24 24" className={className} role="img" aria-label="React">
      <g fill="none" stroke="#61DAFB" strokeWidth="1.1">
        <circle cx="12" cy="12" r="2.1" fill="#61DAFB" stroke="none" />
        <ellipse cx="12" cy="12" rx="10" ry="3.9" />
        <ellipse cx="12" cy="12" rx="10" ry="3.9" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="3.9" transform="rotate(120 12 12)" />
      </g>
    </svg>
  )
}

export function N8nLogo({ className }: P) {
  return (
    <svg viewBox="0 0 24 24" className={className} role="img" aria-label="n8n">
      <circle cx="12" cy="12" r="10.4" fill="none" stroke="#EA4B71" strokeWidth="1.6" />
      <path
        fill="#EA4B71"
        d="M9.4 10.2c0-1 .8-1.7 1.8-1.7.8 0 1.4.4 1.7 1.1l-1.3.5c-.1-.3-.3-.4-.5-.4-.3 0-.5.2-.5.5 0 .4.4.5 1 .7 1 .3 1.7.7 1.7 1.7 0 1-.8 1.7-1.8 1.7-.9 0-1.6-.5-1.8-1.2l1.3-.6c.1.3.3.5.6.5s.5-.2.5-.5c0-.4-.4-.5-1-.7-1-.3-1.7-.8-1.7-1.9Z"
      />
    </svg>
  )
}

export function OpenAiLogo({ className }: P) {
  return (
    <svg viewBox="0 0 24 24" className={className} role="img" aria-label="LLM / AI tooling">
      <g fill="none" stroke="currentColor" strokeWidth="1.15" strokeLinejoin="round">
        <path d="M12 2.6 20.4 7.5v9L12 21.4 3.6 16.5v-9L12 2.6Z" />
        <path d="M12 7.2 16.8 10v5.2L12 18l-4.8-2.8V10L12 7.2Z" />
        <path d="M3.9 7.7 12 12.1l8.1-4.4M12 12.1v9.2" />
      </g>
    </svg>
  )
}

export function RocketLogo({ className }: P) {
  return (
    <svg viewBox="0 0 24 24" className={className} role="img" aria-label="Automation tooling">
      <g fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" strokeLinecap="round">
        <path d="M12 2.5c3 2 4.6 5.4 4.6 9.3L12 17l-4.6-5.2C7.4 7.9 9 4.5 12 2.5Z" />
        <circle cx="12" cy="9.2" r="1.9" />
        <path d="M7.4 12.6 4.2 14.5l1.6 4.2 3-1.2M16.6 12.6l3.2 1.9-1.6 4.2-3-1.2M10.6 18.4 12 22l1.4-3.6" />
      </g>
    </svg>
  )
}

export function GeminiLogo({ className }: P) {
  return (
    <svg viewBox="0 0 24 24" className={className} role="img" aria-label="AI tooling">
      <defs>
        <linearGradient id="gem" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#8AB4F8" />
          <stop offset="100%" stopColor="#4285F4" />
        </linearGradient>
      </defs>
      <path
        fill="url(#gem)"
        d="M12 1.8c.4 4.6 1.9 6.1 6.5 6.5-4.6.4-6.1 1.9-6.5 6.5-.4-4.6-1.9-6.1-6.5-6.5 4.6-.4 6.1-1.9 6.5-6.5Z"
      />
      <path
        fill="url(#gem)"
        opacity=".72"
        d="M18.2 15.1c.22 2.5 1.03 3.3 3.53 3.52-2.5.22-3.31 1.03-3.53 3.53-.22-2.5-1.03-3.31-3.53-3.53 2.5-.22 3.31-1.02 3.53-3.52Z"
      />
    </svg>
  )
}

export function VercelLogo({ className }: P) {
  return (
    <svg viewBox="0 0 24 24" className={className} role="img" aria-label="Vercel">
      <path fill="#5BD68C" d="M12 3.6 22 20.4H2L12 3.6Z" />
    </svg>
  )
}

export function GitHubLogo({ className }: P) {
  return (
    <svg viewBox="0 0 24 24" className={className} role="img" aria-label="GitHub">
      <path
        fill="currentColor"
        d="M12 1.8a10.2 10.2 0 0 0-3.23 19.88c.51.09.7-.22.7-.49l-.01-1.9c-2.7.6-3.32-1.15-3.32-1.15-.45-1.15-1.1-1.45-1.1-1.45-.9-.6.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.2-.25-4.5-1.1-4.5-4.88 0-1.08.38-1.96 1.02-2.65-.1-.25-.44-1.25.1-2.6 0 0 .83-.27 2.75 1.01a9.5 9.5 0 0 1 5 0c1.92-1.28 2.75-1.01 2.75-1.01.54 1.35.2 2.35.1 2.6.64.69 1.02 1.57 1.02 2.65 0 3.79-2.31 4.63-4.51 4.87.36.31.68.92.68 1.85l-.01 2.75c0 .27.19.59.7.49A10.2 10.2 0 0 0 12 1.8Z"
      />
    </svg>
  )
}

export function FigmaLogo({ className }: P) {
  return (
    <svg viewBox="0 0 24 24" className={className} role="img" aria-label="Figma">
      <path fill="#F24E1E" d="M8.4 1.8h3.6v7.2H8.4a3.6 3.6 0 1 1 0-7.2Z" />
      <path fill="#FF7262" d="M12 1.8h3.6a3.6 3.6 0 1 1 0 7.2H12V1.8Z" />
      <path fill="#A259FF" d="M8.4 9h3.6v7.2H8.4a3.6 3.6 0 1 1 0-7.2Z" />
      <path fill="#1ABCFE" d="M12 9h3.6a3.6 3.6 0 1 1-3.6 3.6V9Z" />
      <path fill="#0ACF83" d="M8.4 16.2H12v3.6a3.6 3.6 0 1 1-3.6-3.6Z" />
    </svg>
  )
}

export function ZeaburLogo({ className }: P) {
  return (
    <svg viewBox="0 0 24 24" className={className} role="img" aria-label="Deployment tooling">
      <path
        fill="#0AE448"
        d="M13.9 1.6 5.4 13.1h5.2L9.3 22.4l8.7-11.7h-5.3l1.2-9.1Z"
      />
    </svg>
  )
}

export function DiscordLogo({ className }: P) {
  return (
    <svg viewBox="0 0 24 24" className={className} role="img" aria-label="Discord">
      <path
        fill="currentColor"
        d="M18.9 5.3A15.9 15.9 0 0 0 15 4.1l-.2.4a14 14 0 0 1 3.3 1.7 12.6 12.6 0 0 0-9.9 0c1-.7 2.1-1.3 3.3-1.7L11 4.1a15.9 15.9 0 0 0-3.9 1.2C4.6 9.2 3.8 12.9 4.1 16.6a16 16 0 0 0 4.9 2.5l.9-1.5a10 10 0 0 1-1.6-.8l.4-.3a11.4 11.4 0 0 0 9.8 0l.4.3c-.5.3-1 .6-1.6.8l.9 1.5a16 16 0 0 0 4.9-2.5c.4-4.3-.7-8.1-2.2-11.3ZM9.7 14.2c-1 0-1.7-.9-1.7-2s.8-2 1.7-2 1.8.9 1.7 2c0 1.1-.8 2-1.7 2Zm4.6 0c-1 0-1.7-.9-1.7-2s.8-2 1.7-2 1.8.9 1.7 2c0 1.1-.8 2-1.7 2Z"
      />
    </svg>
  )
}

export function XLogo({ className }: P) {
  return (
    <svg viewBox="0 0 24 24" className={className} role="img" aria-label="X">
      <path
        fill="currentColor"
        d="M17.3 2.5h3.3l-7.2 8.2 8.5 11.2h-6.6l-5.2-6.8-5.9 6.8H.9l7.7-8.8L.5 2.5h6.8l4.7 6.2 5.3-6.2Zm-1.2 17.5h1.8L7.9 4H6l10.1 16Z"
      />
    </svg>
  )
}

export function TelegramLogo({ className }: P) {
  return (
    <svg viewBox="0 0 24 24" className={className} role="img" aria-label="Telegram">
      <path
        fill="currentColor"
        d="M21.9 4.3 18.7 19.4c-.2 1-.9 1.3-1.8.8l-4.9-3.6-2.4 2.3c-.3.3-.5.5-1 .5l.4-5 9.1-8.2c.4-.4-.1-.6-.6-.2L6.3 12.6l-4.9-1.5c-1.1-.3-1.1-1 .2-1.5l19.2-7.4c.9-.3 1.6.2 1.1 2.1Z"
      />
    </svg>
  )
}

export function MailLogo({ className }: P) {
  return (
    <svg viewBox="0 0 24 24" className={className} role="img" aria-label="Email">
      <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round">
        <rect x="2.4" y="4.6" width="19.2" height="14.8" rx="2" />
        <path d="m3 6.6 9 6.1 9-6.1" />
      </g>
    </svg>
  )
}
