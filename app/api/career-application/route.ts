import { NextRequest, NextResponse } from "next/server";
import { saveToGoogleSheets } from "@/lib/google-sheets";
import { sendCareerApplicationEmail } from "@/lib/email";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MAX_TOTAL_FILE_SIZE = 3 * 1024 * 1024; // Must match Apps Script: 3MB total
const ALLOWED_EXTENSIONS = [".pdf", ".doc", ".docx"];

interface UploadedDocumentPayload {
  name: string;
  mimeType: string;
  size: number;
  base64: string;
}

function getString(formData: FormData, key: string): string {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function hasAllowedExtension(fileName: string): boolean {
  const lowerName = fileName.toLowerCase();
  return ALLOWED_EXTENSIONS.some((extension) =>
    lowerName.endsWith(extension)
  );
}

async function fileToPayload(
  file: File | null
): Promise<UploadedDocumentPayload | null> {
  if (!file || file.size === 0) {
    return null;
  }

  const arrayBuffer = await file.arrayBuffer();
  const base64 = Buffer.from(arrayBuffer).toString("base64");

  return {
    name: file.name,
    mimeType: file.type || "application/octet-stream",
    size: file.size,
    base64,
  };
}

function readableValue(value: string): string {
  if (!value) return "";

  const labels: Record<string, string> = {
    "web-designer": "Web Designer",
    "seo-specialist": "SEO Specialist",
    "google-ads-specialist": "Google Ads Specialist",
    "meta-ads-specialist": "Meta Ads Specialist",
    "performance-marketer": "Performance Marketer",
    "project-manager": "Project Manager",
    "content-writer": "Content Writer",
    fulltime: "Full-Time",
    parttime: "Part-Time",
    casual: "Casual",
    contract: "Contract",
    internship: "Internship",
    onsite: "Onsite",
    remote: "Remote",
    hybrid: "Hybrid",
    flexible: "Flexible / Open to Discussion",
    immediate: "Immediate",
    "1-week": "1 Week Notice",
    "2-weeks": "2 Weeks Notice",
    "1-month": "1 Month Notice",
    standard: "Standard Hours",
    early: "Early Hours",
    late: "Late Hours",
    shifts: "Open to Shift Work",
    website: "Company Website",
    linkedin: "LinkedIn",
    seek: "SEEK",
    indeed: "Indeed",
    referral: "Referral",
    other: "Other",
  };

  if (labels[value]) {
    return labels[value];
  }

  return value
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (character) => character.toUpperCase());
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();

    const firstName = getString(formData, "firstName");
    const lastName = getString(formData, "lastName");
    const email = getString(formData, "email").toLowerCase();
    const phone = getString(formData, "phone");

    const position = getString(formData, "position");
    const linkedin = getString(formData, "linkedin");
    const portfolio = getString(formData, "portfolio");
    const experience = getString(formData, "experience");
    const currentPosition = getString(formData, "currentPosition");
    const currentCompany = getString(formData, "currentCompany");
    const whyJoin = getString(formData, "whyJoin");
    const keyStrengths = getString(formData, "keyStrengths");
    const workLocation = getString(formData, "workLocation");
    const employmentType = getString(formData, "employmentType");
    const daysAvailable = getString(formData, "daysAvailable");
    const hoursAvailable = getString(formData, "hoursAvailable");
    const startAvailability = getString(formData, "startAvailability");
    const preferredHours = getString(formData, "preferredHours");
    const howHeard = getString(formData, "howHeard");
    const additionalComments = getString(formData, "additionalComments");
    const consent = getString(formData, "consent") === "true";

    const resumeValue = formData.get("resume");
    const coverLetterValue = formData.get("coverLetter");

    const resumeFile = resumeValue instanceof File ? resumeValue : null;
    const coverLetterFile =
      coverLetterValue instanceof File ? coverLetterValue : null;

    if (!firstName || !lastName) {
      return NextResponse.json(
        { success: false, error: "First name and last name are required." },
        { status: 400 }
      );
    }

    if (!email || !isValidEmail(email)) {
      return NextResponse.json(
        { success: false, error: "A valid email address is required." },
        { status: 400 }
      );
    }

    if (!phone) {
      return NextResponse.json(
        { success: false, error: "Phone number is required." },
        { status: 400 }
      );
    }

    if (!position) {
      return NextResponse.json(
        { success: false, error: "Position applied for is missing." },
        { status: 400 }
      );
    }

    if (
      !experience ||
      !whyJoin ||
      !keyStrengths ||
      !workLocation ||
      !employmentType ||
      !daysAvailable ||
      !hoursAvailable ||
      !startAvailability
    ) {
      return NextResponse.json(
        { success: false, error: "Please complete all required fields." },
        { status: 400 }
      );
    }

    if (!consent) {
      return NextResponse.json(
        {
          success: false,
          error: "You must provide consent before submitting.",
        },
        { status: 400 }
      );
    }

    if (!resumeFile || resumeFile.size === 0) {
      return NextResponse.json(
        { success: false, error: "Please upload your resume." },
        { status: 400 }
      );
    }

    if (!hasAllowedExtension(resumeFile.name)) {
      return NextResponse.json(
        {
          success: false,
          error: "Resume must be a PDF, DOC, or DOCX file.",
        },
        { status: 400 }
      );
    }

    if (
      coverLetterFile &&
      coverLetterFile.size > 0 &&
      !hasAllowedExtension(coverLetterFile.name)
    ) {
      return NextResponse.json(
        {
          success: false,
          error: "Cover letter must be a PDF, DOC, or DOCX file.",
        },
        { status: 400 }
      );
    }

    const totalFileSize =
      resumeFile.size + (coverLetterFile?.size || 0);

    if (totalFileSize > MAX_TOTAL_FILE_SIZE) {
      return NextResponse.json(
        {
          success: false,
          error: "Resume and cover letter must be 3MB or less in total.",
        },
        { status: 400 }
      );
    }

    const submittedAt = new Date().toISOString();
    const applicationId = Date.now().toString();
    const positionLabel = readableValue(position);

    const resume = await fileToPayload(resumeFile);
    const coverLetter = await fileToPayload(coverLetterFile);

    const payload = {
      kind: "career",
      type: "career-application",
      formOrigin: "career-application-page",
      id: applicationId,
      submittedAt,
      status: "new",

      position,
      positionLabel,

      firstName,
      lastName,
      email,
      phone,
      linkedin,
      portfolio,

      experience,
      currentPosition,
      currentCompany,
      whyJoin,
      keyStrengths,

      workLocation,
      employmentType,
      daysAvailable,
      hoursAvailable,
      startAvailability,
      preferredHours,

      howHeard,
      additionalComments,
      consent,

      sourcePage: "/career-application",
      sourceUrl: request.headers.get("referer") || "",

      resume,
      coverLetter,
    };

    /*
      Career applications include file uploads, so they need longer processing
      time than normal lead forms.
    */
    const sheetResult = await saveToGoogleSheets(payload, 45000);

    if (!sheetResult.resumeUrl) {
      return NextResponse.json(
        {
          success: false,
          error: "Application saved, but the resume upload link is missing.",
        },
        { status: 500 }
      );
    }

    try {
      const emailResult = await sendCareerApplicationEmail({
        firstName,
        lastName,
        email,
        phone,
        positionLabel,
        experience: readableValue(experience),
        currentPosition,
        currentCompany,
        workLocation: readableValue(workLocation),
        employmentType: readableValue(employmentType),
        daysAvailable: readableValue(daysAvailable),
        hoursAvailable: readableValue(hoursAvailable),
        startAvailability: readableValue(startAvailability),
        linkedin,
        portfolio,
        whyJoin,
        keyStrengths,
        additionalComments,
        resumeUrl: sheetResult.resumeUrl,
        coverLetterUrl: sheetResult.coverLetterUrl,
        submittedAt,
      });

      if (!emailResult.success) {
        console.warn(
          "Career application saved, but Brevo notification failed:",
          emailResult.error
        );
      }
    } catch (emailError) {
      console.error(
        "Career application saved, but email notification failed:",
        emailError
      );
    }

    return NextResponse.json({
      success: true,
      message: "Application submitted successfully.",
    });
  } catch (error) {
    console.error("Career application submission failed:", error);

    return NextResponse.json(
      {
        success: false,
        error:
          error instanceof Error
            ? error.message
            : "Unable to submit your application. Please try again.",
      },
      { status: 500 }
    );
  }
}