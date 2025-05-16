import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Code2, Laptop, Palette, Github, Linkedin, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-muted/50">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center mb-16">
          <div className="md:col-span-1 flex justify-center">
            <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-primary">
              <Image
                src="/placeholder.svg?height=256&width=256"
                alt="Profile"
                width={256}
                height={256}
                className="object-cover"
                priority
              />
            </div>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Who I Am</h3>
            <p className="text-muted-foreground mb-6">
            I'm a second-year computer science student with a strong foundation in data structures, algorithms, data science, databases, artificial intelligence, and machine learning. I’ve built several personal projects using both frontend and backend technologies, gaining hands-on experience with tools like MongoDB, React, and Node.js.
            I'm passionate about applying what I learn to real-world projects, continuously improving my skills, and exploring new areas in software development and AI.
            </p>
            <p className="text-muted-foreground mb-6">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or
              enjoying outdoor activities.
            </p>
            <div className="flex gap-4">
              <Button variant="outline" size="icon" asChild>
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a
                  href="https://www.linkedin.com/in/fahd-rashdan-5007682a8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app "
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a
                  href="https://x.com/fahdrashdan?s=21"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                >
                  <Twitter className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-center mb-8">My Skills</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-2 rounded-full bg-primary/10">
                  <Code2 className="h-6 w-6 text-primary" />
                </div>
                <h4 className="text-xl font-semibold">Frontend Development</h4>
              </div>
              <p className="text-muted-foreground">React, Next.js, TypeScript, Tailwind CSS, HTML/CSS, JavaScript</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-2 rounded-full bg-primary/10">
                  <Laptop className="h-6 w-6 text-primary" />
                </div>
                <h4 className="text-xl font-semibold">Backend Development</h4>
              </div>
              <p className="text-muted-foreground">Node.js, Express, MongoDB, PostgreSQL, RESTful APIs, GraphQL</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-2 rounded-full bg-primary/10">
                  <Palette className="h-6 w-6 text-primary" />
                </div>
                <h4 className="text-xl font-semibold">UI/UX Design</h4>
              </div>
              <p className="text-muted-foreground">Figma, Responsive Design, Accessibility, User Experience</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
