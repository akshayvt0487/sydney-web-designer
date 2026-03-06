import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), "data", "newsletter-subscriptions.json");

    // Check if file exists
    if (!fs.existsSync(filePath)) {
      return NextResponse.json([]);
    }

    // Read and parse the file
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const subscriptions = JSON.parse(fileContent);

    return NextResponse.json(subscriptions);
  } catch (error) {
    console.error("Error reading newsletter subscriptions:", error);
    return NextResponse.json({ error: "Failed to fetch subscriptions" }, { status: 500 });
  }
}
