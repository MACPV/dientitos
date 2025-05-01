import { Comunicacion } from "@/components/comunicacion"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Servicios from "@/components/Servicios"
import { BlurFade } from "@/components/magicui/blur-fade";

export default function Version2() {
  return (
    <main className="flex min-h-screen flex-col bg-gray-50">
      <BlurFade>
        {/* Header */}
        <Header />
        {/* Hero Section */}
        <Hero />
        {/* Services Section */}
        <Servicios />

        {/* Team Section */}

        <Comunicacion />
        {/* Footer */}
        <Footer />
      </BlurFade>
    </main>
  )
}

