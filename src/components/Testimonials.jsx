import { useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2, Quote, Send, Star } from 'lucide-react'

const STORAGE_KEY = 'diu-csc-visitor-feedback'

const GRADIENTS = [
  'from-cyber-400 to-electric-500',
  'from-violet-400 to-fuchsia-500',
  'from-amber-400 to-red-500',
  'from-emerald-400 to-teal-500',
]

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

function initialsOf(name) {
  const words = name.trim().split(/\s+/)
  return words
    .slice(0, 2)
    .map((word) => word[0])
    .join('')
    .toUpperCase()
}

const inputClass =
  'w-full rounded-xl border border-white/10 bg-night-900/60 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition-colors focus:border-cyber-400/60 focus:ring-1 focus:ring-cyber-400/40'

export default function Testimonials() {
  const [visitorFeedback, setVisitorFeedback] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
    } catch {
      return []
    }
  })
  const [form, setForm] = useState({ name: '', role: '', rating: 5, message: '' })
  const [submitted, setSubmitted] = useState(false)

  const items = [...testimonials, ...visitorFeedback]

  function handleSubmit(e) {
    e.preventDefault()
    const name = form.name.trim()
    const message = form.message.trim()
    if (!name || !message) return

    const entry = {
      name,
      role: form.role.trim() || 'Website Visitor',
      source: 'Visitor Feedback',
      initials: initialsOf(name),
      gradient: GRADIENTS[visitorFeedback.length % GRADIENTS.length],
      quote: message,
      rating: form.rating,
    }

    // Backend-ready submission point: when the feedback API exists,
    // POST `entry` here, e.g.:
    // fetch('/api/feedback', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(entry),
    // })

    const next = [entry, ...visitorFeedback]
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
    setVisitorFeedback(next)
    setForm({ name: '', role: '', rating: 5, message: '' })
    setSubmitted(true)
  }

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
          {[...items, ...items].map((t, i) => (
            <article
              key={`${t.name}-${i}`}
              className="glass flex w-[340px] shrink-0 flex-col rounded-2xl p-7 sm:w-[420px]"
            >
              <div className="flex items-center justify-between">
                <Quote className="h-7 w-7 text-cyber-400/60" />
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star
                      key={s}
                      className={`h-4 w-4 ${
                        s < (t.rating ?? 5)
                          ? 'fill-amber-400 text-amber-400'
                          : 'text-slate-600'
                      }`}
                    />
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

      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6 }}
        className="relative mx-auto mt-16 max-w-3xl"
      >
        <div className="glass relative overflow-hidden rounded-3xl p-8 sm:p-10">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-cyber-400/60 to-transparent" />

          <p className="font-mono text-sm font-medium tracking-[0.3em] text-cyber-400">
            {'// SHARE YOUR EXPERIENCE'}
          </p>
          <h3 className="mt-3 font-mono text-2xl font-bold text-white">
            Leave Your Feedback
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-400">
            Tell us how our courses, Cyber Care Desk, or services helped you — your
            words join the voices above and guide us forward.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="feedback-name"
                  className="mb-2 block font-mono text-xs font-bold tracking-widest text-slate-400"
                >
                  NAME
                </label>
                <input
                  id="feedback-name"
                  type="text"
                  required
                  placeholder="Your name"
                  value={form.name}
                  onChange={(e) => {
                    setForm({ ...form, name: e.target.value })
                    setSubmitted(false)
                  }}
                  className={inputClass}
                />
              </div>
              <div>
                <label
                  htmlFor="feedback-role"
                  className="mb-2 block font-mono text-xs font-bold tracking-widest text-slate-400"
                >
                  ROLE / ORGANIZATION (OPTIONAL)
                </label>
                <input
                  id="feedback-role"
                  type="text"
                  placeholder="e.g. Student, SOC Analyst, Business Owner"
                  value={form.role}
                  onChange={(e) => {
                    setForm({ ...form, role: e.target.value })
                    setSubmitted(false)
                  }}
                  className={inputClass}
                />
              </div>
            </div>

            <div>
              <span className="mb-2 block font-mono text-xs font-bold tracking-widest text-slate-400">
                RATING
              </span>
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, s) => (
                  <button
                    key={s}
                    type="button"
                    aria-label={`Rate ${s + 1} star${s > 0 ? 's' : ''}`}
                    aria-pressed={form.rating === s + 1}
                    onClick={() => {
                      setForm({ ...form, rating: s + 1 })
                      setSubmitted(false)
                    }}
                    className="transition-transform hover:scale-110"
                  >
                    <Star
                      className={`h-6 w-6 transition-colors ${
                        s < form.rating
                          ? 'fill-amber-400 text-amber-400'
                          : 'text-slate-600'
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label
                htmlFor="feedback-message"
                className="mb-2 block font-mono text-xs font-bold tracking-widest text-slate-400"
              >
                FEEDBACK
              </label>
              <textarea
                id="feedback-message"
                required
                rows={4}
                placeholder="Tell us about your experience with our services..."
                value={form.message}
                onChange={(e) => {
                  setForm({ ...form, message: e.target.value })
                  setSubmitted(false)
                }}
                className={`${inputClass} resize-y`}
              />
            </div>

            <button
              type="submit"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyber-400 to-electric-500 px-8 py-4 font-semibold text-night-950 shadow-[0_0_36px_rgba(0,240,255,0.35)] transition-transform hover:scale-[1.02] sm:w-auto"
            >
              Share Feedback
              <Send className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </button>

            {submitted && (
              <p className="flex items-center gap-2 text-sm font-medium text-emerald-400">
                <CheckCircle2 className="h-4 w-4" />
                Thank you — your feedback is now visible in the voices above.
              </p>
            )}
          </form>
        </div>
      </motion.div>
    </section>
  )
}
