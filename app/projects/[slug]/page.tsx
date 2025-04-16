import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ExternalLink } from "lucide-react"

export default function ProjectPage({ params }: { params: { slug: string } }) {
  // In a real application, you would fetch project data based on the slug
  const projectData = {
    title: "Finance App Redesign",
    description: "Reimagining a personal finance application with improved usability and visual design.",
    client: "FinTech Solutions Inc.",
    duration: "3 months",
    role: "Lead UI/UX Designer",
    tags: ["UX Research", "UI Design", "Prototyping"],
    overview:
      "The client approached me to redesign their existing finance application which was suffering from poor user engagement and high drop-off rates. The goal was to create a more intuitive, visually appealing interface that would help users better manage their finances.",
    challenge:
      "The existing application had a complex information architecture and outdated visual design. Users found it difficult to navigate and complete basic tasks like checking their balance or making transactions.",
    process: [
      {
        title: "Research",
        description:
          "I conducted user interviews, competitive analysis, and heuristic evaluation to understand pain points and opportunities.",
      },
      {
        title: "Information Architecture",
        description: "I reorganized the app structure to create a more logical flow and reduce cognitive load.",
      },
      {
        title: "Wireframing",
        description: "I created low-fidelity wireframes to test different layouts and navigation patterns.",
      },
      {
        title: "Visual Design",
        description:
          "I developed a modern visual language with a clean, accessible interface that aligned with the brand.",
      },
      {
        title: "Prototyping & Testing",
        description: "I built interactive prototypes and conducted usability testing to validate design decisions.",
      },
    ],
    outcome:
      "The redesigned application saw a 45% increase in daily active users and a 60% reduction in support tickets related to usability issues. The client reported a 30% increase in transaction volume within the first month after launch.",
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-lg font-bold">
            <span>Shuaib Karim</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/#work" className="text-sm font-medium transition-colors hover:text-primary">
              Work
            </Link>
            <Link href="/#about" className="text-sm font-medium transition-colors hover:text-primary">
              About
            </Link>
            <Link href="/#process" className="text-sm font-medium transition-colors hover:text-primary">
              Process
            </Link>
            <Link href="/#contact" className="text-sm font-medium transition-colors hover:text-primary">
              Contact
            </Link>
          </nav>
          <Button size="sm" className="hidden md:flex">
            Resume
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <div className="container py-12 md:py-24">
          <Button variant="ghost" size="sm" className="mb-8" asChild>
            <Link href="/projects">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Link>
          </Button>

          <div className="relative aspect-[21/9] w-full overflow-hidden rounded-lg">
            <Image
              src="/placeholder.svg?height=900&width=1900"
              alt={projectData.title}
              width={1900}
              height={900}
              className="object-cover"
              priority
            />
          </div>

          <div className="mx-auto max-w-3xl py-12">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{projectData.title}</h1>
            <p className="mt-4 text-xl text-muted-foreground">{projectData.description}</p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
              <div>
                <h3 className="font-medium">Client</h3>
                <p className="text-muted-foreground">{projectData.client}</p>
              </div>
              <div>
                <h3 className="font-medium">Duration</h3>
                <p className="text-muted-foreground">{projectData.duration}</p>
              </div>
              <div>
                <h3 className="font-medium">Role</h3>
                <p className="text-muted-foreground">{projectData.role}</p>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {projectData.tags.map((tag, index) => (
                <div key={index} className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-semibold">
                  {tag}
                </div>
              ))}
            </div>

            <div className="mt-12">
              <h2 className="text-2xl font-bold">Overview</h2>
              <p className="mt-4 text-muted-foreground">{projectData.overview}</p>
            </div>

            <div className="mt-12">
              <h2 className="text-2xl font-bold">Challenge</h2>
              <p className="mt-4 text-muted-foreground">{projectData.challenge}</p>
            </div>

            <div className="mt-12">
              <h2 className="text-2xl font-bold">Process</h2>
              <div className="mt-6 grid gap-8">
                {projectData.process.map((step, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="font-bold">{step.title}</h3>
                      <p className="mt-2 text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              <div className="overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Project wireframe"
                  width={800}
                  height={600}
                  className="object-cover"
                />
              </div>
              <div className="overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Project mockup"
                  width={800}
                  height={600}
                  className="object-cover"
                />
              </div>
            </div>

            <div className="mt-12">
              <h2 className="text-2xl font-bold">Outcome</h2>
              <p className="mt-4 text-muted-foreground">{projectData.outcome}</p>
            </div>

            <div className="mt-12 flex justify-center">
              <Button asChild>
                <Link href="/#contact">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Contact Me for Similar Projects
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Shuaib Karim. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
