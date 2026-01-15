import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ItemCard } from "@/components/item-card"
import { getItems } from "@/lib/data/items"

export default function ItemsPage() {
  const items = getItems()

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl font-bold">Browse Items</h1>
              <p className="text-muted-foreground mt-2">Discover our collection of quality products</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {items.map((item) => (
                <ItemCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
