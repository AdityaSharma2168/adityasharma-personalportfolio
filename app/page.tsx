import Image from "next/image"
import Link from "next/link"
import ParticleBackground from "@/components/ParticleBackground"
import { Github, Linkedin } from "lucide-react"

export default function Home() {
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
          <div className="w-40 h-40 sm:w-48 sm:h-48 mx-auto rounded-full overflow-hidden border-4 border-cyan-400 shadow-lg shadow-cyan-400/20">
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

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-green-400">
          Aditya Sharma
        </h1>

        <p className="text-xl sm:text-2xl mb-4 text-gray-300">SWE/Data Science/Cybersecurity</p>

        {/* Social Media Links */}
        <div className="flex justify-center gap-4 mb-8">
          <a
            href="https://github.com/AdityaSharma2168"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-800/70 hover:bg-gray-700 text-cyan-400 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-cyan-400/20"
            aria-label="GitHub Profile"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/aditya-sharma216"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-800/70 hover:bg-gray-700 text-cyan-400 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-cyan-400/20"
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={24} />
          </a>
        </div>

        <Link
          href="/projects"
          className="inline-block px-8 py-3 rounded-full bg-red-600 hover:bg-red-700 text-white font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-red-600/30"
        >
          View My Work
        </Link>
      </div>
    </main>
  )
}
