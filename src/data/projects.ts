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
  Utensils,
  Clapperboard,
  Scale,
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
    id: 'ai-restaurant-booking-agent',
    index: '01',
    title: 'AI Restaurant Booking Agent',
    category: 'BUSINESS / AI AUTOMATION',
    body: 'AI restaurant assistant for reservations, availability checks, cancellations, and customer conversations.',
    groups: ['BUSINESS'],
    icon: Utensils,
  },
  {
    id: 'ai-video-production-agent',
    index: '02',
    title: 'AI Video Production Agent',
    category: 'CONTENT / AI AUTOMATION',
    body: 'Automated AI video creation, editing, and YouTube publishing through an end-to-end workflow.',
    groups: ['CONTENT'],
    icon: Clapperboard,
  },
  {
    id: 'ai-legal-email-triage-agent',
    index: '03',
    title: 'AI Legal Email Triage Agent',
    category: 'BUSINESS / AI AUTOMATION',
    body: 'AI-powered email and attachment processing, request classification, and intelligent routing for law firms.',
    groups: ['BUSINESS'],
    icon: Scale,
  },
  {
    id: 'crypto-duel-generator',
    index: '04',
    title: 'Crypto Duel Generator Bot',
    category: 'WEB3',
    body: 'Generates comparison content and engagement flows for crypto projects.',
    groups: ['WEB3'],
    icon: Package,
  },
  {
    id: 'oracle-verification',
    index: '05',
    title: 'Oracle Verification Bot',
    category: 'DATA',
    body: 'Verifies and monitors oracle data with automated checks and alerts.',
    groups: ['WEB3'],
    icon: Database,
  },
  {
    id: 'retention-alert',
    index: '06',
    title: 'Retention / Alert Bot',
    category: 'AUTOMATION',
    body: 'Tracks on-chain and community activity with real-time alerts and notifications.',
    groups: ['WEB3'],
    icon: Bell,
  },
  {
    id: 'analytics-bot',
    index: '07',
    title: 'Analytics Bot',
    category: 'ANALYTICS',
    body: 'Collects and visualizes project and campaign data for better decisions.',
    groups: ['CONTENT', 'GROWTH'],
    icon: PieChart,
  },
  {
    id: 'kol-reporting',
    index: '08',
    title: 'KOL Reporting Bot',
    category: 'REPORTING',
    body: 'Automates KOL tracking, campaign reporting and performance insights.',
    groups: ['GROWTH'],
    icon: ChartNoAxesColumn,
  },
  {
    id: 'dental-clinic',
    index: '09',
    title: 'Dental Clinic Bot',
    category: 'BOOKING',
    body: 'Manages appointments, reminders and patient follow-ups.',
    groups: ['BUSINESS'],
    icon: Tooth,
  },
  {
    id: 'real-estate',
    index: '10',
    title: 'Real Estate Bot',
    category: 'LEADS',
    body: 'Captures and qualifies property leads with automated follow-ups.',
    groups: ['BUSINESS'],
    icon: House,
  },
  {
    id: 'aesthetic-clinic',
    index: '11',
    title: 'Aesthetic Clinic Bot',
    category: 'BOOKING',
    body: 'Handles inquiries, bookings and post-treatment follow-ups.',
    groups: ['BUSINESS'],
    icon: Flower2,
  },
  {
    id: 'hotel-concierge',
    index: '12',
    title: 'Hotel Concierge Bot',
    category: 'AI',
    body: 'Handles guest queries, bookings and recommendations automatically.',
    groups: ['BUSINESS'],
    icon: Bed,
  },
  {
    id: 'recruitment',
    index: '13',
    title: 'Recruitment Bot',
    category: 'AI',
    body: 'Screens candidates, schedules interviews and manages the hiring pipeline.',
    groups: ['BUSINESS'],
    icon: Users,
  },
  {
    id: 'sales-agent',
    index: '14',
    title: 'Sales Agent Bot',
    category: 'AUTOMATION',
    body: 'Automates outreach, follow-ups and lead qualification for sales teams.',
    groups: ['BUSINESS', 'GROWTH'],
    icon: TrendingUp,
  },
  {
    id: 'ugc-ad-generator',
    index: '15',
    title: 'UGC Ad Generator',
    category: 'AI',
    body: 'Generates UGC ad concepts and scripts for paid campaigns.',
    groups: ['CONTENT'],
    icon: SquarePlay,
  },
  {
    id: 'faq-bot',
    index: '16',
    title: 'FAQ Bot',
    category: 'AI',
    body: 'Answers customer questions with smart, contextual responses.',
    groups: ['BUSINESS', 'CONTENT'],
    icon: MessagesSquare,
  },
]