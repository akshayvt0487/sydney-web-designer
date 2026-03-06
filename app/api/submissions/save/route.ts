import { NextRequest, NextResponse } from "next/server";
import { sendFormSubmissionEmail } from "@/lib/email";
import { supabase } from "@/lib/supabase";

export async function POST(request: NextRequest) {
  try {
    const submission = await request.json();

    // Validate Supabase configuration
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
      console.error("Supabase environment variables not configured");
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 }
      );
    }

    // Convert camelCase to snake_case for database
    const dbSubmission = {
      id: submission.id,
      type: submission.type,
      name: submission.name,
      email: submission.email,
      phone: submission.phone,
      website: submission.website || null,
      project_type: submission.projectType || null,
      seo_goal: submission.seoGoal || null,
      ad_spend: submission.adSpend || null,
      service: submission.service || null,
      message: submission.message || null,
      status: submission.status || 'new',
      submitted_at: submission.submittedAt,
    };

    // Insert into Supabase
    const { data, error } = await supabase
      .from('form_submissions')
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
      await sendFormSubmissionEmail(submission);
      if (process.env.NODE_ENV === 'development') {
        console.log("Email notification sent successfully");
      }
    } catch (emailError) {
      console.error("Failed to send email notification:", emailError);
      // Don't fail the request if email fails - submission is still saved
    }

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
    const { data: submissions, error } = await supabase
      .from('form_submissions')
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
      type: sub.type,
      name: sub.name,
      email: sub.email,
      phone: sub.phone,
      website: sub.website,
      projectType: sub.project_type,
      seoGoal: sub.seo_goal,
      adSpend: sub.ad_spend,
      service: sub.service,
      message: sub.message,
      status: sub.status,
      submittedAt: sub.submitted_at,
    }));

    return NextResponse.json(formattedSubmissions);
  } catch (error) {
    console.error("Error fetching submissions:", error);
    return NextResponse.json(
      { error: "Failed to fetch submissions" },
      { status: 500 }
    );
  }
}
