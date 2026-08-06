import { motion } from 'framer-motion'
import {
  ArrowRight,
  Award,
  Eye,
  Fingerprint,
  ShieldCheck,
  Swords,
  Trophy,
} from 'lucide-react'

const pipeline = [
  { label: '48-Hour Online Qualifiers', icon: Eye },
  { label: '2-Week Mentorship', icon: Fingerprint },
  { label: '24-Hour Grand Finale at DIU', icon: Trophy },
]

const tracks = [
  { label: 'Blue Team', sub: 'Defensive', icon: ShieldCheck },
  { label: 'Red Team', sub: 'Offensive', icon: Swords },
  { label: 'Digital Forensics & OSINT', sub: 'Investigation', icon: Eye },
]

export default function OlympiadBanner() {
  return (
    <section id="ncso" className="relative px-4 py-24 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.65 }}
        className="bg-circuit relative overflow-hidden rounded-3xl border border-cyber-400/20 bg-night-850 p-8 sm:p-14"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(0,240,255,0.12),transparent_55%)]" />

        <div className="relative mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-cyber-400/30 bg-cyber-400/10 px-4 py-1.5 font-mono text-xs font-semibold tracking-widest text-cyber-300">
            <Award className="h-4 w-4" />
            {'// NATIONAL CHAMPIONSHIP'}
          </span>
          <h2 className="mt-5 font-mono text-3xl font-bold leading-tight text-white sm:text-4xl">
            Bangladesh National Cyber Security{' '}
            <span className="bg-gradient-to-r from-cyber-400 to-electric-400 bg-clip-text text-transparent">
              Olympiad (NCSO)
            </span>
          </h2>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            {pipeline.map((step, i) => (
              <div key={step.label} className="flex items-center gap-4">
                <div className="glass flex items-center gap-3 rounded-xl px-5 py-3.5">
                  <step.icon className="h-5 w-5 shrink-0 text-cyber-400" />
                  <span className="text-sm font-semibold text-white">{step.label}</span>
                </div>
                {i < pipeline.length - 1 && (
                  <ArrowRight className="hidden h-5 w-5 shrink-0 text-cyber-400/60 sm:block" />
                )}
              </div>
            ))}
          </div>

          <div className="mt-10 inline-flex flex-col items-center gap-2 rounded-2xl border border-amber-400/30 bg-gradient-to-r from-amber-500/10 to-amber-400/5 px-8 py-5">
            <span className="font-mono text-2xl font-bold text-amber-300 sm:text-3xl">
              BDT 50,000
            </span>
            <span className="text-sm font-medium text-amber-100/80">
              + Direct Job Offers for Champions
            </span>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            {tracks.map((track) => (
              <span
                key={track.label}
                className="glass inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white"
              >
                <track.icon className="h-4 w-4 text-cyber-400" />
                {track.label}
                <span className="text-xs font-normal text-slate-400">({track.sub})</span>
              </span>
            ))}
          </div>

          <div className="mt-10">
            <a
              href="mailto:ncso@diu.edu.bd?subject=NCSO%202026%20Registration"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyber-400 to-electric-500 px-8 py-4 font-semibold text-night-950 shadow-[0_0_36px_rgba(0,240,255,0.35)] transition-transform hover:scale-[1.03]"
            >
              Register for NCSO 2026
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
