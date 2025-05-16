import { ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="container flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6 animate-fade-in">
          Hi, I'm <span className="text-primary">Fahd Rashdan</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-8 animate-fade-in animation-delay-200">
          A passionate developer building amazing web experiences
        </p>
        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in animation-delay-300">
          <Button asChild size="lg">
            <a href="#projects">View My Work</a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="#contact">Get In Touch</a>
          </Button>
        </div>
        <a
          href="#about"
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce mt-16 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Scroll to About section"
        >
          <ArrowDown className="h-6 w-6" />
        </a>
      </div>
    </section>
  )
}
