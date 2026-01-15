import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function TestimonialsSection() {
  const testimonials = [
    {
      quote: "ItemHub has transformed how we manage our inventory. It's intuitive and powerful.",
      author: "Sarah Chen",
      role: "Product Manager",
      avatar: "SC",
    },
    {
      quote: "The best item management platform I've used. Simple, fast, and reliable.",
      author: "Michael Ross",
      role: "Small Business Owner",
      avatar: "MR",
    },
    {
      quote: "Finally, a solution that doesn't require a PhD to use. Highly recommended!",
      author: "Emily Davis",
      role: "Freelancer",
      avatar: "ED",
    },
  ]

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">What Our Users Say</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">Join thousands of satisfied users</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card">
              <CardContent className="pt-6">
                <p className="text-muted-foreground italic">"{testimonial.quote}"</p>
                <div className="mt-6 flex items-center gap-4">
                  <Avatar>
                    <AvatarImage
                      src={`/.jpg?height=40&width=40&query=${testimonial.author} avatar`}
                    />
                    <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
