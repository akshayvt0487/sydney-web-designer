import { NextRequest, NextResponse } from "next/server";
import { sendContactSubmissionEmail } from "@/lib/email";
import { saveToGoogleSheets } from "@/lib/google-sheets";

function stringValue(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const firstName = stringValue(body.firstName);
    const lastName = stringValue(body.lastName);
    const email = stringValue(body.email);
    const phone = stringValue(body.phone);
    const message = stringValue(body.message);

    if (!firstName || !lastName || !email || !phone || !message) {
      return NextResponse.json(
        {
          error:
            "First name, last name, email, phone, and message are required.",
        },
        { status: 400 }
      );
    }

    const submission = {
      id: stringValue(body.id) || Date.now().toString(),
      type: "contact-page",
      firstName,
      lastName,
      name: `${firstName} ${lastName}`.trim(),
      email,
      phone,
      website: stringValue(body.website),
      service: stringValue(body.service),
      message,
      status: stringValue(body.status) || "new",
      submittedAt: stringValue(body.submittedAt) || new Date().toISOString(),
      sourcePage: stringValue(body.sourcePage) || "/contact",
      sourceUrl: stringValue(body.sourceUrl),
    };

    await saveToGoogleSheets({
      kind: "lead",
      formOrigin: "contact-page",
      ...submission,
    });

    try {
      const emailResult = await sendContactSubmissionEmail(submission);

      if (!emailResult.success) {
        console.warn(
          "Contact submission was saved to Google Sheets, but email notification failed.",
          emailResult.error
        );
      }
    } catch (emailError) {
      console.error(
        "Contact submission was saved to Google Sheets, but email notification threw an error.",
        emailError
      );
    }

    return NextResponse.json({
      success: true,
      id: submission.id,
    });
  } catch (error) {
    console.error("Error saving contact submission:", error);

    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Failed to save contact submission.",
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    {
      error:
        "New contact submissions are now stored in Google Sheets. Use the spreadsheet to view leads.",
    },
    { status: 410 }
  );
}