import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance">
            The Complete Platform for <span className="text-primary">Item Management</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl text-pretty">
            Discover, manage, and organize your items with ease. Built for teams and individuals who value simplicity
            and efficiency.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
            <Button asChild size="lg">
              <Link href="/items">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/login">Sign In</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
