import Head from 'next/head';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Pricing from '@/components/Pricing';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import '@radix-ui/themes/styles.css';
import ContactForm from '@/components/ContactForm';
import { Theme } from '@radix-ui/themes';
import { global } from 'styled-jsx/css';
import VideoPlayer from '@/components/VideoPlayer';

export default function Home() {
  return (
    <Theme>
      <Head>
        <title>Vibes - AI-Powered Music Videos</title>
        <link rel="icon" href="/public/vibes-Logo.png" />
      </Head>
      <main>
        <Header />
        <Hero />
        <VideoPlayer src="demo.mp4" width="100%" />
        <Features />
        <Testimonials />
        <Pricing />
        <ContactForm />
        <Footer />
      </main>
    </Theme>
  );
}