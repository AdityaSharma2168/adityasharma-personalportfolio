import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk } from "next/font/google"
import "./globals.css"
import Header from "@/components/Header"

// Initialize the Space Grotesk font
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-space-grotesk",
})

export const metadata: Metadata = {
  title: "Aditya Sharma | SWE/Data Science/Cybersecurity",
  description:
    "Personal portfolio of Aditya Sharma - Software Engineering, Data Science, and Cybersecurity professional",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${spaceGrotesk.variable}`}>
      <body className={`bg-dark-900 text-gray-100 min-h-screen ${spaceGrotesk.className}`}>
        <Header />
        {children}
      </body>
    </html>
  )
}
