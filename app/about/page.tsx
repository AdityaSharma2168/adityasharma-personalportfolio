"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import ParticleBackground from "@/components/ParticleBackground"
import ScrollReveal from "@/components/ScrollReveal"

export default function About() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

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
          <h1 className="text-3xl md:text-4xl font-bold mb-12 text-center yellow-gradient">About Me</h1>
        </ScrollReveal>

        <div className="card-minimal p-8">
          <div className="flex flex-col md:flex-row items-start gap-8 mb-8">
            <div className="md:w-1/3">
              <ScrollReveal delay={200}>
                <div className="rounded-xl overflow-hidden border-2 border-yellow-400 shadow-lg shadow-yellow-400/20 mx-auto max-w-[280px]">
                  <Image
                    src="/images/aditya-rugby.jpeg"
                    alt="Aditya Sharma playing rugby for SJSU"
                    width={400}
                    height={600}
                    className="object-cover w-full"
                  />
                </div>
              </ScrollReveal>
            </div>

            <div className="md:w-2/3 space-y-6">
              <ScrollReveal delay={300}>
                <p className="text-white leading-relaxed">
                  I'm a Software/Systems Engineering student at San Jose State University with a strong foundation in
                  Software Engineering, Data Science, and Cybersecurity. With a GPA of 3.8, I'm on track to graduate in
                  May 2027.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={400}>
                <p className="text-white leading-relaxed">
                  I've interned at Nokia and StarHub, and I'm currently working at BlueVoyant for summer 2025 as a
                  security engineer. Through these experiences, I've developed ETL pipelines, created data
                  visualizations, and built full-stack applications using various technologies including Python, Java,
                  React, and AWS services.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={500}>
                <p className="text-white leading-relaxed">
                  I'm passionate about leveraging technology to solve complex problems and am proficient in multiple
                  programming languages and frameworks including Python, Java, JavaScript, React, Node.js, and various
                  ML/Cloud technologies. Outside of tech, I'm an active member of the SJSU Rugby team, where I develop
                  teamwork and leadership skills.
                </p>
              </ScrollReveal>
            </div>
          </div>

          {/* Company Logos Section */}
          <ScrollReveal delay={600}>
            <h2 className="text-xl font-semibold mb-6 text-center yellow-gradient">Experience With</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {/* BlueVoyant Logo */}
              <div className="card-minimal p-6 flex items-center justify-center h-32 hover:border-yellow-400/30 hover:shadow-lg hover:shadow-yellow-400/10 transition-all duration-300">
                <div className="relative w-full h-full">
                  <Image src="/images/bluevoyant-logo-new.png" alt="BlueVoyant" fill className="object-contain" />
                </div>
              </div>

              {/* Nokia Logo */}
              <div className="card-minimal p-6 flex items-center justify-center h-32 hover:border-yellow-400/30 hover:shadow-lg hover:shadow-yellow-400/10 transition-all duration-300">
                <div className="relative w-full h-full">
                  <Image src="/images/nokia-logo-new.png" alt="Nokia" fill className="object-contain" />
                </div>
              </div>

              {/* StarHub Logo */}
              <div className="card-minimal p-6 flex items-center justify-center h-32 hover:border-yellow-400/30 hover:shadow-lg hover:shadow-yellow-400/10 transition-all duration-300">
                <div className="relative w-full h-full">
                  <Image src="/images/starhub-logo-new.png" alt="StarHub" fill className="object-contain" />
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </main>
  )
}
