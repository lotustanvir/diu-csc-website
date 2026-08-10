import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  AlertTriangle,
  Building2,
  FileText,
  GraduationCap,
  Landmark,
  PhoneCall,
  ShieldAlert,
  Siren,
  Users,
} from 'lucide-react'

const tiers = [
  {
    tier: 'TIER 1',
    name: 'Campus CSR',
    price: 'Free for DIU Students',
    icon: GraduationCap,
    accent: 'border-emerald-400/40',
    badge: 'bg-emerald-400/10 text-emerald-300 border-emerald-400/30',
    points: [
      'Harassment & cyberbullying support',
      'Recover hacked DIU accounts',
      'Safe-space walk-in counseling',
      '48-hour turnaround',
    ],
  },
  {
    tier: 'TIER 2',
    name: 'Premium B2C Support',
    price: 'BDT 1,000 – 5,000 / Incident',
    icon: Users,
    accent: 'border-amber-400/40',
    badge: 'bg-amber-400/10 text-amber-300 border-amber-400/30',
    points: [
      'Influencer & public figure protection',
      'Social media account recovery',
      'Device sanitization & malware cleanup',
      'Evidence kits for legal escalation',
    ],
  },
  {
    tier: 'TIER 3',
    name: 'Corporate B2B Retainer',
    price: 'Monthly Retainer · 2-Hour SLA',
    icon: Building2,
    accent: 'border-red-400/40',
    badge: 'bg-red-400/10 text-red-300 border-red-400/30',
    points: [
      'Email compromise & ransomware response',
      '2-hour SLA incident triage',
      'Employee awareness sessions',
      'Quarterly security health reports',
    ],
  },
]

const agencies = [
  { icon: ShieldAlert, label: 'CID Cyber Police' },
  { icon: Landmark, label: 'BTRC' },
]

export default function ServicesSection() {
  return (
    <section id="care-desk" className="relative px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl border border-red-500/20 bg-gradient-to-br from-red-950/50 via-night-900 to-amber-950/30 p-8 sm:p-14"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(248,113,113,0.12),transparent_50%)]" />

          <div className="relative mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-red-400/30 bg-red-400/10 px-4 py-1.5 font-mono text-xs font-semibold tracking-widest text-red-300">
              <Siren className="h-4 w-4" />
              {'// 24/7 REAL INCIDENT SUPPORT'}
            </span>
            <h2 className="mt-5 font-mono text-3xl font-bold text-white sm:text-4xl">
              DIU Cyber Care Desk{' '}
              <span className="bg-gradient-to-r from-red-400 to-amber-400 bg-clip-text text-transparent">
                — Real Incident Support
              </span>
            </h2>
            <p className="mt-4 text-slate-400">
              Not just training — when a cybercrime happens, real humans answer.
              Three tiers of support covering students, the public, and businesses.
            </p>
          </div>

          <div className="relative mt-12 grid gap-6 md:grid-cols-3">
            {tiers.map((tier, i) => (
              <motion.div
                key={tier.tier}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.55, delay: i * 0.12, ease: 'easeOut' }}
                whileHover={{ y: -6 }}
                className={`glass flex flex-col rounded-2xl border-t-4 ${tier.accent} p-6 will-change-transform`}
              >
                <div className="flex items-center justify-between">
                  <span className={`rounded-full border px-3 py-1 font-mono text-[11px] font-semibold tracking-widest ${tier.badge}`}>
                    {tier.tier}
                  </span>
                  <tier.icon className="h-6 w-6 text-slate-300" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-white">{tier.name}</h3>
                <p className="mt-1 text-sm font-semibold text-cyber-400">{tier.price}</p>
                <ul className="mt-5 flex-1 space-y-2.5">
                  {tier.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2 text-sm text-slate-300"
                    >
                      <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" />
                      {point}
                    </li>
                  ))}
                </ul>
                {tier.tier === 'TIER 1' && (
                  <Link
                    to="/complaint"
                    className="group/complaint mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-cyber-400/40 bg-cyber-400/10 px-5 py-3 text-sm font-semibold text-cyber-300 transition-all hover:bg-gradient-to-r hover:from-cyber-400 hover:to-electric-500 hover:text-night-950 hover:shadow-[0_0_24px_rgba(0,240,255,0.35)]"
                  >
                    <FileText className="h-4 w-4 transition-transform group-hover/complaint:-rotate-6" />
                    Submit a Complaint
                  </Link>
                )}
              </motion.div>
            ))}
          </div>

          <div className="relative mt-12 flex flex-col items-center gap-6">
            <a
              href="mailto:cybercaredesk@diu.edu.bd?subject=Incident%20Report"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-red-500 to-amber-500 px-8 py-4 font-semibold text-white shadow-[0_0_36px_rgba(239,68,68,0.35)] transition-transform hover:scale-[1.03]"
            >
              <PhoneCall className="h-5 w-5" />
              Report an Incident
            </a>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <span className="text-xs font-medium uppercase tracking-widest text-slate-500">
                Liaising with:
              </span>
              {agencies.map((agency) => (
                <span
                  key={agency.label}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-slate-300"
                >
                  <agency.icon className="h-4 w-4 text-red-300" />
                  {agency.label}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
