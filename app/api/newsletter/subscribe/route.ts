import { NextRequest, NextResponse } from "next/server";
import { sendNewsletterSubscriptionEmail } from "@/lib/email";
import { saveToGoogleSheets } from "@/lib/google-sheets";

function stringValue(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const email = stringValue(body.email).toLowerCase();

    if (!email) {
      return NextResponse.json(
        { error: "Email is required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format." },
        { status: 400 }
      );
    }

    const submittedAt = new Date().toISOString();

    await saveToGoogleSheets({
      kind: "newsletter",
      email,
      submittedAt,
      sourcePage: stringValue(body.sourcePage),
      sourceUrl: stringValue(body.sourceUrl),
    });

    try {
      const emailResult = await sendNewsletterSubscriptionEmail({
        email,
        submittedAt,
      });

      if (!emailResult.success) {
        console.warn(
          "Newsletter subscription was saved to Google Sheets, but email notification failed.",
          emailResult.error
        );
      }
    } catch (emailError) {
      console.error(
        "Newsletter subscription was saved to Google Sheets, but email notification threw an error.",
        emailError
      );
    }

    return NextResponse.json({
      success: true,
      message: "Successfully subscribed to newsletter.",
    });
  } catch (error) {
    const typedError = error as Error & { code?: string };

    if (typedError.code === "DUPLICATE") {
      return NextResponse.json(
        { error: "This email is already subscribed to our newsletter." },
        { status: 400 }
      );
    }

    console.error("Error processing newsletter subscription:", error);

    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "An error occurred while processing your subscription.",
      },
      { status: 500 }
    );
  }
}