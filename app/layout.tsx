import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/Header"

const inter = Inter({ subsets: ["latin"] })

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
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-gray-900 text-gray-100 min-h-screen`}>
        <Header />
        {children}
      </body>
    </html>
  )
}
