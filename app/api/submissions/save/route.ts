import { NextRequest, NextResponse } from "next/server";
import { sendFormSubmissionEmail } from "@/lib/email";
import { supabase } from "@/lib/supabase";

export async function POST(request: NextRequest) {
  try {
    console.log("🔍 [SUBMISSIONS/SAVE] Starting form submission handler");
    
    const submission = await request.json();
    console.log("📝 [SUBMISSIONS/SAVE] Received submission:", {
      type: submission.type,
      name: submission.name,
      email: submission.email,
      phone: submission.phone,
    });

    // Validate Supabase configuration
    console.log("🔐 [SUBMISSIONS/SAVE] Checking Supabase configuration:");
    console.log("   - NEXT_PUBLIC_SUPABASE_URL:", process.env.NEXT_PUBLIC_SUPABASE_URL ? "✓ SET" : "✗ MISSING");
    console.log("   - NEXT_PUBLIC_SUPABASE_ANON_KEY:", process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? "✓ SET" : "✗ MISSING");
    
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
      console.error("❌ [SUBMISSIONS/SAVE] Supabase environment variables not configured");
      return NextResponse.json(
        { error: "Server configuration error - Supabase not configured" },
        { status: 500 }
      );
    }

    // Check if Supabase client is initialized
    console.log("🔗 [SUBMISSIONS/SAVE] Checking Supabase client initialization...");
    if (!supabase) {
      console.error("❌ [SUBMISSIONS/SAVE] Supabase client not initialized");
      return NextResponse.json(
        { error: "Database connection error" },
        { status: 500 }
      );
    }
    console.log("✓ [SUBMISSIONS/SAVE] Supabase client initialized successfully");

    // Validate required fields
    console.log("✓ [SUBMISSIONS/SAVE] Validating required fields...");
    if (!submission.name || !submission.email || !submission.phone) {
      console.warn("⚠️  [SUBMISSIONS/SAVE] Missing required fields");
      return NextResponse.json(
        { error: "Missing required fields: name, email, and phone are required." },
        { status: 400 }
      );
    }
    console.log("✓ [SUBMISSIONS/SAVE] All required fields present");

    // Convert camelCase to snake_case for database
    const dbSubmission = {
      id: submission.id,
      type: submission.type,
      name: submission.name || "Unknown",
      email: submission.email || "no-email@example.com",
      phone: submission.phone || "Not provided",
      website: submission.website || null,
      project_type: submission.projectType || null,
      seo_goal: submission.seoGoal || null,
      ad_spend: submission.adSpend || null,
      service: submission.service || null,
      message: submission.message || null,
      status: submission.status || 'new',
      submitted_at: submission.submittedAt,
    };
    console.log("📦 [SUBMISSIONS/SAVE] Prepared database submission:", dbSubmission);

    // Insert into Supabase
    console.log("💾 [SUBMISSIONS/SAVE] Inserting into form_submissions table...");
    const { data, error } = await supabase
      .from('form_submissions')
      .insert([dbSubmission])
      .select();

    if (error) {
      console.error("❌ [SUBMISSIONS/SAVE] Supabase insert failed");
      console.error("   - Error code:", error.code);
      console.error("   - Error message:", error.message);
      console.error("   - Error details:", JSON.stringify(error, null, 2));
      return NextResponse.json(
        { 
          error: "Failed to save submission", 
          details: error.message,
          code: error.code 
        },
        { status: 500 }
      );
    }

    console.log("✓ [SUBMISSIONS/SAVE] Successfully inserted submission into database");
    console.log("   - Inserted data:", data);

    // Send email notification
    console.log("📧 [SUBMISSIONS/SAVE] Sending email notification...");
    try {
      const emailResult = await sendFormSubmissionEmail(submission);
      if (!emailResult.success) {
        console.warn("⚠️  [SUBMISSIONS/SAVE] Email notification failed:", emailResult.error);
        // Log but don't fail - submission is still saved in database
      } else {
        console.log("✓ [SUBMISSIONS/SAVE] Email notification sent successfully");
      }
    } catch (emailError) {
      console.error("❌ [SUBMISSIONS/SAVE] Exception sending email notification:", emailError);
      // Don't fail the request if email fails - submission is still saved
    }

    console.log("✓ [SUBMISSIONS/SAVE] Form submission completed successfully");
    return NextResponse.json({ success: true, id: submission.id });
  } catch (error) {
    console.error("❌ [SUBMISSIONS/SAVE] Unexpected error:", error);
    console.error("   - Error type:", error instanceof Error ? "Error" : typeof error);
    if (error instanceof Error) {
      console.error("   - Error message:", error.message);
      console.error("   - Error stack:", error.stack);
    }
    const errorMessage = error instanceof Error ? error.message : "An unexpected error occurred";
    return NextResponse.json(
      { error: `Failed to save submission: ${errorMessage}` },
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
