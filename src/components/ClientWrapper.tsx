'use client';

import dynamic from 'next/dynamic';
import { AnimatedSection } from "./magicui/AnimatedSection";

const Header = dynamic(() => import('@/components/Header'), {
  loading: () => <div className="h-16 bg-white animate-pulse" />,
  ssr: false
});

const Hero = dynamic(() => import('@/components/Hero'), {
  loading: () => <div className="h-screen bg-white animate-pulse" />,
  ssr: false
});

const Servicios = dynamic(() => import('@/components/Servicios'), {
  loading: () => <div className="h-screen bg-white animate-pulse" />,
  ssr: false
});

const Comunicacion = dynamic(() => import('@/components/comunicacion').then(mod => mod.Comunicacion), {
  loading: () => <div className="h-screen bg-white animate-pulse" />,
  ssr: false
});

const Footer = dynamic(() => import('@/components/Footer'), {
  loading: () => <div className="h-16 bg-white animate-pulse" />,
  ssr: false
});

export default function ClientWrapper() {
  return (
    <>
      <AnimatedSection>
        <Header />
      </AnimatedSection>
      <AnimatedSection>
        <Hero />
      </AnimatedSection>
      <AnimatedSection>
        <Servicios />
      </AnimatedSection>
      <AnimatedSection>
        <Comunicacion />
      </AnimatedSection>
      <AnimatedSection>
        <Footer />
      </AnimatedSection>
    </>
  );
} 