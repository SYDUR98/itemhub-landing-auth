import { Box, Search, Shield, Zap } from "lucide-react"

export function FeaturesSection() {
  const features = [
    {
      icon: Box,
      title: "Easy Item Management",
      description: "Add, edit, and organize your items with an intuitive interface designed for productivity.",
    },
    {
      icon: Search,
      title: "Powerful Search",
      description: "Find any item instantly with our advanced search and filtering capabilities.",
    },
    {
      icon: Shield,
      title: "Secure by Default",
      description: "Your data is protected with enterprise-grade security and authentication.",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Built on modern infrastructure for blazing fast performance at any scale.",
    },
  ]

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Everything You Need</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Powerful features to help you manage your items efficiently
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 rounded-lg border border-border bg-card hover:bg-accent/50 transition-colors"
            >
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{feature.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
