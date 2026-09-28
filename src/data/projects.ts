import { Tooth } from '../components/icons'
import {
  Package,
  Database,
  Bell,
  PieChart,
  ChartNoAxesColumn,
  House,
  Flower2,
  Bed,
  Users,
  TrendingUp,
  SquarePlay,
  MessagesSquare,
  type LucideIcon,
} from 'lucide-react'

export type Project = {
  id: string
  index: string
  title: string
  category: string
  body: string
  groups: string[]
  icon: LucideIcon
}

export const filters = ['ALL', 'WEB3', 'BUSINESS', 'GROWTH', 'CONTENT'] as const
export type Filter = (typeof filters)[number]

export const projects: Project[] = [
  {
    id: 'crypto-duel-generator',
    index: '01',
    title: 'Crypto Duel Generator Bot',
    category: 'WEB3',
    body: 'Generates comparison content and engagement flows for crypto projects.',
    groups: ['WEB3'],
    icon: Package,
  },
  {
    id: 'oracle-verification',
    index: '02',
    title: 'Oracle Verification Bot',
    category: 'DATA',
    body: 'Verifies and monitors oracle data with automated checks and alerts.',
    groups: ['WEB3'],
    icon: Database,
  },
  {
    id: 'retention-alert',
    index: '03',
    title: 'Retention / Alert Bot',
    category: 'AUTOMATION',
    body: 'Tracks on-chain and community activity with real-time alerts and notifications.',
    groups: ['WEB3'],
    icon: Bell,
  },
  {
    id: 'analytics-bot',
    index: '04',
    title: 'Analytics Bot',
    category: 'ANALYTICS',
    body: 'Collects and visualizes project and campaign data for better decisions.',
    groups: ['CONTENT', 'GROWTH'],
    icon: PieChart,
  },
  {
    id: 'kol-reporting',
    index: '05',
    title: 'KOL Reporting Bot',
    category: 'REPORTING',
    body: 'Automates KOL tracking, campaign reporting and performance insights.',
    groups: ['GROWTH'],
    icon: ChartNoAxesColumn,
  },
  {
    id: 'dental-clinic',
    index: '06',
    title: 'Dental Clinic Bot',
    category: 'BOOKING',
    body: 'Manages appointments, reminders and patient follow-ups.',
    groups: ['BUSINESS'],
    icon: Tooth,
  },
  {
    id: 'real-estate',
    index: '07',
    title: 'Real Estate Bot',
    category: 'LEADS',
    body: 'Captures and qualifies property leads with automated follow-ups.',
    groups: ['BUSINESS'],
    icon: House,
  },
  {
    id: 'aesthetic-clinic',
    index: '08',
    title: 'Aesthetic Clinic Bot',
    category: 'BOOKING',
    body: 'Handles inquiries, bookings and post-treatment follow-ups.',
    groups: ['BUSINESS'],
    icon: Flower2,
  },
  {
    id: 'hotel-concierge',
    index: '09',
    title: 'Hotel Concierge Bot',
    category: 'AI',
    body: 'Handles guest queries, bookings and recommendations automatically.',
    groups: ['BUSINESS'],
    icon: Bed,
  },
  {
    id: 'recruitment',
    index: '10',
    title: 'Recruitment Bot',
    category: 'AI',
    body: 'Screens candidates, schedules interviews and manages the hiring pipeline.',
    groups: ['BUSINESS'],
    icon: Users,
  },
  {
    id: 'sales-agent',
    index: '11',
    title: 'Sales Agent Bot',
    category: 'AUTOMATION',
    body: 'Automates outreach, follow-ups and lead qualification for sales teams.',
    groups: ['BUSINESS', 'GROWTH'],
    icon: TrendingUp,
  },
  {
    id: 'ugc-ad-generator',
    index: '12',
    title: 'UGC Ad Generator',
    category: 'AI',
    body: 'Generates UGC ad concepts and scripts for paid campaigns.',
    groups: ['CONTENT'],
    icon: SquarePlay,
  },
  {
    id: 'faq-bot',
    index: '13',
    title: 'FAQ Bot',
    category: 'AI',
    body: 'Answers customer questions with smart, contextual responses.',
    groups: ['BUSINESS', 'CONTENT'],
    icon: MessagesSquare,
  },
]
