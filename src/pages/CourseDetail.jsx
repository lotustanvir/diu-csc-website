import { Link, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  BookOpen,
  CheckCircle2,
  ChevronRight,
  Clock,
  Cpu,
  Crosshair,
  HeartPulse,
  Network,
  Server,
  Shield,
  Target,
  Terminal,
  UserCheck,
  Zap,
} from 'lucide-react'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import { getCourse } from '../data/courses.js'

const iconMap = {
  Shield,
  Server,
  Zap,
  HeartPulse,
  Network,
  Target,
  Crosshair,
}

const colorMap = {
  emerald: { line: 'from-emerald-400 to-emerald-600', text: 'text-emerald-400', ring: 'hover:shadow-emerald-500/20' },
  blue: { line: 'from-blue-400 to-blue-600', text: 'text-blue-400', ring: 'hover:shadow-blue-500/20' },
  violet: { line: 'from-violet-400 to-violet-600', text: 'text-violet-400', ring: 'hover:shadow-violet-500/20' },
  amber: { line: 'from-amber-400 to-amber-600', text: 'text-amber-400', ring: 'hover:shadow-amber-500/20' },
  cyan: { line: 'from-cyan-400 to-cyan-600', text: 'text-cyan-400', ring: 'hover:shadow-cyan-500/20' },
  rose: { line: 'from-rose-400 to-rose-600', text: 'text-rose-400', ring: 'hover:shadow-rose-500/20' },
  red: { line: 'from-red-400 to-red-600', text: 'text-red-400', ring: 'hover:shadow-red-500/20' },
}

const levelMap = {
  Beginner: 'bg-emerald-400/10 text-emerald-300 border-emerald-400/30',
  Intermediate: 'bg-sky-400/10 text-sky-300 border-sky-400/30',
  Professional: 'bg-cyan-400/10 text-cyan-300 border-cyan-400/30',
  Advanced: 'bg-violet-400/10 text-violet-300 border-violet-400/30',
  Expert: 'bg-red-400/10 text-red-300 border-red-400/30',
}

function EnrollLink({ course, className }) {
  const subject = encodeURIComponent(`Enrollment: ${course.title}`)
  return (
    <a
      href={`mailto:admissions@diu.edu.bd?subject=${subject}`}
      className={className}
    >
      Enroll Now
      <ArrowRight className="h-5 w-5" />
    </a>
  )
}

function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-60px' },
    transition: { duration: 0.55, delay, ease: 'easeOut' },
  }
}

