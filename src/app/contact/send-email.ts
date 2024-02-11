// This .ts file is the action for the <Form> element in contact.tsx
"use server";
import React from "react";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "../../../lib/utils";
import ContactFormEmail from "./email/email";

// Mount Resend library => see .env for API
const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);
// Initiate sendEmail function => takes input from <Form> from contact.tsx
export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get('senderEmail')
  const senderName = formData.get('senderName')
  const contactType = formData.get('contactType')
  const message = formData.get('message')

  console.log("[SERVER] You got a new message from:", formData.get("senderEmail"))
  console.log("Contact type:", formData.get("contactType"));
  console.log("Message:", formData.get("message"));
  // Server-side validation
  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email"
    }
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Invaid message"
    }
  }
  let data;
  try {
    data = await resend.emails.send({
      from: 'Contact DB <onboarding@resend.dev>',
      to: 'tdombui@gmail.com',
      subject: 'Someone contacted you from <dombui.com>',
      reply_to: senderEmail as string,
      react: React.createElement(ContactFormEmail, {
        senderEmail: senderEmail as string,
        senderName: senderName as string,
        contactType: contactType as string,
        message: message as string,
      }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }
  return {
    data,
    clearForm: true,
  }
};
