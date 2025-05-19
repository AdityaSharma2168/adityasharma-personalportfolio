"use client"

import Image from "next/image"
import ProjectCard from "@/components/ProjectCard"
import ParticleBackground from "@/components/ParticleBackground"
import ScrollReveal from "@/components/ScrollReveal"

const projects = [
  {
    id: 1,
    title: "CampusNest (1st Place)",
    description:
      "Built a full-stack housing platform using TypeScript/Node.js/Express, containerized with Docker on AWS ECS, serving 1000+ users across 10+ colleges. Created roommate-matching algorithms and chatbot services (Socket.io, JWT) processing 1k+ messages, improving match satisfaction by 85%.",
    image: "/images/campusnest.png",
    tags: ["Node.js", "Express", "MongoDB", "React", "Docker", "AWS"],
    github: "https://github.com/AdityaSharma2168/betterdorm",
    demo: null,
    category: "SWE",
  },
  {
    id: 2,
    title: "RepoAI",
    description:
      "Platform offering modular AI tools (text summarization, sentiment analysis) with a FastAPI backend and React frontend. Designed a secure RESTful API with JWT auth and a plugin system for user-contributed AI tools. Implemented advanced caching mechanisms and rate limiting to ensure optimal performance even under high load.",
    image: "/images/repoai.png",
    tags: ["FastAPI", "React", "Docker", "JavaScript"],
    github: "https://github.com/AdityaSharma2168/RepoAI",
    demo: null,
    category: "SWE",
  },
  {
    id: 3,
    title: "PunchLineBets",
    description:
      "Creating a UFC betting analytics platform with agentic frameworks to optimize portfolios, scrapes live odds with OpenCV while using LLAMA via GROQ API for predictive modeling. Developed custom algorithms to analyze fighter statistics, historical performance, and real-time data to provide users with informed betting recommendations and risk assessments.",
    image: "/images/ufc-logo.png",
    tags: ["Computer Vision", "GROQ API", "LLAMA"],
    github: null,
    demo: null,
    category: "AI",
  },
  {
    id: 5,
    title: "Teacher Portal at StarHub",
    description:
      "Developed a full-stack 'Teacher Portal' to streamline course and grade management for instructors, utilizing SQL, Java, Python, and PHP. Integrated with PostgreSQL for data storage, Spring Boot for a RESTful API backend, and ReactJS for the user interface. Implemented features including automated grading, attendance tracking, assignment submission, and parent communication tools. The system reduced administrative workload by 40% and improved parent-teacher communication efficiency by 65%.",
    image: "/images/starhub-logo.png",
    tags: ["Java", "Spring Boot", "React", "PostgreSQL", "AWS"],
    github: null,
    demo: null,
    category: "SWE",
  },
  {
    id: 6,
    title: "Data Visualization Dashboards",
    description:
      "Created dashboards in Apache Superset to enhance data visualization by 23%, along with custom color palettes and e-charts for single and dual access charts. Developed interactive visualizations for telecom network performance metrics, customer usage patterns, and service quality indicators. Implemented drill-down capabilities, custom filters, and automated reporting features that enabled stakeholders to identify trends and make data-driven decisions, resulting in a 15% improvement in network optimization strategies.",
    image: "/images/nokia-logo.png",
    tags: ["Apache Superset", "Data Visualization", "Python"],
    github: null,
    demo: null,
    category: "Data Science",
  },
]

export default function Projects() {
  return (
    <main className="relative min-h-screen pt-24 pb-16 px-4 overflow-hidden" id="projects">
      {/* Particle Background */}
      <ParticleBackground />

      {/* SJSU Logo Background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
        <div className="relative w-[800px] h-[800px]">
          <Image src="/images/sjsu-logo.png" alt="SJSU Spartan Logo" fill className="object-contain" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto z-10 relative">
        <ScrollReveal>
          <h1 className="text-3xl md:text-4xl font-bold mb-12 text-center yellow-gradient">My Projects</h1>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ScrollReveal key={project.id} delay={200 + index * 100}>
              <ProjectCard project={project} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </main>
  )
}
