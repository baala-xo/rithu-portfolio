import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function ProjectsPage() {
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
        <section className="container py-12 md:py-24">
          <div className="flex flex-col gap-4">
            <Button variant="ghost" size="sm" className="w-fit" asChild>
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">All Projects</h1>
            <p className="max-w-[85%] text-muted-foreground sm:text-lg">
              A collection of my work across various industries and design challenges.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 py-12">
            {/* Project 1 */}
            <div className="group relative overflow-hidden rounded-lg border">
              <Link href="/projects/finance-app" className="absolute inset-0 z-10">
                <span className="sr-only">View Project</span>
              </Link>
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src="/placeholder.svg?height=450&width=720"
                  alt="Finance App Redesign"
                  width={720}
                  height={450}
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold">Finance App Redesign</h3>
                <p className="mt-2 text-muted-foreground">
                  Reimagining a personal finance application with improved usability and visual design.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <div className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-semibold">UX Research</div>
                  <div className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-semibold">UI Design</div>
                  <div className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-semibold">Prototyping</div>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="group relative overflow-hidden rounded-lg border">
              <Link href="/projects/health-tracker" className="absolute inset-0 z-10">
                <span className="sr-only">View Project</span>
              </Link>
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src="/placeholder.svg?height=450&width=720"
                  alt="Health Tracker App"
                  width={720}
                  height={450}
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold">Health Tracker App</h3>
                <p className="mt-2 text-muted-foreground">
                  A comprehensive health monitoring application designed for accessibility and ease of use.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <div className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-semibold">User Testing</div>
                  <div className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-semibold">Interaction Design</div>
                  <div className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-semibold">Visual Design</div>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="group relative overflow-hidden rounded-lg border">
              <Link href="/projects/travel-platform" className="absolute inset-0 z-10">
                <span className="sr-only">View Project</span>
              </Link>
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src="/placeholder.svg?height=450&width=720"
                  alt="Travel Platform"
                  width={720}
                  height={450}
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold">Travel Platform</h3>
                <p className="mt-2 text-muted-foreground">
                  A travel booking platform with an intuitive booking flow and personalized recommendations.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <div className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-semibold">UX Strategy</div>
                  <div className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-semibold">
                    Information Architecture
                  </div>
                  <div className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-semibold">UI Design</div>
                </div>
              </div>
            </div>

            {/* Project 4 */}
            <div className="group relative overflow-hidden rounded-lg border">
              <Link href="/projects/e-commerce" className="absolute inset-0 z-10">
                <span className="sr-only">View Project</span>
              </Link>
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src="/placeholder.svg?height=450&width=720"
                  alt="E-commerce Redesign"
                  width={720}
                  height={450}
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold">E-commerce Redesign</h3>
                <p className="mt-2 text-muted-foreground">
                  Revamping an online shopping experience with a focus on conversion and user satisfaction.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <div className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-semibold">
                    Conversion Optimization
                  </div>
                  <div className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-semibold">UI Design</div>
                  <div className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-semibold">A/B Testing</div>
                </div>
              </div>
            </div>

            {/* Project 5 */}
            <div className="group relative overflow-hidden rounded-lg border">
              <Link href="/projects/education-platform" className="absolute inset-0 z-10">
                <span className="sr-only">View Project</span>
              </Link>
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src="/placeholder.svg?height=450&width=720"
                  alt="Education Platform"
                  width={720}
                  height={450}
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold">Education Platform</h3>
                <p className="mt-2 text-muted-foreground">
                  An online learning platform designed to enhance student engagement and knowledge retention.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <div className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-semibold">Educational UX</div>
                  <div className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-semibold">Accessibility</div>
                  <div className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-semibold">UI Design</div>
                </div>
              </div>
            </div>

            {/* Project 6 */}
            <div className="group relative overflow-hidden rounded-lg border">
              <Link href="/projects/social-app" className="absolute inset-0 z-10">
                <span className="sr-only">View Project</span>
              </Link>
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src="/placeholder.svg?height=450&width=720"
                  alt="Social Networking App"
                  width={720}
                  height={450}
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold">Social Networking App</h3>
                <p className="mt-2 text-muted-foreground">
                  A community-focused social platform that prioritizes meaningful connections and user privacy.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <div className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-semibold">Social UX</div>
                  <div className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-semibold">Interaction Design</div>
                  <div className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-semibold">Prototyping</div>
                </div>
              </div>
            </div>
          </div>
        </section>
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
