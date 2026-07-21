import { NextResponse } from "next/server";
import { Resend } from "resend";

import ContactNotification from "@/emails/ContactNotification";
import ContactConfirmation from "@/emails/ContactConfirmation";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const {
      name,
      email,
      company,
      project,
      message,
      turnstileToken,
    } = await req.json();

    // ------------------------------------
    // Validation
    // ------------------------------------

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

    if (!turnstileToken) {
      return NextResponse.json(
        {
          success: false,
          error: "Security verification failed.",
        },
        {
          status: 400,
        }
      );
    }

    // ------------------------------------
    // Verify Cloudflare Turnstile
    // ------------------------------------

    const verifyResponse = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type":
            "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          secret: process.env.TURNSTILE_SECRET_KEY!,
          response: turnstileToken,
        }),
      }
    );

    const verification = await verifyResponse.json();

    if (!verification.success) {
      return NextResponse.json(
        {
          success: false,
          error: "Unable to verify security check.",
        },
        {
          status: 403,
        }
      );
    }

    // ------------------------------------
    // Email 1
    // Notification to Josias
    // ------------------------------------

    await resend.emails.send({
      from: "Josias Sekhebesa <contact@josiassekhebesa.com>",

      to: "josias@josiassekhebesa.com",

      replyTo: email,

      subject: `🚀 New Enterprise AI Enquiry | ${name}`,

      react: ContactNotification({
        name,
        email,
        company,
        project,
        message,
      }),
    });

    // ------------------------------------
    // Email 2
    // Auto reply
    // ------------------------------------

    await resend.emails.send({
      from: "Josias Sekhebesa <contact@josiassekhebesa.com>",

      to: email,

      subject: "Thanks for contacting Josias Sekhebesa",

      react: ContactConfirmation({
        name,
      }),
    });

    return NextResponse.json({
      success: true,
    });

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        error: "Something went wrong.",
      },
      {
        status: 500,
      }
    );
  }
}