import { json } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";
import { RESEND_API_KEY } from "$env/static/private";

export const POST: RequestHandler = async ({ request, fetch }) => {
    try {
        const { name, email, message } = await request.json();

        if (!name?.trim() || !email?.trim() || !message?.trim()) {
            return json(
                { error: "Please fill in all fields." },
                { status: 400 }
            );
        }

        const response = await fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: {
                Authorization: `Bearer ${RESEND_API_KEY}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                from: "Portfolio Contact <onboarding@resend.dev>",
                to: ["tetebejeffrey@gmail.com"],
                reply_to: email,
                subject: `New portfolio message from ${name}`,
                html: `
                    <h2>New Portfolio Message</h2>
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Message:</strong></p>
                    <p>${message}</p>
                `
            })
        });

        const result = await response.json();

        if (!response.ok) {
            console.error("Resend error:", result);

            return json(
                { error: "Unable to send your message right now." },
                { status: 500 }
            );
        }

        return json({ success: true });

    } catch (error) {
        console.error("Contact form error:", error);

        return json(
            { error: "Something went wrong. Please try again." },
            { status: 500 }
        );
    }
};