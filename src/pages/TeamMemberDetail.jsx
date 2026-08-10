import { Link, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowLeft,
  Briefcase,
  CheckCircle2,
  FlaskConical,
  Globe,
  Link2,
  Mail,
} from 'lucide-react'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import { getTeamMember } from '../data/team.js'

const socialIcons = {
  linkedin: Link2,
  github: Link2,
  website: Globe,
  email: Mail,
}

function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-60px' },
    transition: { duration: 0.55, delay, ease: 'easeOut' },
  }
}

export default function TeamMemberDetail() {
  const { id } = useParams()
  const member = getTeamMember(id)

  if (!member) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-night-900 px-6 text-center">
        <p className="font-mono text-sm tracking-[0.3em] text-cyber-400">{'// 404'}</p>
        <h1 className="mt-4 font-mono text-3xl font-bold text-white">
          Team Member Not Found
        </h1>
        <Link
          to="/#team"
          className="mt-8 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyber-400 to-electric-500 px-6 py-3 font-semibold text-night-950"
        >
          <ArrowLeft className="h-5 w-5" />
          Back to Our Team
        </Link>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-night-900">
      <Navbar />

      <section className="bg-circuit relative overflow-hidden pt-32">
        <div className="absolute inset-0 bg-gradient-to-b from-night-950/80 via-transparent to-night-900" />
        <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-10 sm:px-6">
          <Link
            to="/#team"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition-colors hover:text-cyber-300"
          >
            <ArrowLeft className="h-4 w-4" />
            Our Team
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="glass relative mt-8 overflow-hidden rounded-3xl border-t-2 border-t-cyber-400/50"
          >
            <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-cyber-400/60 to-transparent" />
            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-cyber-400/10 blur-3xl" />

            <div className="relative flex flex-col gap-8 p-8 sm:p-10 lg:flex-row lg:items-center">
              <div className="mx-auto w-full max-w-xs shrink-0 lg:mx-0">
                <div className="relative overflow-hidden rounded-2xl ring-1 ring-white/10">
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      loading="lazy"
                      className="aspect-square w-full object-cover object-top"
                    />
                  ) : (
                    <span
                      className={`flex aspect-square w-full items-center justify-center rounded-2xl bg-gradient-to-br font-mono text-5xl font-bold text-white ${member.gradient}`}
                    >
                      {member.initials}
                    </span>
                  )}
                </div>
              </div>

              <div className="flex-1 text-center lg:text-left">
                <p className="font-mono text-sm font-medium tracking-[0.3em] text-cyber-400">
                  {'// TEAM PROFILE'}
                </p>
                <h1 className="mt-3 font-mono text-3xl font-bold text-white sm:text-4xl">
                  {member.name}
                </h1>
                <p className="mt-3 font-mono text-xs font-semibold uppercase tracking-wider text-cyber-400 sm:text-sm">
                  {member.role}
                </p>
                {member.expertise && (
                  <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-slate-400 lg:mx-0">
                    {member.expertise}
                  </p>
                )}
                {member.social.length > 0 && (
                  <div className="mt-6 flex items-center justify-center gap-3 lg:justify-start">
                    {member.social.map((link) => {
                      const Icon = socialIcons[link.label]
                      if (!Icon) return null
                      return (
                        <a
                          key={link.label}
                          href={link.url}
                          target="_blank"
                          rel="noreferrer"
                          className="rounded-full border border-white/10 bg-white/5 p-2.5 text-slate-300 transition-colors hover:border-cyber-400/40 hover:bg-cyber-400/10 hover:text-cyber-300"
                          aria-label={`${member.name} on ${link.label}`}
                        >
                          <Icon className="h-4 w-4" />
                        </a>
                      )
                    })}
                  </div>
                )}
              </div>
            </div>
          </motion.div>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {member.roleDescription && (
              <motion.div
                {...fadeUp(0.05)}
                className="glass rounded-2xl p-8"
              >
                <p className="flex items-center gap-2 font-mono text-xs font-bold tracking-widest text-cyber-400">
                  <Briefcase className="h-4 w-4" />
                  {'// ROLE & RESPONSIBILITIES'}
                </p>
                <p className="mt-4 leading-relaxed text-slate-300">
                  {member.roleDescription}
                </p>
              </motion.div>
            )}

            {member.experience && (
              <motion.div
                {...fadeUp(0.15)}
                className="glass rounded-2xl p-8"
              >
                <p className="flex items-center gap-2 font-mono text-xs font-bold tracking-widest text-cyber-400">
                  <FlaskConical className="h-4 w-4" />
                  {'// WORK EXPERIENCE IN CYBERSECURITY'}
                </p>
                {Array.isArray(member.experience) ? (
                  <ul className="mt-5 space-y-4">
                    {member.experience.map((entry) => (
                      <li key={entry.title} className="flex items-start gap-3">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyber-400" />
                        <p className="leading-relaxed text-slate-300">
                          <span className="font-semibold text-white">
                            {entry.title}:
                          </span>{' '}
                          {entry.text}
                        </p>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="mt-4 leading-relaxed text-slate-300">
                    {member.experience}
                  </p>
                )}
              </motion.div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
