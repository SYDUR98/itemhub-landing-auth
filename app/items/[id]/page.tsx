import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft } from "lucide-react"
import { getItemById, getItems } from "@/lib/data/items"

export function generateStaticParams() {
  const items = getItems()
  return items.map((item) => ({
    id: item.id,
  }))
}

export default async function ItemDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const item = getItemById(id)

  if (!item) {
    notFound()
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="py-12">
          <div className="container mx-auto px-4">
            <Button asChild variant="ghost" className="mb-8">
              <Link href="/items">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Items
              </Link>
            </Button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="relative aspect-square rounded-lg overflow-hidden bg-muted">
                <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" priority />
              </div>

              <div className="flex flex-col">
                <Badge className="w-fit">{item.category}</Badge>
                <h1 className="text-3xl md:text-4xl font-bold mt-4">{item.name}</h1>
                <p className="text-3xl font-bold text-primary mt-4">${item.price.toFixed(2)}</p>

                <div className="mt-8">
                  <h2 className="text-lg font-semibold">Description</h2>
                  <p className="text-muted-foreground mt-2 leading-relaxed">{item.description}</p>
                </div>

                <div className="mt-8 pt-8 border-t border-border">
                  <p className="text-sm text-muted-foreground">
                    Added on {new Date(item.createdAt).toLocaleDateString()}
                  </p>
                </div>

                <div className="mt-auto pt-8">
                  <Button size="lg" className="w-full md:w-auto">
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
