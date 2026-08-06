import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  Award,
  Briefcase,
  FlaskConical,
  ShieldAlert,
  Trophy,
} from 'lucide-react'

const trustBadges = [
  { icon: Award, label: 'Sophos Education Partner' },
  { icon: FlaskConical, label: '60% Hands-On Training' },
  { icon: Briefcase, label: 'Direct Job Placement' },
  { icon: Trophy, label: 'National Olympiad Host' },
]

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

function ParticleNetwork({ className }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const dpr = window.devicePixelRatio || 1
    let width = 0
    let height = 0
    let nodes = []
    let raf

    const CONNECTION_DIST = 130
    const COLORS = ['0, 240, 255', '59, 130, 246']

    const resize = () => {
      width = canvas.clientWidth
      height = canvas.clientHeight
      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      const count = Math.min(85, Math.max(40, Math.floor((width * height) / 16000)))
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        r: Math.random() * 1.8 + 0.8,
      }))
    }

    const tick = () => {
      ctx.clearRect(0, 0, width, height)
      for (const node of nodes) {
        node.x += node.vx
        node.y += node.vy
        if (node.x < 0 || node.x > width) node.vx *= -1
        if (node.y < 0 || node.y > height) node.vy *= -1
        ctx.beginPath()
        ctx.arc(node.x, node.y, node.r, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(0, 240, 255, 0.5)'
        ctx.fill()
      }
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i]
          const b = nodes[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const dist = Math.hypot(dx, dy)
          if (dist < CONNECTION_DIST) {
            const alpha = (1 - dist / CONNECTION_DIST) * 0.22
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.strokeStyle = `rgba(${COLORS[i % 2]}, ${alpha})`
            ctx.lineWidth = 1
            ctx.stroke()
          }
        }
      }
      raf = requestAnimationFrame(tick)
    }

    resize()
    tick()
    window.addEventListener('resize', resize)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14, delayChildren: 0.1 } },
}

const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' } },
}

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-night-950 via-night-900 to-night-900" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,240,255,0.1),transparent_55%),radial-gradient(ellipse_at_bottom_right,rgba(59,130,246,0.12),transparent_55%)]" />
      <ParticleNetwork className="absolute inset-0 h-full w-full" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-24 pt-32 sm:px-6 sm:pt-36"
      >
        <motion.p
          variants={item}
          className="mb-6 font-mono text-sm font-medium tracking-[0.3em] text-cyber-400"
        >
          {'// DIU CYBER SECURITY CENTRE'}
        </motion.p>

        <motion.h1
          variants={item}
          className="max-w-4xl font-mono text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl"
        >
          Forge the Next Generation of{' '}
          <span className="bg-gradient-to-r from-cyber-400 via-cyber-300 to-electric-400 bg-clip-text text-transparent">
            Cyber Defenders
          </span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-400"
        >
          From zero to industry-ready. World-class cybersecurity training, live cyber
          ranges, and direct placement pipelines — powered by Daffodil International
          University and Skill Jobs.
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-col gap-4 sm:flex-row">
          <button
            type="button"
            onClick={() => scrollTo('courses')}
            className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyber-400 to-electric-500 px-7 py-3.5 font-semibold text-night-950 shadow-[0_0_32px_rgba(0,240,255,0.35)] transition-transform hover:scale-[1.03]"
          >
            Explore Courses
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </button>
          <button
            type="button"
            onClick={() => scrollTo('care-desk')}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-7 py-3.5 font-semibold text-cyber-300 backdrop-blur transition-colors hover:border-cyber-400/40 hover:bg-cyber-400/10"
          >
            <ShieldAlert className="h-5 w-5" />
            Visit Cyber Care Desk
          </button>
        </motion.div>

        <motion.div
          variants={item}
          className="mt-14 flex flex-wrap items-center gap-3"
        >
          {trustBadges.map((badge) => (
            <span
              key={badge.label}
              className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium text-slate-300"
            >
              <badge.icon className="h-4 w-4 text-cyber-400" />
              {badge.label}
            </span>
          ))}
        </motion.div>
      </motion.div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-night-900 to-transparent" />
    </section>
  )
}
