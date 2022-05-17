const https = require("node:https")
const fs = require("node:fs")
const express = require("express");

const options = {
    key: fs.readFileSync('./key.pem'),
    cert: fs.readFileSync('./cert.pem')
};

const app = express();

app.use((req, res) => {
  res.writeHead(200);
  res.end("hello world\n");
});



https.createServer(options, app).listen(3000);
app.listen(8000);