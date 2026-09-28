/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#080A0A',
        panel: '#0A0C0C',
        cream: '#F2F2ED',
        sand: '#D8C9B2',
        muted: '#858983',
        signal: '#FF7433',
      },
      fontFamily: {
        display: ['"Space Grotesk Variable"', 'Space Grotesk', 'system-ui', 'sans-serif'],
        sans: ['"Geist Variable"', 'Geist', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"Geist Mono Variable"', 'Geist Mono', 'ui-monospace', 'monospace'],
        editorial: ['"Instrument Serif"', 'Georgia', 'Times New Roman', 'serif'],
      },
      letterSpacing: {
        label: '0.18em',
        micro: '0.14em',
      },
    },
  },
  plugins: [],
}
