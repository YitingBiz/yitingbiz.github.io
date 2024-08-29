import Head from 'next/head';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Pricing from '@/components/pricing';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
import { global } from 'styled-jsx/css';

export default function Home() {
  return (
    <Theme>
      <Head>
        <title>Vibes - AI-Powered Music Videos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <Hero />
        <Features />
        <Testimonials />
        <Pricing />
        <Footer />
      </main>
    </Theme>
  );
}