import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, Shield, X, Zap } from 'lucide-react'

const links = [
  { label: 'Home', to: '/#home' },
  { label: 'Courses', to: '/#courses' },
  { label: 'Cyber Care Desk', to: '/#care-desk' },
  { label: 'NCSO', to: '/#ncso' },
  { label: 'About', to: '/#about' },
  { label: 'Contact', to: '/#contact' },
]

function Logo() {
  return (
    <Link to="/#home" className="flex items-center gap-3">
      <span className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyber-400 to-electric-500 shadow-[0_0_24px_rgba(0,240,255,0.35)]">
        <Shield className="h-5 w-5 text-night-950" strokeWidth={2.5} />
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-mono text-lg font-bold tracking-tight text-white">
          DIU <span className="text-cyber-400">CSC</span>
        </span>
        <span className="mt-1 flex items-center gap-1 text-[10px] font-medium tracking-widest text-slate-400">
          <Zap className="h-3 w-3 text-cyber-400" />
          POWERED BY SKILL JOBS
        </span>
      </span>
    </Link>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open ? 'glass-nav' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6">
        <Logo />

        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className="rounded-lg px-3 py-2 text-sm font-medium text-slate-300 transition-colors hover:bg-white/5 hover:text-cyber-300"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            to="/#courses"
            className="rounded-lg bg-gradient-to-r from-cyber-400 to-electric-500 px-5 py-2.5 text-sm font-semibold text-night-950 shadow-[0_0_24px_rgba(0,240,255,0.3)] transition-transform hover:scale-105"
          >
            Enroll Now
          </Link>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-200 lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="overflow-hidden lg:hidden"
          >
            <div className="flex flex-col gap-1 border-t border-white/5 px-4 pb-6 pt-3">
              {links.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                >
                  <Link
                    to={link.to}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-3 text-base font-medium text-slate-200 transition-colors hover:bg-white/5 hover:text-cyber-300"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <Link
                to="/#courses"
                onClick={() => setOpen(false)}
                className="mt-3 rounded-lg bg-gradient-to-r from-cyber-400 to-electric-500 px-5 py-3 text-center text-sm font-semibold text-night-950"
              >
                Enroll Now
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
