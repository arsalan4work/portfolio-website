import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { firstName, lastName, email, phone, message } = body;

    const { error } = await resend.emails.send({
      from: "onboarding@resend.dev", // keep until you verify your own domain
      to: "m.arsalan4210@gmail.com", // must be your verified email for testing
      subject: "📩 New Contact Form Submission",
      text: `
Name: ${firstName} ${lastName}
Email: ${email}
Phone: ${phone}
Message:
${message}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.5; padding: 10px; background-color: #f9f9f9;">
          <h2 style="color: #0ea5e9;">📩 New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${firstName} ${lastName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-line; background-color: #fff; padding: 10px; border-radius: 5px;">
            ${message}
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return Response.json({ success: false, error }, { status: 500 });
    }

    return Response.json({ success: true });
  } catch (err) {
    console.error("Server error:", err);
    return Response.json({ success: false, error: err }, { status: 500 });
  }
}
