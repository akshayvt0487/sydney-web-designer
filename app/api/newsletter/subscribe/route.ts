import { NextRequest, NextResponse } from "next/server";
import { sendNewsletterSubscriptionEmail } from "@/lib/email";
import { supabase } from "@/lib/supabase";

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

    // Validate Supabase configuration
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
      console.error("Supabase environment variables not configured");
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 }
      );
    }

    // Prepare submission data
    const submissionData = {
      email,
      subscribed_at: new Date().toISOString(),
    };

    // Insert into Supabase
    const { data, error } = await supabase
      .from('newsletter_subscriptions')
      .insert([submissionData])
      .select();

    if (error) {
      // Check for unique constraint violation (duplicate email)
      if (error.code === '23505') {
        return NextResponse.json(
          { error: "This email is already subscribed to our newsletter" },
          { status: 400 }
        );
      }

      console.error("Supabase insert error:", error);
      console.error("Error details:", JSON.stringify(error));
      return NextResponse.json(
        { error: "Failed to save subscription", details: error.message },
        { status: 500 }
      );
    }

    // Send email notification
    try {
      await sendNewsletterSubscriptionEmail({
        email,
        submittedAt: submissionData.subscribed_at,
      });
    } catch (emailError) {
      console.error("Failed to send newsletter notification:", emailError);
      // Don't fail the request if email fails - subscription is still saved
    }

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
