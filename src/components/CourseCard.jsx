import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  Clock,
  Crosshair,
  HeartPulse,
  Network,
  Server,
  Shield,
  Target,
  Zap,
} from 'lucide-react'

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
  emerald: {
    line: 'from-emerald-400 to-emerald-600',
    icon: 'bg-emerald-400/10 text-emerald-400 border-emerald-400/30',
  },
  blue: {
    line: 'from-blue-400 to-blue-600',
    icon: 'bg-blue-400/10 text-blue-400 border-blue-400/30',
  },
  violet: {
    line: 'from-violet-400 to-violet-600',
    icon: 'bg-violet-400/10 text-violet-400 border-violet-400/30',
  },
  amber: {
    line: 'from-amber-400 to-amber-600',
    icon: 'bg-amber-400/10 text-amber-400 border-amber-400/30',
  },
  cyan: {
    line: 'from-cyan-400 to-cyan-600',
    icon: 'bg-cyan-400/10 text-cyan-400 border-cyan-400/30',
  },
  rose: {
    line: 'from-rose-400 to-rose-600',
    icon: 'bg-rose-400/10 text-rose-400 border-rose-400/30',
  },
  red: {
    line: 'from-red-400 to-red-600',
    icon: 'bg-red-400/10 text-red-400 border-red-400/30',
  },
}

const levelMap = {
  Beginner: 'bg-emerald-400/10 text-emerald-300 border-emerald-400/30',
  Intermediate: 'bg-sky-400/10 text-sky-300 border-sky-400/30',
  Professional: 'bg-cyan-400/10 text-cyan-300 border-cyan-400/30',
  Advanced: 'bg-violet-400/10 text-violet-300 border-violet-400/30',
  Expert: 'bg-red-400/10 text-red-300 border-red-400/30',
}

export default function CourseCard({ course }) {
  const Icon = iconMap[course.icon] || Shield
  const color = colorMap[course.color] || colorMap.cyan
  const level = levelMap[course.level] || levelMap.Beginner

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
      whileHover={{ y: -6 }}
      className="h-full will-change-transform"
    >
      <Link
        to={`/course/${course.id}`}
        className="group relative block h-full rounded-2xl bg-gradient-to-br from-white/10 to-white/5 p-px transition-all duration-300 hover:from-cyber-400 hover:via-electric-500/50 hover:to-fuchsia-500/40 hover:shadow-[0_0_40px_-12px_rgba(0,240,255,0.45)]"
      >
        <div className="relative flex h-full flex-col overflow-hidden rounded-2xl bg-night-850/95 p-6">
          <div
            className={`absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r ${color.line}`}
          />

          <div className="mt-2 flex items-center justify-between">
            <span
              className={`flex h-12 w-12 items-center justify-center rounded-xl border ${color.icon}`}
            >
              <Icon className="h-6 w-6" />
            </span>
            <span
              className={`rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-wider ${level}`}
            >
              {course.levelTag}
            </span>
          </div>

          <p className="mt-5 font-mono text-xs font-medium tracking-widest text-cyber-400/90">
            {course.subtitle}
          </p>
          <h3 className="mt-2 text-lg font-bold leading-snug text-white">
            {course.title}
          </h3>

          <div className="mt-3 flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300">
              <Clock className="h-3.5 w-3.5 text-cyber-400" />
              {course.duration}
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-400">
              {course.ratio}
            </span>
          </div>

          <p className="mt-4 line-clamp-3 text-sm leading-relaxed text-slate-400">
            {course.description}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {course.highlights.slice(0, 3).map((highlight) => (
              <span
                key={highlight}
                className="rounded-md bg-night-700/60 px-2.5 py-1 text-[11px] font-medium text-slate-300"
              >
                {highlight}
              </span>
            ))}
          </div>

          <div className="mt-6 flex items-center justify-between border-t border-white/5 pt-5">
            <span className="text-xs font-medium text-slate-500">
              {course.outcome}
            </span>
            <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-cyber-400 transition-colors group-hover:text-cyber-300">
              View Syllabus
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
