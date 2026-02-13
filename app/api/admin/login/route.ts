import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();

    // In production, validate against database
    // For now, use environment variables
    const adminEmail = process.env.ADMIN_EMAIL || "admin@dsigns.com.au";
    const adminPassword = process.env.ADMIN_PASSWORD || "Admin@2024";

    if (email === adminEmail && password === adminPassword) {
      // Set authentication cookie
      const authToken = process.env.ADMIN_AUTH_TOKEN || "sydney-web-designer-admin-2024";

      cookies().set("admin_auth", authToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 60 * 60 * 24 * 7, // 7 days
      });

      return NextResponse.json({ success: true });
    }

    return NextResponse.json(
      { error: "Invalid email or password" },
      { status: 401 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "An error occurred" },
      { status: 500 }
    );
  }
}
