import { NextRequest, NextResponse } from "next/server";
import { sendContactSubmissionEmail } from "@/lib/email";
import { supabase } from "@/lib/supabase";

export async function POST(request: NextRequest) {
  try {
    const submission = await request.json();

    // Validate Supabase configuration
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
      console.error("Supabase environment variables not configured");
      return NextResponse.json(
        { error: "Server configuration error - Supabase not configured" },
        { status: 500 }
      );
    }

    // Check if Supabase client is initialized
    if (!supabase) {
      console.error("Supabase client not initialized");
      return NextResponse.json(
        { error: "Database connection error" },
        { status: 500 }
      );
    }

    // Convert camelCase to snake_case for database
    const dbSubmission = {
      id: submission.id,
      first_name: submission.firstName,
      last_name: submission.lastName,
      email: submission.email,
      phone: submission.phone,
      company: submission.company || null,
      service: submission.service,
      message: submission.message,
      status: submission.status || 'new',
      submitted_at: submission.submittedAt,
    };

    // Insert into Supabase
    const { data, error } = await supabase
      .from('contact_submissions')
      .insert([dbSubmission])
      .select();

    if (error) {
      console.error("Supabase insert error:", error);
      console.error("Error details:", JSON.stringify(error));
      return NextResponse.json(
        { error: "Failed to save submission", details: error.message },
        { status: 500 }
      );
    }

    // Send email notification
    try {
      const emailResult = await sendContactSubmissionEmail(submission);
      if (!emailResult.success) {
        console.warn("⚠️  Contact email notification failed:", emailResult.error);
        // Log but don't fail - submission is still saved in database
      } else if (process.env.NODE_ENV === 'development') {
        console.log("✓ Contact email notification sent successfully");
      }
    } catch (emailError) {
      console.error("❌ Exception sending contact email notification:", emailError);
      // Don't fail the request if email fails - submission is still saved
    }

    return NextResponse.json({ success: true, id: submission.id });
  } catch (error) {
    console.error("Error saving contact submission:", error);
    return NextResponse.json(
      { error: "Failed to save submission" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const { data: submissions, error } = await supabase
      .from('contact_submissions')
      .select('*')
      .order('submitted_at', { ascending: false });

    if (error) {
      console.error("Supabase fetch error:", error);
      return NextResponse.json(
        { error: "Failed to fetch submissions" },
        { status: 500 }
      );
    }

    // Convert snake_case back to camelCase for frontend
    const formattedSubmissions = submissions.map((sub: any) => ({
      id: sub.id,
      firstName: sub.first_name,
      lastName: sub.last_name,
      email: sub.email,
      phone: sub.phone,
      company: sub.company,
      service: sub.service,
      message: sub.message,
      status: sub.status,
      submittedAt: sub.submitted_at,
    }));

    return NextResponse.json(formattedSubmissions);
  } catch (error) {
    console.error("Error fetching contact submissions:", error);
    return NextResponse.json(
      { error: "Failed to fetch submissions" },
      { status: 500 }
    );
  }
}
