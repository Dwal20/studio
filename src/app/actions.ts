"use server";

import { z } from "zod";
import nodemailer from "nodemailer";

const contactFormSchema = z.object({
  firstName: z.string().min(1, "First name is required."),
  lastName: z.string().min(1, "Last name is required."),
  email: z.string().email("Invalid email address."),
  message: z.string().optional(),
});

export type FormState = {
  message: string;
  success: boolean;
};

export async function sendEmail(prevState: FormState, formData: FormData): Promise<FormState> {
  const validatedFields = contactFormSchema.safeParse({
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    email: formData.get("email"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return {
      message: "Invalid form data. Please check your inputs.",
      success: false,
    };
  }

  const { firstName, lastName, email, message } = validatedFields.data;
  const mailTo = "dikshaagawalsv123@gmail.com";

  if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
    console.warn("SMTP environment variables not set. Skipping email sending. This is expected for local development without an email provider setup.");
    return {
      message: "Your message has been sent successfully! (Simulated)",
      success: true,
    };
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 587,
    secure: (Number(process.env.SMTP_PORT) || 587) === 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"${firstName} ${lastName}" <${process.env.SMTP_USER}>`,
      replyTo: email,
      to: mailTo,
      subject: `New Message from ${firstName} ${lastName} via Portfolio`,
      text: `From: ${email}\n\n${message || "No message provided."}`,
      html: `<p>You have a new message from your portfolio contact form:</p>
             <p><strong>Name:</strong> ${firstName} ${lastName}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong></p>
             <p>${message ? message.replace(/\n/g, "<br>") : "No message provided."}</p>`,
    });

    return {
      message: "Your message has been sent successfully!",
      success: true,
    };
  } catch (error) {
    console.error("Failed to send email:", error);
    return {
      message: "Failed to send your message. Please try again later.",
      success: false,
    };
  }
}
