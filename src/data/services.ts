import {
  Bot,
  Search,
  Code2,
  TrendingUp,
  Users,
  CalendarCheck,
  Blocks,
  Compass,
  type LucideIcon,
} from 'lucide-react'

export type Service = {
  id: string
  index: string
  title: string
  body: string
  tags: string[]
  image: string
  icon: LucideIcon
}

export const services: Service[] = [
  {
    id: 'ai-automation',
    index: '01',
    title: 'AI Automation & Agents',
    body: 'Custom AI agents and workflows that automate your business processes and save hours of work.',
    tags: ['n8n', 'LLMs', 'APIs', 'Workflows'],
    image: '/assets/ser-1.jpg',
    icon: Bot,
  },
  {
    id: 'aeo-geo',
    index: '02',
    title: 'AEO / GEO Optimization',
    body: 'Get your brand visible in AI search and traditional search. I optimize content, structure and strategy for both humans and AI.',
    tags: ['AEO', 'GEO', 'SEO', 'Content'],
    image: '/assets/ser-2.jpg',
    icon: Search,
  },
  {
    id: 'web-development',
    index: '03',
    title: 'Web Development',
    body: 'Modern, high-performance websites and web apps using Next.js, React and modern technologies.',
    tags: ['Next.js', 'React', 'Tailwind', '3D'],
    image: '/assets/ser-3.jpg',
    icon: Code2,
  },
  {
    id: 'paid-growth',
    index: '04',
    title: 'Paid Growth',
    body: 'Targeted ad campaigns and growth systems to help you acquire, convert and scale customers.',
    tags: ['Meta Ads', 'UGC', 'Strategy', 'Analytics'],
    image: '/assets/ser-4.jpg',
    icon: TrendingUp,
  },
  {
    id: 'lead-generation',
    index: '05',
    title: 'Lead Generation Systems',
    body: 'Automated lead generation, outreach and follow-up systems for real estate, dentists, cafés, travel, solar and more.',
    tags: ['Outreach Bots', 'CRM', 'Follow-ups'],
    image: '/assets/ser-5.jpg',
    icon: Users,
  },
  {
    id: 'booking-bots',
    index: '06',
    title: 'Booking & Appointment Bots',
    body: 'Smart appointment systems with calendar integration, reminders, rescheduling and no-show recovery.',
    tags: ['Calendar', 'Reminders', 'Auto Follow-up'],
    image: '/assets/ser-6.jpg',
    icon: CalendarCheck,
  },
  {
    id: 'custom-tools',
    index: '07',
    title: 'Custom Tools & Integrations',
    body: 'Tailored tools, dashboards and integrations to connect your apps, data and workflows.',
    tags: ['APIs', 'n8n', 'Webhooks', 'Databases'],
    image: '/assets/ser-7.jpg',
    icon: Blocks,
  },
  {
    id: 'consultation',
    index: '08',
    title: 'Consultation & Strategy',
    body: 'Clear strategy and technical guidance to help you choose the right solutions and scale efficiently.',
    tags: ['Strategy', 'Tech Stack', 'Growth Plan'],
    image: '/assets/ser-8.jpg',
    icon: Compass,
  },
]
