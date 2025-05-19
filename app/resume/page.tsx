"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import ParticleBackground from "@/components/ParticleBackground"
import ScrollReveal from "@/components/ScrollReveal"
import { Download } from "lucide-react"

export default function Resume() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  // Function to download the resume as a PNG
  const downloadResume = () => {
    // Fetch the image and convert to blob
    fetch("/images/resume-updated.png")
      .then((response) => response.blob())
      .then((blob) => {
        // Create a blob URL
        const blobUrl = URL.createObjectURL(blob)

        // Create a link element
        const link = document.createElement("a")
        link.href = blobUrl
        link.download = "Aditya_Sharma_Resume.png"

        // Append to the document, click it, and remove it
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)

        // Release the blob URL
        URL.revokeObjectURL(blobUrl)
      })
      .catch((error) => {
        console.error("Error downloading resume:", error)
        alert("There was an error downloading the resume. Please try again.")
      })
  }

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
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center yellow-gradient">My Resume</h1>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="card-minimal p-4">
            <div className="relative w-full">
              <Image
                src="/images/resume-updated.png"
                alt="Aditya Sharma's Resume"
                width={1200}
                height={1600}
                className="w-full h-auto rounded-lg"
                priority
              />

              {/* Download Button */}
              <div className="absolute bottom-4 right-4">
                {isClient && (
                  <button
                    onClick={downloadResume}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg btn-yellow transition-all duration-300 hover:shadow-lg hover:shadow-yellow-400/30"
                    aria-label="Download Resume as PNG"
                  >
                    <Download size={18} />
                    <span>Download Resume</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </main>
  )
}
