import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, organization, answers, score, stage } = body;

    if (!email) {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    // TODO: Replace with webhook to CRM (HubSpot, Relay.app, or Make.com)
    // TODO: Send email with results PDF via Resend or SendGrid
    console.log("Assessment submission:", {
      name,
      email,
      organization,
      answers,
      score,
      stage,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Failed to process submission" },
      { status: 500 }
    );
  }
}
