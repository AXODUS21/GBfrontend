import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { category, reason, email } = await request.json();

    // Map categories to specific email addresses
    let targetEmail = "info@globalbrightfutures.org"; // default fallback
    
    if (category === "School Partnership") {
      targetEmail = "partnership@globalbrightfutures.org";
    } else if (category === "Join as Educators and Tutors") {
      targetEmail = "educators@globalbrightfutures.org";
    } else if (category === "Students & Families Support") {
      targetEmail = "families@globalbrightfutures.org";
    }

    const { data, error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'Global Bright Futures <notifications@globalbrightfutures.org>',
      to: [targetEmail],
      subject: `Support Application: ${category}`,
      replyTo: email || 'info@globalbrightfutures.org',
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
          <h2 style="color: #3b82f6;">New Support Application</h2>
          <p><strong>Category:</strong> ${category}</p>
          <p><strong>From:</strong> ${email || 'Not provided'}</p>
          <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
          <p><strong>Reason for applying:</strong></p>
          <div style="background-color: #f9fafb; padding: 15px; border-radius: 5px; line-height: 1.6;">
            ${reason.replace(/\n/g, '<br />')}
          </div>
          <p style="font-size: 12px; color: #6b7280; margin-top: 30px;">
            This email was sent from the Global Bright Futures Support Form.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend Error:", error);
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    console.error("Server Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
