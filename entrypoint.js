const express = require("express");
const path = require("path");
const fs = require("fs");
const server = express();
const port = 3001;
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
server.get("/reach-us",(req,res)=>{
    console.log(req.url);
    res
    .status(200)
    .type(".html")
    .sendFile(path.join(__dirname, `src`, `public`, `html`, "contactus.html"))
})
server.get('/about',(req,res)=>{
    res
    .status(200)
    .type(".html")
    .sendFile(path.join(__dirname, `src`, `public`, `html`, "about.html"))

})
server.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})