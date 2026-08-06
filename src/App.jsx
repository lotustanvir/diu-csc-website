import { lazy, Suspense, useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { Loader2 } from 'lucide-react'
import Home from './pages/Home.jsx'

const CourseDetail = lazy(() => import('./pages/CourseDetail.jsx'))

function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1))
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
        return
      }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}

function PageLoader() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-night-900">
      <div className="flex items-center gap-3 font-mono text-sm font-semibold tracking-widest text-cyber-400">
        <Loader2 className="h-5 w-5 animate-spin" />
        LOADING
      </div>
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollManager />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/course/:id"
          element={
            <Suspense fallback={<PageLoader />}>
              <CourseDetail />
            </Suspense>
          }
        />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}
