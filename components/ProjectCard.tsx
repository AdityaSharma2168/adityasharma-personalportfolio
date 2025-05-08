import Image from "next/image"
import Link from "next/link"
import { Github } from "lucide-react"

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
  return (
    <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-cyan-400/10 transition-all duration-300 hover:translate-y-[-5px] border border-gray-700/50 hover:border-cyan-400/30 h-full flex flex-col">
      <div className="relative h-48">
        <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />

        {project.category && (
          <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-cyan-500/80 backdrop-blur-sm text-white text-xs font-semibold">
            {project.category}
          </div>
        )}
      </div>

      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-bold mb-2 text-cyan-400">{project.title}</h3>

        <p className="text-gray-300 mb-4 flex-grow">{project.description}</p>

        <div className="mt-auto">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag, index) => (
              <span key={index} className="px-2 py-1 text-xs font-medium bg-gray-700/70 text-cyan-300 rounded-full">
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
                className="p-2 rounded-full bg-gray-700/70 hover:bg-gray-600 text-cyan-400 transition-colors"
                aria-label="View GitHub repository"
              >
                <Github size={20} />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
