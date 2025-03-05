export async function POST(req) {
    try {
        if (req.method !== "POST") {
            return new Response(JSON.stringify({ error: "Method not allowed" }), { status: 405 });
        }

        // Parse request body manually
        const { token } = await req.json();

        if (!token) {
            return new Response(JSON.stringify({ error: "Token is missing" }), { status: 400 });
        }

        const secretKey = process.env.TURNSTILE_SECRET_KEY;

        // Send request to Cloudflare
        const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ secret: secretKey, response: token }),
        });

        const data = await response.json();

        if (data.success) {
            return new Response(JSON.stringify({ message: "Success", details: data }), { status: 200 });
        } else {
            return new Response(JSON.stringify({ error: "Could not verify with Turnstile", details: data }), { status: 400 });
        }
    } catch (error) {
        console.error("Turnstile verification error:", error); // Debugging

        return new Response(JSON.stringify({ error: "Turnstile error", details: String(error) }), { status: 500 });
    }
}
