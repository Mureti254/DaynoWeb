const express = require("express");
const path = require("path");
const fs = require("fs");
const server = express();
const port = 3000;
const staticDir = path.join(__dirname, `src`, `public`);
server.use(express.static(staticDir));
console.log({ staticDir })
console.log({ __dirname })
server.get("/", (req, res) => {
    console.log(req.url);
    res
        .status(200)
        .type(".html")
        .sendFile(path.join(__dirname, `src`, `public`, `html`, `index.html`))
});
server.get("/products", (req, res) => {
    console.log(req.url);
    res
        .status(200)
        .type(".html")
        .sendFile(path.join(__dirname, `src`, `public`, `html`, "products.html"))
});
server.get("/services", (req, res) => {
    console.log(req.url);
    res
        .status(200)
        .type(".html")
        .sendFile(path.join(__dirname, `src`, `public`, `html`, "services.html"))
});
server.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})