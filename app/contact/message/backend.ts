"use server";

import { Resend } from "resend";

export type FormHelp = {
    success: boolean;
    message: string;
    fieldErrors: Partial<Record<FieldName, string>>;
};

export type FieldName = "firstName" | "lastName" | "phoneNumber" | "email" | "work" | "message";

const serviceOptions = new Set([
    "Heating",
    "Cooling",
    "Electrical",
    "Indoor Air Quality",
    "General Question",
]);

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const resend = new Resend(process.env.RESEND_API_KEY);

function cleanField(formData: FormData, key: string) {
    return formData.get(key)?.toString().trim() ?? "";
}

function escapeHtml(value: string) {
    return value
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

export async function sendMessage(_state: FormHelp, formData: FormData): Promise<FormHelp> {
    const firstName = cleanField(formData, "firstName");
    const lastName = cleanField(formData, "lastName");
    const phoneNumber = cleanField(formData, "phoneNumber");
    const email = cleanField(formData, "email");
    const work = cleanField(formData, "work");
    const message = cleanField(formData, "message");
    const name = `${firstName} ${lastName}`.trim();
    const phoneDigits = phoneNumber.replace(/\D/g, "");
    const fieldErrors: FormHelp["fieldErrors"] = {};

    if (!firstName) fieldErrors.firstName = "First name is required.";
    if (!lastName) fieldErrors.lastName = "Last name is required.";
    if (!phoneNumber) {
        fieldErrors.phoneNumber = "Phone number is required.";
    } else if (!/^[\d\s()+.-]+$/.test(phoneNumber) || phoneDigits.length !== 10) {
        fieldErrors.phoneNumber = "Phone number must contain exactly 10 digits.";
    }
    if (!email) {
        fieldErrors.email = "Email is required.";
    } else if (!emailPattern.test(email)) {
        fieldErrors.email = "Enter a valid email address.";
    }
    if (!work) {
        fieldErrors.work = "Please select the type of service you need.";
    } else if (!serviceOptions.has(work)) {
        fieldErrors.work = "Select a valid service option.";
    }
    if (!message) fieldErrors.message = "Message is required.";

    if (Object.keys(fieldErrors).length > 0) {
        return { success: false, message: "Please correct the highlighted fields.", fieldErrors };
    }

    const recipient = process.env.CONTACT_TO_EMAIL;
    const from = process.env.CONTACT_FROM_EMAIL;

    if (!process.env.RESEND_API_KEY || !recipient || !from) {
        console.error("Missing contact email environment variables.");
        return { success: false, message: "Message email is not configured yet.", fieldErrors: {} };
    }

    try {
        const { error } = await resend.emails.send({
            from,
            to: [recipient],
            replyTo: email,
            subject: `New contact form message from ${name}`,
            text: [
                `Name: ${name}`,
                `Email: ${email}`,
                `Phone: ${phoneNumber}`,
                `Service: ${work}`,
                "",
                "Message:",
                message,
            ].join("\n"),
            html: `
                <h1>New contact form message</h1>
                <p><strong>Name:</strong> ${escapeHtml(name)}</p>
                <p><strong>Email:</strong> ${escapeHtml(email)}</p>
                <p><strong>Phone:</strong> ${escapeHtml(phoneNumber)}</p>
                <p><strong>Service:</strong> ${escapeHtml(work)}</p>
                <p><strong>Message:</strong></p>
                <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
            `,
        });

        if (error) {
            console.error("Resend contact email failed:", error);
            return { success: false, message: "Something went wrong. Please try again later.", fieldErrors: {} };
        }

        return {
            success: true,
            message: "Thank you for reaching out. We will respond to your message soon.",
            fieldErrors: {},
        };
    }
    catch (error) {
        console.error("Contact email failed:", error);
        return { success: false, message: "Something went wrong. Please try again later.", fieldErrors: {} };
    }
}
