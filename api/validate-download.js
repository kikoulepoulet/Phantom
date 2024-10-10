// api/validate-download.js

export default function handler(req, res) {
    const { token } = req.query;

    // Define the expected token
    const expectedToken = "c0e73fe4ef420c1592bfb46227dc4a7cf3767b532b83d5259d3b6094c2ea81bd";

    // Check the token
    if (token === expectedToken) {
        // Redirect to the correct file
        res.redirect("https://kikoulepoulet.github.io/Phantom/");
    } else {
        // Redirect to a dummy website
        res.redirect("https://kikoulepoulet.github.io/antibypass/");
    }
}
