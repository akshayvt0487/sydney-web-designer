import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const SUBMISSIONS_FILE = path.join(process.cwd(), "data", "submissions.json");

// Ensure data directory exists
function ensureDataDir() {
  const dataDir = path.join(process.cwd(), "data");
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
  if (!fs.existsSync(SUBMISSIONS_FILE)) {
    fs.writeFileSync(SUBMISSIONS_FILE, JSON.stringify([]));
  }
}

export async function POST(request: NextRequest) {
  try {
    const submission = await request.json();

    ensureDataDir();

    // Read existing submissions
    const data = fs.readFileSync(SUBMISSIONS_FILE, "utf-8");
    const submissions = JSON.parse(data);

    // Add new submission
    submissions.unshift(submission);

    // Write back to file
    fs.writeFileSync(SUBMISSIONS_FILE, JSON.stringify(submissions, null, 2));

    return NextResponse.json({ success: true, id: submission.id });
  } catch (error) {
    console.error("Error saving submission:", error);
    return NextResponse.json(
      { error: "Failed to save submission" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    ensureDataDir();

    const data = fs.readFileSync(SUBMISSIONS_FILE, "utf-8");
    const submissions = JSON.parse(data);

    return NextResponse.json(submissions);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch submissions" },
      { status: 500 }
    );
  }
}
