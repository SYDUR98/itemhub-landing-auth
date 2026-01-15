import Link from "next/link"
import { redirect } from "next/navigation"
import { cookies } from "next/headers"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { LoginForm } from "@/components/login-form"

export default async function LoginPage() {
  const cookieStore = await cookies()
  const authCookie = cookieStore.get("auth")

  // Redirect if already logged in
  if (authCookie?.value === "authenticated") {
    redirect("/items")
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 flex items-center justify-center py-12">
        <div className="container mx-auto px-4 flex flex-col items-center">
          <LoginForm />
          <p className="mt-4 text-sm text-muted-foreground">
            Don&apos;t have an account?{" "}
            <Link href="/" className="text-primary hover:underline">
              Learn more
            </Link>
          </p>
        </div>
      </main>
      <Footer />
    </div>
  )
}
