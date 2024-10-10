export default function handler(req, res) {
    const { token } = req.query;

    const expectedToken = "8308272f738a0d7ae5ca82e6a958cd175eb9fc223250aea8bf205d1dc0e88864";

    if (token === expectedToken) {
        return res.redirect("https://kikoulepoulet.github.io/Phantom/");
    }

    return res.redirect("https://kikoulepoulet.github.io/antibypass/");
}
