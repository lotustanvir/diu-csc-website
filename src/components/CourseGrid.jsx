import { motion } from 'framer-motion'
import CourseCard from './CourseCard.jsx'
import { courses } from '../data/courses.js'

export default function CourseGrid() {
  return (
    <section id="courses" className="relative px-4 py-24 sm:px-6">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-60" />
      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="font-mono text-sm font-medium tracking-[0.3em] text-cyber-400">
            {'// THE CORE'}
          </p>
          <h2 className="mt-3 font-mono text-3xl font-bold text-white sm:text-4xl">
            Our Certification Tracks
          </h2>
          <p className="mt-4 text-slate-400">
            From 3-day awareness bootcamps to 24-week industry specializations.
            Every program is built with 40-70% hands-on lab time.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  )
}
