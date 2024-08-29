import Hero from '../components/Hero'
import Features from '../components/Features'
import Testimonials from '../components/Testimonials'
import Pricing from '@/components/Pricing'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <main>
        <Hero />
        <Features />
        <Testimonials />
        <Pricing />
        <Contact />
      </main>
      <footer className="bg-gray-800 text-white py-8 text-center">
        <p>&copy; 2024 Vibes. All rights reserved.</p>
      </footer>
    </div>
  )
}