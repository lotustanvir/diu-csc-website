import { useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import {
  AlertCircle,
  ArrowLeft,
  CheckCircle2,
  FileText,
  Loader2,
  Paperclip,
  Send,
  ShieldCheck,
} from 'lucide-react'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import {
  complaintCategories,
  contactMethods,
  generateReferenceId,
  submitComplaint,
} from '../data/complaint.js'

const initialForm = {
  fullName: '',
  studentId: '',
  email: '',
  department: '',
  phone: '',
  category: '',
  subject: '',
  description: '',
  incidentDate: '',
  location: '',
  evidence: null,
  contactMethod: 'Email',
}

const inputClass =
  'w-full rounded-xl border border-white/10 bg-night-900/60 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition-colors focus:border-cyber-400/60 focus:ring-1 focus:ring-cyber-400/40'

const errorClass = 'border-red-400/50 focus:border-red-400/60 focus:ring-red-400/30'

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const phonePattern = /^[+]?[\d\s-]{10,16}$/

function Field({
  label,
  required,
  error,
  children,
  className = '',
}) {
  return (
    <div className={className}>
      <span className="mb-2 block font-mono text-xs font-bold tracking-widest text-slate-400">
        {label}
        {required && <span className="ml-1 text-red-400">*</span>}
      </span>
      {children}
      {error && (
        <p className="mt-2 flex items-center gap-1.5 text-xs font-medium text-red-400">
          <AlertCircle className="h-3.5 w-3.5 shrink-0" />
          {error}
        </p>
      )}
    </div>
  )
}

function validate(form) {
  const errors = {}
  if (!form.fullName.trim()) errors.fullName = 'Please enter your full name.'
  if (!form.studentId.trim())
    errors.studentId = 'Please enter your student ID.'
  if (!form.email.trim()) {
    errors.email = 'Please enter your DIU email address.'
  } else if (!emailPattern.test(form.email.trim())) {
    errors.email = 'Please enter a valid email address.'
  }
  if (!form.department.trim()) errors.department = 'Please enter your department.'
  if (!form.phone.trim()) {
    errors.phone = 'Please enter your phone number.'
  } else if (!phonePattern.test(form.phone.trim())) {
    errors.phone = 'Please enter a valid phone number.'
  }
  if (!form.category) errors.category = 'Please select a complaint category.'
  if (!form.subject.trim()) errors.subject = 'Please enter a subject.'
  if (!form.description.trim())
    errors.description = 'Please describe your complaint.'
  return errors
}

export default function ComplaintPage() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [referenceId, setReferenceId] = useState('')

  function set(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }))
    setErrors((prev) => (prev[field] ? { ...prev, [field]: undefined } : prev))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    if (submitting || submitted) return

    const nextErrors = validate(form)
    setErrors(nextErrors)
    if (Object.values(nextErrors).some(Boolean)) return

    setSubmitting(true)
    const reference = generateReferenceId()
    try {
      await submitComplaint({
        ...form,
        evidence: form.evidence ? form.evidence.name : null,
      })
      setReferenceId(reference)
      setSubmitted(true)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-night-900">
      <Navbar />

      <section className="bg-circuit relative overflow-hidden pt-32">
        <div className="absolute inset-0 bg-gradient-to-b from-night-950/80 via-transparent to-night-900" />
        <div className="relative mx-auto max-w-4xl px-4 pb-20 pt-10 sm:px-6">
          <Link
            to="/#care-desk"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition-colors hover:text-cyber-300"
          >
            <ArrowLeft className="h-4 w-4" />
            Cyber Care Desk
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="mt-8 text-center"
          >
            <p className="font-mono text-sm font-medium tracking-[0.3em] text-cyber-400">
              {'// CAMPUS CSR'}
            </p>
            <h1 className="mt-3 font-mono text-3xl font-bold text-white sm:text-4xl">
              Submit a Complaint
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-slate-400">
              Tell us about your concern. Your information will be handled with care
              by the DIU Cyber Security Centre.
            </p>
          </motion.div>

          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="glass relative mt-10 overflow-hidden rounded-3xl p-10 text-center sm:p-14"
              >
                <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-cyber-400/60 to-transparent" />
                <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-400/10 ring-1 ring-emerald-400/40">
                  <CheckCircle2 className="h-8 w-8 text-emerald-400" />
                </span>
                <h2 className="mt-6 font-mono text-2xl font-bold text-white sm:text-3xl">
                  Complaint Submitted Successfully
                </h2>
                <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-slate-400">
                  Thank you for contacting DIU Cyber Security Centre. Your complaint
                  has been received and will be reviewed by our team.
                </p>
                <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-cyber-400/30 bg-cyber-400/10 px-5 py-2 font-mono text-sm font-semibold tracking-widest text-cyber-300">
                  <FileText className="h-4 w-4" />
                  REF: {referenceId}
                </p>
                <div className="mt-8">
                  <Link
                    to="/#care-desk"
                    className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyber-400 to-electric-500 px-8 py-4 font-semibold text-night-950 shadow-[0_0_36px_rgba(0,240,255,0.35)] transition-transform hover:scale-[1.03]"
                  >
                    <ArrowLeft className="h-5 w-5" />
                    Back to Cyber Care Desk
                  </Link>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="form"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="glass relative mt-10 overflow-hidden rounded-3xl p-8 sm:p-10"
              >
                <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-cyber-400/60 to-transparent" />

                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  <fieldset disabled={submitting} className="space-y-6">
                    <div className="grid gap-6 sm:grid-cols-2">
                      <Field label="FULL NAME" required error={errors.fullName}>
                        <input
                          type="text"
                          placeholder="Your full name"
                          value={form.fullName}
                          onChange={(e) => set('fullName', e.target.value)}
                          className={`${inputClass} ${errors.fullName ? errorClass : ''}`}
                          aria-invalid={Boolean(errors.fullName)}
                        />
                      </Field>

                      <Field label="STUDENT ID" required error={errors.studentId}>
                        <input
                          type="text"
                          placeholder="e.g. 221-35-0000"
                          value={form.studentId}
                          onChange={(e) => set('studentId', e.target.value)}
                          className={`${inputClass} ${errors.studentId ? errorClass : ''}`}
                          aria-invalid={Boolean(errors.studentId)}
                        />
                      </Field>

                      <Field label="DIU EMAIL" required error={errors.email}>
                        <input
                          type="email"
                          placeholder="you@diu.edu.bd"
                          value={form.email}
                          onChange={(e) => set('email', e.target.value)}
                          className={`${inputClass} ${errors.email ? errorClass : ''}`}
                          aria-invalid={Boolean(errors.email)}
                        />
                      </Field>

                      <Field label="DEPARTMENT" required error={errors.department}>
                        <input
                          type="text"
                          placeholder="e.g. Software Engineering"
                          value={form.department}
                          onChange={(e) => set('department', e.target.value)}
                          className={`${inputClass} ${errors.department ? errorClass : ''}`}
                          aria-invalid={Boolean(errors.department)}
                        />
                      </Field>

                      <Field label="PHONE NUMBER" required error={errors.phone}>
                        <input
                          type="tel"
                          placeholder="e.g. +880 18 419 92222"
                          value={form.phone}
                          onChange={(e) => set('phone', e.target.value)}
                          className={`${inputClass} ${errors.phone ? errorClass : ''}`}
                          aria-invalid={Boolean(errors.phone)}
                        />
                      </Field>

                      <Field label="COMPLAINT CATEGORY" required error={errors.category}>
                        <select
                          value={form.category}
                          onChange={(e) => set('category', e.target.value)}
                          className={`${inputClass} ${errors.category ? errorClass : ''} ${
                            form.category ? 'text-white' : 'text-slate-500'
                          }`}
                          aria-invalid={Boolean(errors.category)}
                        >
                          <option value="" disabled>
                            Select a category
                          </option>
                          {complaintCategories.map((category) => (
                            <option key={category} value={category} className="text-white">
                              {category}
                            </option>
                          ))}
                        </select>
                      </Field>

                      <Field label="SUBJECT" required error={errors.subject} className="sm:col-span-2">
                        <input
                          type="text"
                          placeholder="Short summary of your complaint"
                          value={form.subject}
                          onChange={(e) => set('subject', e.target.value)}
                          className={`${inputClass} ${errors.subject ? errorClass : ''}`}
                          aria-invalid={Boolean(errors.subject)}
                        />
                      </Field>

                      <Field label="DESCRIPTION OF COMPLAINT" required error={errors.description} className="sm:col-span-2">
                        <textarea
                          rows={5}
                          placeholder="Describe what happened, including as much detail as you are comfortable sharing..."
                          value={form.description}
                          onChange={(e) => set('description', e.target.value)}
                          className={`${inputClass} resize-y ${errors.description ? errorClass : ''}`}
                          aria-invalid={Boolean(errors.description)}
                        />
                      </Field>

                      <Field label="DATE OF INCIDENT" className="sm:col-span-1">
                        <input
                          type="date"
                          value={form.incidentDate}
                          onChange={(e) => set('incidentDate', e.target.value)}
                          className={`${inputClass} ${form.incidentDate ? 'text-white' : 'text-slate-500'}`}
                        />
                      </Field>

                      <Field label="LOCATION / PLATFORM" className="sm:col-span-1">
                        <input
                          type="text"
                          placeholder="e.g. Facebook, WhatsApp, campus lab"
                          value={form.location}
                          onChange={(e) => set('location', e.target.value)}
                          className={inputClass}
                        />
                      </Field>

                      <Field label="SUPPORTING EVIDENCE / ATTACHMENT" className="sm:col-span-2">
                        <label className="flex cursor-pointer flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-white/15 bg-night-900/40 px-4 py-8 text-center transition-colors hover:border-cyber-400/50 hover:bg-cyber-400/5">
                          <Paperclip className="h-6 w-6 text-cyber-400" />
                          <span className="text-sm font-medium text-slate-300">
                            {form.evidence
                              ? form.evidence.name
                              : 'Click to attach screenshots, PDFs, or images'}
                          </span>
                          <span className="text-xs text-slate-500">
                            Optional — up to a few MB, images or PDF preferred
                          </span>
                          <input
                            type="file"
                            accept="image/*,.pdf,.doc,.docx"
                            className="hidden"
                            onChange={(e) =>
                              set('evidence', e.target.files?.[0] || null)
                            }
                          />
                        </label>
                      </Field>

                      <Field label="PREFERRED CONTACT METHOD" required className="sm:col-span-2">
                        <div className="flex flex-wrap gap-3">
                          {contactMethods.map((method) => (
                            <label
                              key={method}
                              className={`flex cursor-pointer items-center gap-2 rounded-xl border px-5 py-3 text-sm font-medium transition-colors ${
                                form.contactMethod === method
                                  ? 'border-cyber-400/60 bg-cyber-400/10 text-cyber-300'
                                  : 'border-white/10 bg-night-900/60 text-slate-400 hover:border-white/25'
                              }`}
                            >
                              <input
                                type="radio"
                                name="contactMethod"
                                value={method}
                                checked={form.contactMethod === method}
                                onChange={() => set('contactMethod', method)}
                                className="accent-cyber-400"
                              />
                              {method}
                            </label>
                          ))}
                        </div>
                      </Field>
                    </div>

                    <div className="flex flex-col gap-4 border-t border-white/5 pt-6 sm:flex-row sm:items-center sm:justify-between">
                      <p className="flex items-start gap-2 text-xs leading-relaxed text-slate-500">
                        <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-cyber-400" />
                        Your information is handled with care by the DIU Cyber
                        Security Centre. Fields marked{' '}
                        <span className="text-red-400">*</span> are required.
                      </p>
                      <button
                        type="submit"
                        disabled={submitting}
                        className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyber-400 to-electric-500 px-8 py-4 font-semibold text-night-950 shadow-[0_0_36px_rgba(0,240,255,0.35)] transition-transform hover:scale-[1.03] disabled:cursor-not-allowed disabled:opacity-60"
                      >
                        {submitting ? (
                          <>
                            <Loader2 className="h-5 w-5 animate-spin" />
                            Submitting...
                          </>
                        ) : (
                          <>
                            Submit Complaint
                            <Send className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                          </>
                        )}
                      </button>
                    </div>
                  </fieldset>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      <Footer />
    </div>
  )
}
