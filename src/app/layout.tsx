import type React from "react"
import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Alarcón Dental Care",
  description: "Clínica dental del Dr. Jonathan Alarcón",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={inter.className}>
        <div className="bg-teal-800 text-white text-center py-2 text-sm">
          <div className="container mx-auto px-4">
            <div>
              <span className="hidden md:inline">¿Tienes una emergencia dental?</span> Llama ahora:
              <a href="tel:924179171" className="font-bold ml-1 hover:underline">
                924 179 171
              </a>
            </div>
          </div>
        </div>
        {children}
      </body>
    </html>
  )
}