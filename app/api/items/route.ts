import { NextResponse } from "next/server"
import { getItems, addItem } from "@/lib/data/items"
import { cookies } from "next/headers"

// GET /api/items - Get all items
export async function GET() {
  const allItems = getItems()
  return NextResponse.json(allItems)
}

// POST /api/items - Add a new item (protected)
export async function POST(request: Request) {
  const cookieStore = await cookies()
  const authCookie = cookieStore.get("auth")

  if (!authCookie || authCookie.value !== "authenticated") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  try {
    const body = await request.json()
    const { name, description, price, image, category } = body

    if (!name || !description || price === undefined || !category) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const newItem = addItem({
      name,
      description,
      price: Number(price),
      image: image || "/product-item.jpg",
      category,
    })

    return NextResponse.json(newItem, { status: 201 })
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 })
  }
}
