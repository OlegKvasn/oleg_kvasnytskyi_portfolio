"use server";

import React from "react";
import { getErrorMessage, validateString } from "@/lib/utils";
import { Resend } from "resend";
import ContactFormEmail from "@/email/contact-form";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const message = formData.get("message");
  const senderEmail = formData.get("senderEmail");

  if (!validateString(senderEmail, 100)) {
    return {
      error: "Invalid sender email",
    };
  }

  if (!validateString(message, 500)) {
    return {
      error: "Invalid Message",
    };
  }

  let data;

  try {
    data = await resend.emails.send({
      from: "Portfolio Contact Form <onboarding@resend.dev>",
      to: "djwillys@gmail.com",
      subject: "Message from Portfolio Contact form",
      reply_to: senderEmail as string,
      react: React.createElement(ContactFormEmail, {
        senderEmail: senderEmail as string,
        message: message as string,
      }),
      // react: <ContactFormEmail senderEmail={senderEmail} message={message}/>,
      // text: message as string,
      // html: "<p>Congrats on sending your <strong>first email</strong>!</p>",
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
};
