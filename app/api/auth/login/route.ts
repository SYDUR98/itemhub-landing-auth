import { NextResponse } from "next/server"
import { cookies } from "next/headers"
import { validateCredentials } from "@/lib/auth"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { email, password } = body

    if (!email || !password) {
      return NextResponse.json({ error: "Email and password are required" }, { status: 400 })
    }

    if (!validateCredentials(email, password)) {
      return NextResponse.json({ error: "Invalid email or password" }, { status: 401 })
    }

    // Set authentication cookie
    const cookieStore = await cookies()
    cookieStore.set("auth", "authenticated", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7, // 1 week
      path: "/",
    })

    return NextResponse.json({ success: true, message: "Login successful" })
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 })
  }
}
