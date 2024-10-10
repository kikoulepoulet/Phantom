export default function handler(req, res) {
    // Extract token from query parameters
    const { token } = req.query;

    // Define the expected token
    const expectedToken = "8308272f738a0d7ae5ca82e6a958cd175eb9fc223250aea8bf205d1dc0e88864";

    // Debugging: Log the received token
    console.log(`Received token: ${token}`);

    // Check if the token exists and matches the expected token
    if (!token) {
        // If no token is provided, return an error message
        return res.status(400).json({ error: "Token is missing" });
    }

    if (token === expectedToken) {
        // Redirect to the correct file if the token matches
        console.log("Token matched! Redirecting...");
        return res.redirect("https://phantom-navy-one.vercel.app/");
    } else {
        // If the token is incorrect, redirect to the dummy website
        console.log("Token did not match. Redirecting to dummy site...");
        return res.redirect("https://kikoulepoulet.github.io/antibypass/");
    }
}
