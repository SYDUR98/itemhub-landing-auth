export function StatsSection() {
  const stats = [
    { value: "10K+", label: "Active Users" },
    { value: "50K+", label: "Items Listed" },
    { value: "99.9%", label: "Uptime" },
    { value: "24/7", label: "Support" },
  ]

  return (
    <section className="border-y border-border bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center py-12 border-r border-border last:border-r-0 md:[&:nth-child(2)]:border-r md:[&:nth-child(4)]:border-r-0"
            >
              <span className="text-3xl md:text-4xl font-bold">{stat.value}</span>
              <span className="mt-2 text-sm text-muted-foreground">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
