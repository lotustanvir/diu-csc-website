import Navbar from '../components/Navbar.jsx'
import Hero from '../components/Hero.jsx'
import StatsBar from '../components/StatsBar.jsx'
import CourseGrid from '../components/CourseGrid.jsx'
import ServicesSection from '../components/ServicesSection.jsx'
import OlympiadBanner from '../components/OlympiadBanner.jsx'
import PartnershipSection from '../components/PartnershipSection.jsx'
import Testimonials from '../components/Testimonials.jsx'
import CTASection from '../components/CTASection.jsx'
import Footer from '../components/Footer.jsx'

export default function Home() {
  return (
    <div className="min-h-screen bg-night-900">
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <CourseGrid />
        <ServicesSection />
        <OlympiadBanner />
        <PartnershipSection />
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
