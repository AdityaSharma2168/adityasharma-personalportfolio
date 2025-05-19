"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import ParticleBackground from "@/components/ParticleBackground"
import { Github, Linkedin } from "lucide-react"

export default function Home() {
  const titles = ["Product Management", "SWE", "Data Science", "Cybersecurity"]
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0)
  const [displayTitle, setDisplayTitle] = useState(titles[0])
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    const typingInterval = setInterval(() => {
      const nextIndex = (currentTitleIndex + 1) % titles.length
      setCurrentTitleIndex(nextIndex)
      setDisplayTitle(titles[nextIndex])
    }, 2000)

    return () => clearInterval(typingInterval)
  }, [currentTitleIndex])

  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Particle Background */}
      <ParticleBackground />

      {/* SJSU Logo Background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
        <div className="relative w-[800px] h-[800px]">
          <Image src="/images/sjsu-logo.png" alt="SJSU Spartan Logo" fill className="object-contain" />
        </div>
      </div>

      <div className="z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="mb-8 relative">
          <div className="w-40 h-40 sm:w-48 sm:h-48 mx-auto rounded-full overflow-hidden border-2 border-yellow-400 shadow-lg shadow-yellow-400/20">
            <Image
              src="/images/aditya-profile.png"
              alt="Aditya Sharma"
              width={200}
              height={200}
              className="object-cover"
              priority
            />
          </div>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 yellow-gradient">Aditya Sharma</h1>

        <div className="h-8 mb-6">
          <p className="text-xl sm:text-2xl text-white inline-block">
            <span className="typing-animation">{displayTitle}</span>
          </p>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center gap-4 mb-8">
          <a
            href="https://github.com/AdityaSharma2168"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-dark-700/70 hover:bg-dark-700 text-yellow-400 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-yellow-400/20"
            aria-label="GitHub Profile"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/aditya-sharma216"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-dark-700/70 hover:bg-dark-700 text-yellow-400 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-yellow-400/20"
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={24} />
          </a>
        </div>

        <Link
          href="/projects"
          className="inline-block px-8 py-3 rounded-full btn-yellow transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-yellow-400/30"
        >
          View My Work
        </Link>
      </div>
    </main>
  )
}
