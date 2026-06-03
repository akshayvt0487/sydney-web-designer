import { NextRequest, NextResponse } from "next/server";
import { sendFormSubmissionEmail } from "@/lib/email";
import { saveToGoogleSheets } from "@/lib/google-sheets";

const validFormTypes = new Set([
  "contact",
  "seoAudit",
  "adsAudit",
  "consultation",
]);

function stringValue(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const type = stringValue(body.type);
    const name = stringValue(body.name);
    const email = stringValue(body.email);
    const phone = stringValue(body.phone);

    if (!validFormTypes.has(type)) {
      return NextResponse.json(
        { error: "Invalid form type." },
        { status: 400 }
      );
    }

    if (!name || !email || !phone) {
      return NextResponse.json(
        {
          error: "Missing required fields: name, email, and phone are required.",
        },
        { status: 400 }
      );
    }

    const submission = {
      id: stringValue(body.id) || Date.now().toString(),
      type,
      name,
      email,
      phone,
      website: stringValue(body.website),
      company: stringValue(body.company),
      projectType: stringValue(body.projectType),
      seoGoal: stringValue(body.seoGoal),
      adSpend: stringValue(body.adSpend),
      service: stringValue(body.service),
      message: stringValue(body.message),
      status: stringValue(body.status) || "new",
      submittedAt: stringValue(body.submittedAt) || new Date().toISOString(),
      sourcePage: stringValue(body.sourcePage),
      sourceUrl: stringValue(body.sourceUrl),
    };

    await saveToGoogleSheets({
      kind: "lead",
      formOrigin: "popup-or-inline-service-form",
      ...submission,
    });

    try {
      const emailResult = await sendFormSubmissionEmail(submission);

      if (!emailResult.success) {
        console.warn(
          "Form submission was saved to Google Sheets, but email notification failed.",
          emailResult.error
        );
      }
    } catch (emailError) {
      console.error(
        "Form submission was saved to Google Sheets, but email notification threw an error.",
        emailError
      );
    }

    return NextResponse.json({
      success: true,
      id: submission.id,
    });
  } catch (error) {
    console.error("Error saving form submission:", error);

    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Failed to save submission.",
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    {
      error:
        "New submissions are now stored in Google Sheets. Use the spreadsheet to view leads.",
    },
    { status: 410 }
  );
}