import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const {
      name,
      email,
      company,
      project,
      message,
    } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        {
          success: false,
          error: "Missing required fields.",
        },
        {
          status: 400,
        }
      );
    }

    const { error } = await resend.emails.send({
      from: "Website <contact@josiassekhebesa.com>",
      to: "josias@josiassekhebesa.com",
      replyTo: email,
      subject: `New Portfolio Enquiry from ${name}`,

      html: `
        <h2>New Portfolio Contact</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || "Not provided"}</p>
        <p><strong>Project:</strong> ${project || "Not specified"}</p>

        <hr />

        <h3>Message</h3>

        <p>${message}</p>
      `,
    });

    if (error) {
      console.error(error);

      return NextResponse.json(
        {
          success: false,
          error: error.message,
        },
        {
          status: 500,
        }
      );
    }

    return NextResponse.json({
      success: true,
    });

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        error: "Internal server error.",
      },
      {
        status: 500,
      }
    );
  }
}