export default function CourseDetail() {
  const { id } = useParams()
  const course = getCourse(id)

  if (!course) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-night-900 px-6 text-center">
        <p className="font-mono text-sm tracking-[0.3em] text-cyber-400">
          {'// 404'}
        </p>
        <h1 className="mt-4 font-mono text-3xl font-bold text-white">
          Course Not Found
        </h1>
        <Link
          to="/#courses"
          className="mt-8 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyber-400 to-electric-500 px-6 py-3 font-semibold text-night-950"
        >
          <ArrowLeft className="h-5 w-5" />
          Back to Courses
        </Link>
      </div>
    )
  }

  const Icon = iconMap[course.icon] || Shield
  const color = colorMap[course.color] || colorMap.cyan
  const level = levelMap[course.level] || levelMap.Beginner

  return (
    <div className="min-h-screen bg-night-900 pb-28 lg:pb-0">
      <Navbar />

      <section className="bg-circuit relative overflow-hidden pt-32">
        <div className="absolute inset-0 bg-gradient-to-b from-night-950/80 via-transparent to-night-900" />
        <div className="relative mx-auto max-w-7xl px-4 pb-14 pt-10 sm:px-6">
          <Link
            to="/#courses"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition-colors hover:text-cyber-300"
          >
            <ArrowLeft className="h-4 w-4" />
            All Courses
          </Link>

          <div className="mt-8 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <span
                className={`flex h-14 w-14 items-center justify-center rounded-2xl border bg-night-800/80 backdrop-blur ${color.text} border-white/10`}
              >
                <Icon className="h-7 w-7" />
              </span>
              <p className="mt-5 font-mono text-sm font-medium tracking-widest text-cyber-400">
                {course.subtitle}
              </p>
              <h1 className="mt-2 font-mono text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                {course.title}
              </h1>
              <div className="mt-5 flex flex-wrap items-center gap-3">
                <span
                  className={`rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-wider ${level}`}
                >
                  {course.levelTag}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300">
                  <Clock className="h-3.5 w-3.5 text-cyber-400" />
                  {course.duration}
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-400">
                  {course.ratio}
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="shrink-0"
            >
              <EnrollLink
                course={course}
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyber-400 to-electric-500 px-8 py-4 font-semibold text-night-950 shadow-[0_0_36px_rgba(0,240,255,0.35)] transition-transform hover:scale-[1.03]"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[340px_1fr]">
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <motion.div {...fadeUp()} className="glass rounded-2xl p-6">
              <h2 className="font-mono text-sm font-bold tracking-widest text-cyber-400">
                COURSE OVERVIEW
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-300">
                {course.description}
              </p>
              <dl className="mt-6 space-y-4">
                {[
                  { label: 'Duration', value: course.duration },
                  { label: 'Format', value: course.ratio },
                  { label: 'Audience', value: course.audience },
                  { label: 'Outcome', value: course.outcome },
                ].map((meta) => (
                  <div key={meta.label}>
                    <dt className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                      {meta.label}
                    </dt>
                    <dd className="mt-1 text-sm font-medium text-slate-200">
                      {meta.value}
                    </dd>
                  </div>
                ))}
              </dl>
              <div className="mt-6 border-t border-white/5 pt-5">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                  Prerequisites
                </p>
                <ul className="mt-3 space-y-2">
                  {course.prerequisites.map((prereq) => (
                    <li
                      key={prereq}
                      className="flex items-start gap-2 text-sm text-slate-300"
                    >
                      <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-cyber-400" />
                      {prereq}
                    </li>
                  ))}
                </ul>
              </div>
              <EnrollLink
                course={course}
                className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyber-400 to-electric-500 px-6 py-3.5 font-semibold text-night-950 transition-transform hover:scale-[1.02]"
              />
            </motion.div>
          </aside>

          <div className="space-y-14">
            <motion.section {...fadeUp()}>
              <h2 className="font-mono text-2xl font-bold text-white">
                What You&apos;ll Learn
              </h2>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {course.learning.map((item) => (
                  <div
                    key={item}
                    className="glass flex items-start gap-3 rounded-xl px-4 py-3.5"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyber-400" />
                    <span className="text-sm leading-relaxed text-slate-300">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </motion.section>

            <motion.section {...fadeUp(0.1)} id="syllabus">
              <h2 className="font-mono text-2xl font-bold text-white">
                Program Structure
              </h2>
              <div className="mt-6 space-y-5">
                {course.modules.map((module, i) => (
                  <motion.div
                    key={module.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    className="glass overflow-hidden rounded-2xl"
                  >
                    <div className="flex items-center justify-between gap-4 border-b border-white/5 px-6 py-4">
                      <div className="flex items-center gap-3">
                        <span
                          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br font-mono text-xs font-bold text-night-950 ${color.line}`}
                        >
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <h3 className="font-semibold text-white">{module.title}</h3>
                      </div>
                      <span className="shrink-0 font-mono text-xs font-medium text-cyber-400">
                        {module.duration}
                      </span>
                    </div>
                    <ul className="grid gap-2.5 px-6 py-5 sm:grid-cols-2">
                      {module.topics.map((topic) => (
                        <li
                          key={topic}
                          className="flex items-start gap-2 text-sm text-slate-300"
                        >
                          <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-slate-500" />
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            <motion.section {...fadeUp(0.1)}>
              <h2 className="font-mono text-2xl font-bold text-white">
                Lab Infrastructure
              </h2>
              <p className="mt-3 text-sm text-slate-400">
                Every track ships with dedicated hands-on environments — no
                &ldquo;watch-only&rdquo; labs, ever.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {course.labs.map((lab) => (
                  <div
                    key={lab}
                    className="glass group flex items-start gap-3 rounded-xl px-5 py-4 transition-colors hover:border-cyber-400/40"
                  >
                    <Terminal className="mt-0.5 h-5 w-5 shrink-0 text-cyber-400" />
                    <div>
                      <p className="text-sm font-semibold text-white">{lab}</p>
                      <p className="mt-1 flex items-center gap-1 text-[11px] font-medium uppercase tracking-wider text-slate-500">
                        <Cpu className="h-3 w-3" />
                        Live Environment
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>

            <motion.section {...fadeUp(0.1)}>
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-cyber-400/15 via-night-850 to-electric-500/15 p-1">
                <div className="relative rounded-xl bg-night-850/95 p-8">
                  <div className="flex items-start gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-cyber-400 to-electric-500">
                      <BadgeCheck className="h-6 w-6 text-night-950" />
                    </span>
                    <div>
                      <h2 className="font-mono text-xl font-bold text-white">
                        Certification & Career Path
                      </h2>
                      <p className="mt-2 font-semibold text-cyber-400">
                        {course.career.title}
                      </p>
                      <p className="mt-3 text-sm leading-relaxed text-slate-300">
                        {course.career.body}
                      </p>
                      <div className="mt-6 flex flex-wrap gap-2">
                        {[
                          { icon: BookOpen, label: 'Certificate Included' },
                          { icon: UserCheck, label: 'Skill Jobs Interview Pipeline' },
                          { icon: BadgeCheck, label: 'Industry Recognized' },
                        ].map((chip) => (
                          <span
                            key={chip.label}
                            className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-300"
                          >
                            <chip.icon className="h-3.5 w-3.5 text-cyber-400" />
                            {chip.label}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>
          </div>
        </div>
      </main>

      <div className="glass-nav fixed inset-x-0 bottom-0 z-40 flex items-center justify-between gap-3 px-4 py-4 lg:hidden">
        <Link
          to="/#courses"
          className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-slate-200"
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </Link>
        <EnrollLink
          course={course}
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyber-400 to-electric-500 px-5 py-3 text-sm font-semibold text-night-950"
        />
      </div>

      <Footer />
    </div>
  )
}
