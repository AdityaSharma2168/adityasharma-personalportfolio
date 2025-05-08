"use client"

import Image from "next/image"
import ParticleBackground from "@/components/ParticleBackground"
import ScrollReveal from "@/components/ScrollReveal"
import { Download } from "lucide-react"

export default function Resume() {
  return (
    <main className="relative min-h-screen pt-24 pb-16 px-4 overflow-hidden">
      {/* Particle Background */}
      <ParticleBackground />

      {/* SJSU Logo Background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
        <div className="relative w-[800px] h-[800px]">
          <Image src="/images/sjsu-logo.png" alt="SJSU Spartan Logo" fill className="object-contain" />
        </div>
      </div>

      <div className="max-w-4xl mx-auto z-10 relative">
        <ScrollReveal>
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-green-400">
            My Resume
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-4 shadow-xl border border-gray-700/50">
            <div className="relative w-full">
              <Image
                src="/images/resume.png"
                alt="Aditya Sharma's Resume"
                width={1200}
                height={1600}
                className="w-full h-auto rounded-lg"
              />

              <a
                href="/images/resume.png"
                download="Aditya_Sharma_Resume.png"
                className="absolute bottom-4 right-4 p-3 rounded-full bg-cyan-500 hover:bg-cyan-600 text-white transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-cyan-500/30"
                aria-label="Download Resume"
              >
                <Download size={24} />
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </main>
  )
}
