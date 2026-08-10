import { motion } from 'framer-motion'
import {
  Briefcase,
  Building2,
  Handshake,
  Landmark,
  Network,
  Wallet,
} from 'lucide-react'

const partners = [
  {
    initials: 'DG',
    name: 'Daffodil Group',
    role: 'Group / Industry Partner',
    icon: Building2,
    gradient: 'from-electric-500 to-violet-500',
    description:
      'Provides a broad industry ecosystem, organizational expertise, and strategic support for cybersecurity education, innovation, and workforce development.',
  },
  {
    initials: 'SJ',
    name: 'Skill Jobs',
    role: 'Placement & Business Development Engine',
    icon: Briefcase,
    gradient: 'from-cyber-400 to-emerald-500',
    description:
      'Drives recruitment pipelines, HR mock interviews, corporate relationships, and the demand side of every program we design.',
  },
  {
    initials: 'ST',
    name: 'Smart Technologies (BD) Ltd. / Sophos',
    role: 'Enterprise Infrastructure & Certification',
    icon: Network,
    gradient: 'from-amber-400 to-red-500',
    description:
      'Official Sophos Education Partner delivering vendor hardware labs, enterprise-grade certifications, and channel partner placements.',
  },
  {
    initials: 'UP',
    name: 'Upay',
    role: 'Digital Financial Services Partner',
    icon: Wallet,
    gradient: 'from-emerald-400 to-teal-500',
    description:
      'Supports secure digital financial services and creates opportunities for cybersecurity awareness, digital security, and industry collaboration.',
  },
  {
    initials: 'UCB',
    name: 'United Commercial Bank (UCB)',
    role: 'Banking & Financial Services Partner',
    icon: Landmark,
    gradient: 'from-blue-500 to-indigo-500',
    description:
      'Connects cybersecurity with the banking and financial-services ecosystem, supporting industry exposure, security awareness, and professional development.',
  },
]

const wins = [
  { label: 'Win 1', text: 'Students gain practical cybersecurity skills and industry exposure.' },
  { label: 'Win 2', text: 'Industry gains access to a skilled and security-aware talent pipeline.' },
  {
    label: 'Win 3',
    text: 'The ecosystem connects education, technology, finance, cybersecurity, and career development.',
  },
]

const cardWidth =
  'w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]'

export default function PartnershipSection() {
  return (
    <section id="about" className="relative px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="font-mono text-sm font-medium tracking-[0.3em] text-cyber-400">
            {'// PARTNERS'}
          </p>
          <h2 className="mt-3 font-mono text-3xl font-bold text-white sm:text-4xl">
            Our Strategic Alliance
          </h2>
          <p className="mt-4 text-slate-400">
            Five partners. One ecosystem — connecting education, industry,
            technology, finance, and careers.
          </p>
        </motion.div>

        <div className="mt-14 flex flex-wrap justify-center gap-6">
          {partners.map((partner, i) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: i * 0.12, ease: 'easeOut' }}
              whileHover={{ y: -6 }}
              className={`glass group relative flex flex-col overflow-hidden rounded-2xl p-7 will-change-transform ${cardWidth}`}
            >
              <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-cyber-400/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="flex items-center gap-4">
                <span
                  className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br font-mono text-sm font-bold text-white shadow-lg ${partner.gradient}`}
                >
                  {partner.initials}
                </span>
                <div>
                  <h3 className="font-semibold leading-snug text-white">
                    {partner.name}
                  </h3>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-cyber-400">
                    {partner.role}
                  </p>
                </div>
              </div>
              <p className="mt-5 text-sm leading-relaxed text-slate-400">
                {partner.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55 }}
          className="mt-10 grid gap-4 rounded-2xl border border-cyber-400/20 bg-cyber-400/5 p-8 sm:grid-cols-3"
        >
          {wins.map((win) => (
            <div key={win.label} className="flex items-start gap-3">
              <Handshake className="mt-0.5 h-5 w-5 shrink-0 text-cyber-400" />
              <div>
                <p className="font-mono text-xs font-bold tracking-widest text-cyber-300">
                  {win.label.toUpperCase()}
                </p>
                <p className="mt-1 text-sm text-slate-300">{win.text}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
