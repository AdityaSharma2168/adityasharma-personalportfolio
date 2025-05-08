"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import ParticleBackground from "@/components/ParticleBackground"
import ScrollReveal from "@/components/ScrollReveal"
import { CheckCircle } from "lucide-react"

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
          <h1 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-green-400">
            About Me
          </h1>
        </ScrollReveal>

        <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-8 shadow-xl border border-gray-700/50">
          <div className="flex flex-col md:flex-row items-start gap-8 mb-12">
            <div className="md:w-1/3">
              <ScrollReveal delay={200}>
                <div className="rounded-xl overflow-hidden border-4 border-cyan-400 shadow-lg shadow-cyan-400/20 mx-auto max-w-[280px]">
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
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-cyan-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-300 leading-relaxed">
                    I'm a Software/Systems Engineering student at San Jose State University with a strong foundation in
                    Software Engineering, Data Science, and Cybersecurity. With a GPA of 3.8, I'm on track to graduate
                    in May 2027.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={400}>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-cyan-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-300 leading-relaxed">
                    My professional experience includes internships at Nokia as a Data Science Intern and StarHub as a
                    Full-Stack Engineer Intern, where I developed ETL pipelines, created data visualizations, and built
                    full-stack applications using various technologies including Python, Java, React, and AWS services.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={500}>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-cyan-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-300 leading-relaxed">
                    I'm passionate about leveraging technology to solve complex problems and am proficient in multiple
                    programming languages and frameworks including Python, Java, JavaScript, React, Node.js, and various
                    ML/Cloud technologies. Outside of tech, I'm an active member of the SJSU Rugby team, where I develop
                    teamwork and leadership skills.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>

          {/* Company Logos Section */}
          <ScrollReveal delay={600}>
            <div className="mt-12">
              <h2 className="text-xl font-semibold mb-6 text-center text-gray-200 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-green-400">
                Experience With
              </h2>
              <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
                {/* Nokia Logo */}
                <div className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-xl hover:bg-gray-700/50 transition-all duration-300 w-40 h-32 flex items-center justify-center border border-gray-700/50 hover:border-cyan-400/30 hover:shadow-lg hover:shadow-cyan-400/10 transform hover:-translate-y-1">
                  <Image src="/images/nokia-logo.png" alt="Nokia" width={120} height={60} className="object-contain" />
                </div>

                {/* StarHub Logo */}
                <div className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-xl hover:bg-gray-700/50 transition-all duration-300 w-40 h-32 flex items-center justify-center border border-gray-700/50 hover:border-cyan-400/30 hover:shadow-lg hover:shadow-cyan-400/10 transform hover:-translate-y-1">
                  <Image
                    src="/images/starhub-logo.png"
                    alt="StarHub"
                    width={120}
                    height={60}
                    className="object-contain"
                  />
                </div>

                {/* Enterprise Neurosystem Logo */}
                <div className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-xl hover:bg-gray-700/50 transition-all duration-300 w-40 h-32 flex items-center justify-center border border-gray-700/50 hover:border-cyan-400/30 hover:shadow-lg hover:shadow-cyan-400/10 transform hover:-translate-y-1">
                  <Image
                    src="/images/enterprise-neurosystem-logo.png"
                    alt="Enterprise Neurosystem"
                    width={120}
                    height={60}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </main>
  )
}
