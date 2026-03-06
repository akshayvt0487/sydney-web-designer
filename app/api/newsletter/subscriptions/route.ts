import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function GET() {
  try {
    const { data: subscriptions, error } = await supabase
      .from('newsletter_subscriptions')
      .select('*')
      .order('subscribed_at', { ascending: false });

    if (error) {
      console.error("Supabase fetch error:", error);
      return NextResponse.json(
        { error: "Failed to fetch subscriptions" },
        { status: 500 }
      );
    }

    // Format for frontend
    const formattedSubscriptions = subscriptions.map((sub: any) => ({
      email: sub.email,
      submittedAt: sub.subscribed_at,
    }));

    return NextResponse.json(formattedSubscriptions);
  } catch (error) {
    console.error("Error reading newsletter subscriptions:", error);
    return NextResponse.json(
      { error: "Failed to fetch subscriptions" },
      { status: 500 }
    );
  }
}
