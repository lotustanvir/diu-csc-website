import { Link } from 'react-router-dom'
import { Mail, MapPin, Phone, Shield, Zap } from 'lucide-react'
import { socials } from '../data/socials.js'

const quickLinks = [
  { label: 'Courses', to: '/#courses' },
  { label: 'NCSO Olympiad', to: '/#ncso' },
  { label: 'Cyber Care Desk', to: '/#care-desk' },
  { label: 'Our Partners', to: '/#about' },
  { label: 'Testimonials', to: '/#testimonials' },
]

export default function Footer() {
  return (
    <footer id="contact" className="relative border-t border-white/5 bg-night-950">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyber-400 to-electric-500">
                <Shield className="h-5 w-5 text-night-950" strokeWidth={2.5} />
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-mono text-lg font-bold text-white">
                  DIU <span className="text-cyber-400">CSC</span>
                </span>
                <span className="mt-1 flex items-center gap-1 text-[10px] font-medium tracking-widest text-slate-400">
                  <Zap className="h-3 w-3 text-cyber-400" />
                  POWERED BY SKILL JOBS
                </span>
              </span>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-slate-400">
              The DIU Cyber Security Centre forges the next generation of cyber
              defenders — world-class training, live cyber ranges, and direct
              placement pipelines.
            </p>
          </div>

          <div>
            <h3 className="font-mono text-sm font-bold tracking-widest text-cyber-400">
              QUICK LINKS
            </h3>
            <ul className="mt-5 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-sm text-slate-400 transition-colors hover:text-cyber-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-sm font-bold tracking-widest text-cyber-400">
              CONTACT INFO
            </h3>
            <ul className="mt-5 space-y-4 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-cyber-400" />
                <span>csc@diu.edu.bd</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-cyber-400" />
                <span>+880 18 419 92222</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-cyber-400" />
                <span>
                  Daffodil International University, 4/2 Sobhanbagh, Dhanmondi,
                  Dhaka 1207, Bangladesh
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-sm font-bold tracking-widest text-cyber-400">
              SOCIAL MEDIA
            </h3>
            <div className="mt-5 flex gap-3">
              {socials.map((social) => {
                const icon = (
                  <img
                    src={social.image}
                    alt={social.label}
                    loading="lazy"
                    className="h-4.5 w-4.5 object-contain"
                  />
                )
                const box =
                  'flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition-all hover:border-cyber-400/50 hover:bg-cyber-400/10'
                return social.url ? (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                    title={social.label}
                    className={box}
                  >
                    {icon}
                  </a>
                ) : (
                  <span
                    key={social.label}
                    aria-label={social.label}
                    title={`${social.label} — link coming soon`}
                    className={`${box} cursor-default opacity-80`}
                  >
                    {icon}
                  </span>
                )
              })}
            </div>
            <p className="mt-6 text-xs leading-relaxed text-slate-500">
              Campus visits welcome — walk into the Cyber Care Desk at Building
              C, DIU Permanent Campus.
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-6 text-center sm:flex-row sm:px-6 sm:text-left">
          <p className="text-xs text-slate-500">
            © 2026 DIU Cyber Security Centre. All rights reserved.
          </p>
          <p className="text-xs font-medium text-slate-400">
            Powered by{' '}
            <span className="font-semibold text-cyber-400">Skill Jobs</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
