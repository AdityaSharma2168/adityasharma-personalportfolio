import Image from "next/image"
import Link from "next/link"
import { Github, ExternalLink } from "lucide-react"

interface Project {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  github: string | null
  demo: string | null
  category?: string
}

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  // Check if PM tag exists and highlight it
  const hasPMTag = project.tags.includes("PM")

  return (
    <div className="card-minimal overflow-hidden shadow-lg hover:shadow-yellow-400/10 transition-all duration-300 hover:translate-y-[-5px] hover:border-yellow-400/30 h-full flex flex-col">
      <div className="relative h-48">
        <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />

        {project.category && (
          <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-yellow-400/80 backdrop-blur-sm text-black text-xs font-semibold">
            {project.category}
          </div>
        )}

        {/* Add PM badge if it exists */}
        {hasPMTag && (
          <div className="absolute top-3 right-[85px] px-3 py-1 rounded-full bg-amber-300/90 backdrop-blur-sm text-black text-xs font-semibold">
            PM
          </div>
        )}
      </div>

      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-bold mb-2 text-yellow-400">{project.title}</h3>

        <p className="text-white mb-4 flex-grow">{project.description}</p>

        <div className="mt-auto">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className={`px-2 py-1 text-xs font-medium rounded-full ${
                  tag === "PM" ? "bg-amber-300/90 text-black font-semibold" : "bg-dark-700/70 text-yellow-400"
                }`}
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex gap-3">
            {project.github && (
              <Link
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-dark-700/70 hover:bg-dark-700 text-yellow-400 transition-colors"
                aria-label="View GitHub repository"
              >
                <Github size={20} />
              </Link>
            )}
            {project.demo && (
              <Link
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-dark-700/70 hover:bg-dark-700 text-yellow-400 transition-colors"
                aria-label="View live demo"
              >
                <ExternalLink size={20} />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
