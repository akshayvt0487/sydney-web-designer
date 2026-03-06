import { NextRequest, NextResponse } from "next/server";
import { sendNewsletterSubscriptionEmail } from "@/lib/email";
import fs from "fs";
import path from "path";

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Prepare submission data
    const submissionData = {
      email,
      submittedAt: new Date().toISOString(),
    };

    // Save to JSON file
    const dataDir = path.join(process.cwd(), "data");
    const filePath = path.join(dataDir, "newsletter-subscriptions.json");

    // Ensure data directory exists
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }

    // Read existing data or initialize empty array
    let subscriptions = [];
    if (fs.existsSync(filePath)) {
      const fileContent = fs.readFileSync(filePath, "utf-8");
      subscriptions = JSON.parse(fileContent);
    }

    // Check if email already subscribed
    const alreadySubscribed = subscriptions.some(
      (sub: any) => sub.email === email
    );

    if (alreadySubscribed) {
      return NextResponse.json(
        { error: "This email is already subscribed to our newsletter" },
        { status: 400 }
      );
    }

    // Add new subscription
    subscriptions.push(submissionData);

    // Write to file
    fs.writeFileSync(filePath, JSON.stringify(subscriptions, null, 2));

    // Send email notification
    await sendNewsletterSubscriptionEmail(submissionData);

    return NextResponse.json(
      { success: true, message: "Successfully subscribed to newsletter" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing newsletter subscription:", error);
    return NextResponse.json(
      { error: "An error occurred while processing your subscription" },
      { status: 500 }
    );
  }
}
