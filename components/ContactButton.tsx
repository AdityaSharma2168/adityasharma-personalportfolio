"use client"

import type React from "react"

import { useState } from "react"
import { MessageSquare, X, Phone, Mail, Linkedin, Github } from "lucide-react"

export default function ContactButton() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    alert("Message sent! (This is a demo)")
    setIsModalOpen(false)
  }

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="fixed bottom-8 right-8 z-40 p-4 rounded-full bg-cyan-500 hover:bg-cyan-600 text-white shadow-lg shadow-cyan-500/30 transition-all duration-300 hover:scale-110"
        aria-label="Contact me"
      >
        <MessageSquare size={24} />
      </button>

      {/* Contact Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div
            className="bg-gray-800 rounded-xl shadow-2xl w-full max-w-md relative overflow-hidden border border-gray-700"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-cyan-600 to-green-600 p-4">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold text-white">Get In Touch</h2>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-white hover:text-gray-200 focus:outline-none"
                  aria-label="Close modal"
                >
                  <X size={24} />
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6">
              <div className="mb-6 space-y-2 border-b border-gray-700 pb-4">
                <div className="flex items-center gap-2">
                  <Phone size={16} className="text-cyan-400" />
                  <p className="text-gray-300">408-607-6518</p>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={16} className="text-cyan-400" />
                  <p className="text-gray-300">aditya.sharma2168@gmail.com</p>
                </div>
                <div className="flex items-center gap-2">
                  <Linkedin size={16} className="text-cyan-400" />
                  <a
                    href="https://linkedin.com/in/aditya-sharma216"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:underline"
                  >
                    linkedin.com/in/aditya-sharma216
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Github size={16} className="text-cyan-400" />
                  <a
                    href="https://github.com/AdityaSharma2168"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:underline"
                  >
                    github.com/AdityaSharma2168
                  </a>
                </div>
              </div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-gray-400"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-gray-400"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-gray-400 resize-none"
                    placeholder="Your message..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-4 bg-gradient-to-r from-cyan-500 to-green-500 hover:from-cyan-600 hover:to-green-600 text-white font-medium rounded-lg shadow-lg shadow-cyan-500/20 transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
