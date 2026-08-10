// Complaint form configuration — categories and contact methods shown on
// the /complaint page. Add or edit options freely.

export const complaintCategories = [
  'Harassment & Cyberbullying',
  'Hacked Account',
  'Online Threat',
  'Social Media Abuse',
  'Privacy Concern',
  'Phishing / Scam',
  'Identity Theft',
  'Other',
]

export const contactMethods = ['Email', 'Phone', 'Both']

// Simulated submission. When the backend/API is ready, replace the body of
// this function with a real request, e.g.:
//
//   return fetch('/api/complaints', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(payload),
//   }).then((res) => {
//     if (!res.ok) throw new Error('Submission failed')
//     return res.json()
//   })
export function submitComplaint(payload) {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ ok: true, payload }), 1200)
  })
}

export function generateReferenceId() {
  const suffix = Math.random().toString(36).slice(2, 8).toUpperCase()
  return `CSC-${suffix}`
}
