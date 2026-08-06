import { motion } from 'framer-motion'
import { Quote, Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Rafiul Karim',
    role: 'L1 SOC Analyst, Bank SOC',
    source: 'CCSIS Graduate',
    initials: 'RK',
    gradient: 'from-cyber-400 to-electric-500',
    quote:
      'The 24-week CCSIS apprenticeship made me job-ready before I even applied. My first VAPT report went to a real CISO. I now work in a bank SOC — a role I only dreamed about two years ago.',
  },
  {
    name: 'Tasnim Ahmed',
    role: 'Founder, SME Textile Exporter',
    source: 'Cyber Care Desk Client',
    initials: 'TA',
    gradient: 'from-amber-400 to-red-500',
    quote:
      'A spoofed email almost cost us our biggest shipment. The Cyber Care Desk responded within hours under our retainer, contained the breach, and trained our whole team. They saved the business.',
  },
  {
    name: 'Farzana Haque',
    role: 'HR Lead, Smart Technologies (BD) Ltd.',
    source: 'Placement Partner',
    initials: 'FH',
    gradient: 'from-violet-400 to-fuchsia-500',
    quote:
      'Sophos-certified graduates from DIU CSC arrive with lab time on real XGS firewalls — not just theory. Their placement quality is why we keep opening hiring pipelines for every cohort.',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative overflow-hidden px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="font-mono text-sm font-medium tracking-[0.3em] text-cyber-400">
            {'// VOICES'}
          </p>
          <h2 className="mt-3 font-mono text-3xl font-bold text-white sm:text-4xl">
            From the Frontline
          </h2>
        </motion.div>
      </div>

      <div
        className="relative mt-12 overflow-hidden"
        style={{
          maskImage:
            'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
          WebkitMaskImage:
            'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
        }}
      >
        <div className="marquee-track flex w-max gap-6 py-2">
          {[...testimonials, ...testimonials].map((t, i) => (
            <article
              key={`${t.name}-${i}`}
              className="glass flex w-[340px] shrink-0 flex-col rounded-2xl p-7 sm:w-[420px]"
            >
              <div className="flex items-center justify-between">
                <Quote className="h-7 w-7 text-cyber-400/60" />
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>
              <p className="mt-5 flex-1 text-sm leading-relaxed text-slate-300">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-3 border-t border-white/5 pt-5">
                <span
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br font-mono text-xs font-bold text-white ${t.gradient}`}
                >
                  {t.initials}
                </span>
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-white">{t.name}</p>
                  <p className="truncate text-xs text-slate-400">
                    {t.role} · <span className="text-cyber-400">{t.source}</span>
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
