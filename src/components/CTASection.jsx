import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Mail } from 'lucide-react'

function MatrixRain({ className }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const dpr = window.devicePixelRatio || 1
    let width = 0
    let height = 0
    let columns = 0
    let drops = []
    let raf

    const chars =
      'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン01<>*#$%&@'

    const resize = () => {
      width = canvas.clientWidth
      height = canvas.clientHeight
      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      ctx.font = '14px monospace'
      columns = Math.ceil(width / 16)
      drops = Array.from({ length: columns }, () => Math.random() * -60)
    }

    const tick = () => {
      ctx.fillStyle = 'rgba(10, 14, 23, 0.12)'
      ctx.fillRect(0, 0, width, height)
      ctx.fillStyle = 'rgba(0, 240, 255, 0.55)'
      for (let i = 0; i < columns; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)]
        ctx.fillText(char, i * 16, drops[i] * 16)
        if (drops[i] * 16 > height && Math.random() > 0.975) drops[i] = 0
        drops[i]++
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

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function CTASection() {
  return (
    <section id="cta" className="relative overflow-hidden px-4 py-28 sm:px-6">
      <div className="absolute inset-0 bg-grid opacity-70" />
      <MatrixRain className="absolute inset-0 h-full w-full opacity-25" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-night-900 via-night-900/60 to-night-900" />

      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.65 }}
        className="relative mx-auto max-w-3xl text-center"
      >
        <p className="font-mono text-sm font-medium tracking-[0.3em] text-cyber-400">
          {'// YOUR MOVE'}
        </p>
        <h2 className="mt-4 font-mono text-3xl font-bold leading-tight text-white sm:text-5xl">
          Ready to Defend the{' '}
          <span className="bg-gradient-to-r from-cyber-400 to-electric-400 bg-clip-text text-transparent">
            Digital Frontier?
          </span>
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg text-slate-400">
          Your seat in the next cohort is waiting. Build the skills, earn the
          certification, and step into a real cyber career.
        </p>
        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <button
            type="button"
            onClick={() => scrollTo('courses')}
            className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyber-400 to-electric-500 px-8 py-4 font-semibold text-night-950 shadow-[0_0_36px_rgba(0,240,255,0.35)] transition-transform hover:scale-[1.03]"
          >
            Browse All Courses
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </button>
          <a
            href="mailto:csc@diu.edu.bd?subject=Contact%20DIU%20CSC"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-8 py-4 font-semibold text-cyber-300 backdrop-blur transition-colors hover:border-cyber-400/40 hover:bg-cyber-400/10"
          >
            <Mail className="h-5 w-5" />
            Contact Our Team
          </a>
        </div>
      </motion.div>
    </section>
  )
}
