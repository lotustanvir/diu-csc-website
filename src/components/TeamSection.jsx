import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Globe, Link2, Mail } from 'lucide-react'
import { teamMembers } from '../data/team.js'

const socialIcons = {
  linkedin: Link2,
  github: Link2,
  website: Globe,
  email: Mail,
}

function MemberAvatar({ member }) {
  if (member.image) {
    return (
      <div className="mx-auto w-28 overflow-hidden rounded-2xl ring-1 ring-white/10 transition-shadow duration-300 group-hover:ring-cyber-400/40">
        <img
          src={member.image}
          alt={member.name}
          loading="lazy"
          className="aspect-square w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-110"
        />
      </div>
    )
  }

  return (
    <span
      className={`mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br font-mono text-xl font-bold text-white shadow-[0_0_28px_rgba(0,240,255,0.15)] ring-1 ring-white/15 transition-transform duration-500 ease-out group-hover:scale-110 ${member.gradient}`}
    >
      {member.initials}
    </span>
  )
}

export default function TeamSection() {
  return (
    <section id="team" className="relative px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="font-mono text-sm font-medium tracking-[0.3em] text-cyber-400">
            {'// THE TEAM'}
          </p>
          <h2 className="mt-3 font-mono text-3xl font-bold text-white sm:text-4xl">
            Our Team
          </h2>
          <p className="mt-4 text-slate-400">
            Meet the experts behind DIU Cyber Security Centre — the dedicated
            professionals, researchers, and cybersecurity specialists working together
            to advance cybersecurity education, research, innovation, and awareness.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {teamMembers.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: 'easeOut' }}
              whileHover={{ y: -6 }}
              className="glass group relative flex flex-col overflow-hidden rounded-2xl p-6 will-change-transform"
            >
              <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-cyber-400/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <Link
                to={`/team/${member.id}`}
                aria-label={`View ${member.name}'s profile`}
                className="block"
              >
                <MemberAvatar member={member} />
              </Link>

              <Link
                to={`/team/${member.id}`}
                className="mt-6 text-center text-lg font-bold text-white transition-colors hover:text-cyber-300"
              >
                {member.name}
              </Link>
              <p className="mt-1 text-center font-mono text-xs font-semibold uppercase tracking-wider text-cyber-400">
                {member.role}
              </p>
              <p className="mt-3 flex-1 text-center text-sm leading-relaxed text-slate-400">
                {member.expertise}
              </p>

              {member.social.length > 0 && (
                <div className="mt-5 flex items-center justify-center gap-3 border-t border-white/5 pt-5">
                  {member.social.map((link) => {
                    const Icon = socialIcons[link.label]
                    if (!Icon) return null
                    return (
                      <a
                        key={link.label}
                        href={link.url}
                        target="_blank"
                        rel="noreferrer"
                        className="text-slate-400 transition-colors hover:text-cyber-300"
                        aria-label={`${member.name} on ${link.label}`}
                      >
                        <Icon className="h-4 w-4" />
                      </a>
                    )
                  })}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
