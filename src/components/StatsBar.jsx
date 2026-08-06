import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

const stats = [
  { value: 7, suffix: '', prefix: '', label: 'Specialized Courses' },
  { value: 60, suffix: '%', prefix: '', label: 'Practical Labs' },
  { value: 24, suffix: '/7', prefix: '', label: 'Cyber Care Desk' },
  { value: 100, suffix: '+', prefix: '', label: 'Corporate Partners' },
  { value: 50000, suffix: '', prefix: 'BDT ', label: 'Olympiad Prize Pool' },
]

function Counter({ value, suffix, prefix }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return
    let raf
    const duration = 1800
    const start = performance.now()
    const step = (now) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplay(Math.round(eased * value))
      if (progress < 1) raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [inView, value])

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {display.toLocaleString()}
      {suffix}
    </span>
  )
}

export default function StatsBar() {
  return (
    <section id="stats" className="relative z-10 -mt-10 px-4 sm:px-6">
      <div className="glass mx-auto grid max-w-7xl grid-cols-2 gap-y-8 rounded-2xl px-6 py-10 sm:grid-cols-3 lg:grid-cols-5">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <div className="bg-gradient-to-r from-cyber-400 to-electric-400 bg-clip-text font-mono text-3xl font-bold text-transparent sm:text-4xl">
              <Counter
                value={stat.value}
                suffix={stat.suffix}
                prefix={stat.prefix}
              />
            </div>
            <p className="mt-2 text-xs font-medium uppercase tracking-wider text-slate-400">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
