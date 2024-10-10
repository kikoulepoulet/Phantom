export default function handler(req, res) {
    // Extract token from query parameters
    const { token } = req.query;

    // Define the expected token
    const expectedToken = "8308272f738a0d7ae5ca82e6a958cd175eb9fc223250aea8bf205d1dc0e88864";

    // Log the received token for debugging
    console.log(`Received token: ${token}`);

    // Check if the token exists in the query parameters
    if (!token) {
        // If no token is provided, log and redirect to dummy site
        console.log("No token provided. Redirecting to dummy site...");
        return res.redirect("https://kikoulepoulet.github.io/antibypass/");
    }

    // Validate the token
    if (token === expectedToken) {
        // Token is valid, redirect to the main website
        console.log("Token matched! Redirecting to the main site...");
        return res.redirect("https://kikoulepoulet.github.io/Phantom/");
    } else {
        // Token is invalid, log and redirect to dummy site
        console.log("Invalid token. Redirecting to dummy site...");
        return res.redirect("https://kikoulepoulet.github.io/antibypass/");
    }
}
