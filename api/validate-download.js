// api/validate-download.js

export default function handler(req, res) {
    const { token } = req.query;

    // Define the expected token
    const expectedToken = " 1b08ee393d156702c60a3da9cc2def067ee8ceed7a5beb957bab14c094b84817";

    // Check the token
    if (token === expectedToken) {
        // Redirect to the correct file
        res.redirect("https://phantom-navy-one.vercel.app/");
    } else {
        // Redirect to a dummy website
        res.redirect("https://kikoulepoulet.github.io/antibypass/");
    }
}
