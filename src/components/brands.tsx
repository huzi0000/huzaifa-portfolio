/* Contact-row marks only (single-colour, currentColor-driven so they inherit
   the orange / cream treatment used everywhere else).

   The tech-stack tiles use canonical brand artwork bundled in
   public/assets/tech instead — see src/sections/About.tsx. */

type P = { className?: string }

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