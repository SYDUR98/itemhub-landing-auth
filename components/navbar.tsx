"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Menu, X, Package } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const router = useRouter()

  useEffect(() => {
    async function checkAuth() {
      try {
        const response = await fetch("/api/auth/check")
        const data = await response.json()
        setIsAuthenticated(data.authenticated)
      } catch {
        setIsAuthenticated(false)
      }
    }
    checkAuth()
  }, [])

  async function handleLogout() {
    try {
      await fetch("/api/auth/logout", { method: "POST" })
      setIsAuthenticated(false)
      router.push("/")
      router.refresh()
    } catch (error) {
      console.error("Logout failed:", error)
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <Package className="h-6 w-6" />
          <span className="text-xl font-bold">ItemHub</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
            Home
          </Link>
          <Link href="/items" className="text-sm font-medium transition-colors hover:text-primary">
            Items
          </Link>
          {isAuthenticated && (
            <Link href="/add-item" className="text-sm font-medium transition-colors hover:text-primary">
              Add Item
            </Link>
          )}
          {!isAuthenticated && (
            <Link href="/login" className="text-sm font-medium transition-colors hover:text-primary">
              Login
            </Link>
          )}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          {isAuthenticated ? (
            <Button variant="outline" onClick={handleLogout}>
              Sign Out
            </Button>
          ) : (
            <>
              <Button asChild variant="outline">
                <Link href="/login">Sign In</Link>
              </Button>
              <Button asChild>
                <Link href="/items">Browse Items</Link>
              </Button>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-border">
          <nav className="container mx-auto flex flex-col gap-4 p-4">
            <Link
              href="/"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/items"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Items
            </Link>
            {isAuthenticated && (
              <Link
                href="/add-item"
                className="text-sm font-medium transition-colors hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Add Item
              </Link>
            )}
            {!isAuthenticated && (
              <Link
                href="/login"
                className="text-sm font-medium transition-colors hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </Link>
            )}
            <div className="flex flex-col gap-2 pt-4">
              {isAuthenticated ? (
                <Button variant="outline" onClick={handleLogout}>
                  Sign Out
                </Button>
              ) : (
                <>
                  <Button asChild variant="outline">
                    <Link href="/login">Sign In</Link>
                  </Button>
                  <Button asChild>
                    <Link href="/items">Browse Items</Link>
                  </Button>
                </>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
