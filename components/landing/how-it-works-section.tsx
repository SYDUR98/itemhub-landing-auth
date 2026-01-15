export function HowItWorksSection() {
  const steps = [
    {
      step: "01",
      title: "Create an Account",
      description: "Sign up in seconds and get access to all features.",
    },
    {
      step: "02",
      title: "Add Your Items",
      description: "Upload items with descriptions, prices, and images.",
    },
    {
      step: "03",
      title: "Organize & Manage",
      description: "Keep everything organized with categories and tags.",
    },
  ]

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">How It Works</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">Get started in three simple steps</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((item, index) => (
            <div key={index} className="relative">
              <div className="text-6xl font-bold text-primary/10">{item.step}</div>
              <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
              <p className="mt-2 text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
