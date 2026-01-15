import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import type { Item } from "@/lib/data/items"

interface ItemCardProps {
  item: Item
}

export function ItemCard({ item }: ItemCardProps) {
  return (
    <Card className="overflow-hidden group hover:shadow-lg transition-shadow">
      <div className="relative aspect-square overflow-hidden bg-muted">
        <Image
          src={item.image || "/placeholder.svg"}
          alt={item.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <Badge className="absolute top-3 right-3">{item.category}</Badge>
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg line-clamp-1">{item.name}</h3>
        <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{item.description}</p>
        <p className="text-xl font-bold mt-3">${item.price.toFixed(2)}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button asChild className="w-full">
          <Link href={`/items/${item.id}`}>View Details</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
