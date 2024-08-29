import Head from 'next/head';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Pricing from '@/components/pricing';
import Header from '@/components/Header';
import Footer from '@/components/footer';
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
import { global } from 'styled-jsx/css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
export default function Home() {
  return (
    <html>
      <body>
        <Theme>
          <Head>
            <title>Vibes - AI-Powered Music Videos</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>

          <main>
            <Header/>
            <Hero />
            <Features />
            <Testimonials />
            <Pricing />
            <Contact />
            <Footer/>
          </main>
      </Theme>
    </body>
   </html >
  );
}