export interface Item {
  id: string
  name: string
  description: string
  price: number
  image: string
  category: string
  createdAt: string
}

// In-memory items store (simulating database)
export const items: Item[] = [
  {
    id: "1",
    name: "Wireless Headphones",
    description:
      "Premium noise-canceling wireless headphones with 30-hour battery life. Perfect for music lovers and professionals who need focus.",
    price: 299.99,
    image: "/wireless-headphones.png",
    category: "Electronics",
    createdAt: "2024-01-15T10:00:00Z",
  },
  {
    id: "2",
    name: "Mechanical Keyboard",
    description:
      "RGB mechanical keyboard with Cherry MX switches. Durable construction with customizable lighting effects.",
    price: 149.99,
    image: "/mechanical-keyboard-product.jpg",
    category: "Electronics",
    createdAt: "2024-01-16T11:30:00Z",
  },
  {
    id: "3",
    name: "Ergonomic Office Chair",
    description:
      "Adjustable ergonomic chair with lumbar support and breathable mesh back. Designed for all-day comfort.",
    price: 449.99,
    image: "/ergonomic-office-chair-product.jpg",
    category: "Furniture",
    createdAt: "2024-01-17T09:15:00Z",
  },
  {
    id: "4",
    name: "4K Monitor",
    description:
      "32-inch 4K UHD monitor with HDR support. Stunning visuals for creative professionals and gamers alike.",
    price: 599.99,
    image: "/4k-computer-monitor-product.jpg",
    category: "Electronics",
    createdAt: "2024-01-18T14:45:00Z",
  },
  {
    id: "5",
    name: "Standing Desk",
    description: "Electric height-adjustable standing desk with memory presets. Smooth and quiet motor operation.",
    price: 699.99,
    image: "/standing-desk-product.jpg",
    category: "Furniture",
    createdAt: "2024-01-19T08:00:00Z",
  },
  {
    id: "6",
    name: "Desk Lamp",
    description:
      "LED desk lamp with adjustable brightness and color temperature. Eye-caring technology for late-night work.",
    price: 79.99,
    image: "/modern-desk-lamp-product.jpg",
    category: "Lighting",
    createdAt: "2024-01-20T16:30:00Z",
  },
]

// Helper function to generate unique IDs
export function generateId(): string {
  return Math.random().toString(36).substring(2, 9)
}

// Add item to store
export function addItem(item: Omit<Item, "id" | "createdAt">): Item {
  const newItem: Item = {
    ...item,
    id: generateId(),
    createdAt: new Date().toISOString(),
  }
  items.push(newItem)
  return newItem
}

// Get all items
export function getItems(): Item[] {
  return items
}

// Get item by ID
export function getItemById(id: string): Item | undefined {
  return items.find((item) => item.id === id)
}
