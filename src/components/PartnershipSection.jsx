import { motion, AnimatePresence } from 'framer-motion'
import {
  Briefcase,
  Building2,
  Handshake,
  Landmark,
  Network,
  Wallet,
  X,
} from 'lucide-react'
import { useEffect, useState } from 'react'

const partners = [
  {
    initials: 'DG',
    name: 'Daffodil Group',
    role: 'Group / Industry Partner',
    icon: Building2,
    gradient: 'from-electric-500 to-violet-500',
    image: '/daffodil_grp.jpg',
    description:
      'Provides a broad industry ecosystem, organizational expertise, and strategic support for cybersecurity education, innovation, and workforce development.',
    highlights: [
      'Largest IT conglomerate ecosystem in Bangladesh',
      'Strategic support for cybersecurity education and innovation',
      'Industry exposure opportunities for students and faculty',
      'Workforce development across the tech landscape',
    ],
  },
  {
    initials: 'SJ',
    name: 'Skill Jobs',
    role: 'Placement & Business Development Engine',
    icon: Briefcase,
    gradient: 'from-cyber-400 to-emerald-500',
    image: '/skill_jobs.png',
    description:
      'Drives recruitment pipelines, HR mock interviews, corporate relationships, and the demand side of every program we design.',
    highlights: [
      'Recruitment pipeline for graduating cybersecurity talent',
      'HR mock interview programs and career readiness',
      'Corporate relationship management with hiring partners',
      'Demand-side engine for every program we design',
    ],
  },
  {
    initials: 'ST',
    name: 'Smart Technologies (BD) Ltd. / Sophos',
    role: 'Enterprise Infrastructure & Certification',
    icon: Network,
    gradient: 'from-amber-400 to-red-500',
    image: '/smart_technology.png',
    description:
      'Official Sophos Education Partner delivering vendor hardware labs, enterprise-grade certifications, and channel partner placements.',
    highlights: [
      'Official Sophos Education Partner',
      'Vendor hardware labs for hands-on training',
      'Enterprise-grade cybersecurity certifications',
      'Channel partner placement opportunities',
    ],
  },
  {
    initials: 'UP',
    name: 'Upay',
    role: 'Digital Financial Services Partner',
    icon: Wallet,
    gradient: 'from-emerald-400 to-teal-500',
    image: '/upay.png',
    description:
      'Supports secure digital financial services and creates opportunities for cybersecurity awareness, digital security, and industry collaboration.',
    highlights: [
      'Secure digital financial services ecosystem',
      'Cybersecurity awareness and digital security programs',
      'Industry collaboration opportunities',
      'Financial services exposure for students',
    ],
  },
  {
    initials: 'UCB',
    name: 'United Commercial Bank (UCB)',
    role: 'Banking & Financial Services Partner',
    icon: Landmark,
    gradient: 'from-blue-500 to-indigo-500',
    image: '/ucb.jpg',
    description:
      'Connects cybersecurity with the banking and financial-services ecosystem, supporting industry exposure, security awareness, and professional development.',
    highlights: [
      'Bridge between cybersecurity and banking ecosystem',
      'Industry exposure for students and faculty',
      'Security awareness and professional development',
      'Financial-services sector networking',
    ],
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
  const [selected, setSelected] = useState(null)

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setSelected(null)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  useEffect(() => {
    document.body.style.overflow = selected ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [selected])

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
              onClick={() => setSelected(partner)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') setSelected(partner)
              }}
              className={`glass group relative flex cursor-pointer flex-col overflow-hidden rounded-2xl p-7 will-change-transform ${cardWidth}`}
            >
              <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-cyber-400/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="flex items-center gap-4">
                {partner.image ? (
                  <img
                    src={partner.image}
                    alt={`${partner.name} logo`}
                    className="h-14 w-14 shrink-0 rounded-2xl object-contain bg-white p-1.5 shadow-lg"
                  />
                ) : (
                  <span
                    className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br font-mono text-sm font-bold text-white shadow-lg ${partner.gradient}`}
                  >
                    {partner.initials}
                  </span>
                )}
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
              <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-cyber-400 opacity-0 transition-opacity group-hover:opacity-100">
                Click for details →
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

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ opacity: 0, y: 32, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 32, scale: 0.96 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              onClick={(e) => e.stopPropagation()}
              className="glass relative w-full max-w-lg overflow-hidden rounded-3xl p-8"
            >
              <div
                className={`pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-cyber-400/60 to-transparent`}
              />
              <button
                onClick={() => setSelected(null)}
                aria-label="Close partner details"
                className="absolute right-4 top-4 rounded-lg p-2 text-slate-400 transition-colors hover:bg-white/10 hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="flex items-center gap-5 pr-10">
                {selected.image ? (
                  <img
                    src={selected.image}
                    alt={`${selected.name} logo`}
                    className="h-20 w-20 shrink-0 rounded-2xl bg-white object-contain p-2 shadow-lg"
                  />
                ) : (
                  <span
                    className={`flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br font-mono text-xl font-bold text-white shadow-lg ${selected.gradient}`}
                  >
                    {selected.initials}
                  </span>
                )}
                <div>
                  <h3 className="text-xl font-bold leading-snug text-white">
                    {selected.name}
                  </h3>
                  <p className="mt-1.5 text-xs font-semibold uppercase tracking-wider text-cyber-400">
                    {selected.role}
                  </p>
                </div>
              </div>

              <p className="mt-6 text-sm leading-relaxed text-slate-300">
                {selected.description}
              </p>

              <div className="mt-6">
                <p className="font-mono text-xs font-bold tracking-widest text-cyber-300">
                  // KEY CONTRIBUTIONS
                </p>
                <ul className="mt-3 space-y-2.5">
                  {selected.highlights.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm text-slate-400"
                    >
                      <Handshake className="mt-0.5 h-4 w-4 shrink-0 text-cyber-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
