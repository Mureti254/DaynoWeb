const express = require("express");
const path = require("path");
const fs = require("fs");
const server = express();
const port = 3000;
const staticDir = path.join(__dirname, `public`);
server.use(express.static(staticDir));
//console.log(__dirname)
server.get("/", (req, res) => {
    console.log(req.url);
    res
        .status(200)
        .type(".html")
        .sendFile(path.join(__dirname,"src" ,"public","index.html"))
});
server.listen(port,()=>{`Example app listening at http://localhost:${port}`})