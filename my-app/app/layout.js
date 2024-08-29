import Head from 'next/head';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Pricing from '@/components/Pricing';

export default function Home() {
  return (
    <html>
+      <body><div className="min-h-screen bg-gray-100">
      <Head>
        <title>Vibes - AI-Powered Music Videos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

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
    </body>
    +    </html>
  );
}