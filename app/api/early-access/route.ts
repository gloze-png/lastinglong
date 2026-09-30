import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    console.log("Early access signup:", email);
    console.log(
      "RESEND_API_KEY exists:",
      !!process.env.RESEND_API_KEY
    );
    console.log(
      "EARLY_ACCESS_EMAIL:",
      process.env.EARLY_ACCESS_EMAIL
    );

    if (!email || typeof email !== "string") {
      return NextResponse.json(
        { message: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: "Intellinx <onboarding@resend.dev>",
      to: [process.env.EARLY_ACCESS_EMAIL!],
      subject: "New Intellinx Early Access Signup",
      html: `
        <div style="font-family: Arial, sans-serif;">
          <h2>New Intellinx Early Access Signup</h2>

          <p>
            <strong>Email:</strong> ${email}
          </p>

          <p>
            <strong>Source:</strong> Intellinx Landing Page
          </p>

          <p>
            <strong>Time:</strong> ${new Date().toLocaleString()}
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("RESEND ERROR:", error);

      return NextResponse.json(
        {
          message: "Resend failed",
          error: error.message,
        },
        { status: 500 }
      );
    }

    console.log("EMAIL SENT:", data);

    return NextResponse.json(
      {
        message: "You're on the list!",
        data,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("EARLY ACCESS ERROR:", error);

    return NextResponse.json(
      {
        message: "Something went wrong.",
      },
      { status: 500 }
    );
  }
}