import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, email, phone, program, boardingOption, subject, message } = await req.json();

  const subjectLabels: Record<string, string> = {
    admissions: "Admissions Inquiry",
    academics: "Academic Programs",
    fees: "Fee Structure",
    visit: "Schedule a Visit",
    other: "Other",
  };

  const programLabels: Record<string, string> = {
    nursery: "Nursery (Ages 3–5)",
    primary: "Primary School (Std 1–7)",
    secondary: "Secondary School (Form 1–6)",
  };

  const { error } = await resend.emails.send({
    from: "Brain Yield Schools <onboarding@resend.dev>",
    to: ["brainyield.schools2020@gmail.com"],
    replyTo: email,
    subject: `New Contact: ${subjectLabels[subject] ?? subject} — ${name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #f9f9f9;">
        <div style="background: #1a3c5e; padding: 24px; border-radius: 12px 12px 0 0; text-align: center;">
          <h1 style="color: #ffffff; margin: 0; font-size: 22px;">New Contact Form Submission</h1>
          <p style="color: #a0c4e8; margin: 6px 0 0;">Brain Yield Schools Website</p>
        </div>
        <div style="background: #ffffff; padding: 32px; border-radius: 0 0 12px 12px; border: 1px solid #e0e0e0;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #666; width: 40%; font-weight: bold;">Full Name</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #222;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #666; font-weight: bold;">Email</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #222;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #666; font-weight: bold;">Phone</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #222;">${phone || "Not provided"}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #666; font-weight: bold;">Program</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #222;">${programLabels[program] ?? program}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #666; font-weight: bold;">Preferred Option</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #222; text-transform: capitalize;">${boardingOption}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #666; font-weight: bold;">Subject</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #222;">${subjectLabels[subject] ?? subject}</td>
            </tr>
          </table>
          <div style="margin-top: 24px;">
            <p style="color: #666; font-weight: bold; margin-bottom: 8px;">Message</p>
            <div style="background: #f5f7fa; padding: 16px; border-radius: 8px; color: #333; line-height: 1.6; white-space: pre-wrap;">${message}</div>
          </div>
          <p style="margin-top: 24px; font-size: 12px; color: #999; text-align: center;">
            Reply directly to this email to respond to ${name}.
          </p>
        </div>
      </div>
    `,
  });

  if (error) {
    console.error("Resend error:", JSON.stringify(error));
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
