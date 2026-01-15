import { redirect } from "next/navigation"
import { cookies } from "next/headers"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { AddItemForm } from "@/components/add-item-form"

export default async function AddItemPage() {
  const cookieStore = await cookies()
  const authCookie = cookieStore.get("auth")

  // Redirect unauthenticated users to login
  if (authCookie?.value !== "authenticated") {
    redirect("/login")
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 flex items-center justify-center py-12">
        <div className="container mx-auto px-4 flex flex-col items-center">
          <AddItemForm />
        </div>
      </main>
      <Footer />
    </div>
  )
}
