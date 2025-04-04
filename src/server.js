const { log } = require("console");
const express = require("express");
const path = require("path");
require("dotenv").config();
const app = express();
const port = process.env.PORT ?? 8080;
const hostName = process.env.HOST_NAME;

console.log(process.env);
console.log(hostName);
// config template engine ejs
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
// khai báo route

app.get("/", (req, res) => {
    res.render("example.ejs");
});
app.listen(port, hostName, () => {
    console.log(`Example app listening on port ${port}`);
});
