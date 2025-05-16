import { ExternalLink, Github } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"

// Project data
const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce platform built with Next.js, TypeScript, and Stripe integration.",
    image: "/placeholder.svg?height=300&width=600",
    tags: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS"],
    github: "https://github.com/yourusername/ecommerce",
    demo: "https://ecommerce-demo.com",
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A productivity app for managing tasks and projects with real-time updates.",
    image: "/placeholder.svg?height=300&width=600",
    tags: ["React", "Firebase", "Redux", "Material UI"],
    github: "https://github.com/yourusername/task-manager",
    demo: "https://task-manager-demo.com",
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "A weather application that provides real-time weather data and forecasts.",
    image: "/placeholder.svg?height=300&width=600",
    tags: ["JavaScript", "Weather API", "Chart.js", "CSS"],
    github: "https://github.com/yourusername/weather-app",
    demo: "https://weather-app-demo.com",
    
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          My <span className="text-primary">Projects</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden flex flex-col h-full">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex gap-4">
                <Button variant="outline" size="sm" className="flex items-center gap-2" asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4" />
                    <span>Code</span>
                  </a>
                </Button>
                <Button size="sm" className="flex items-center gap-2" asChild>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4" />
                    <span>Demo</span>
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
