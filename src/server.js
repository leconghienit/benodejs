const express = require("express");
const path = require("path");
const app = express();
const port = 8080;

// config template engine ejs
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
// khai báo route

app.get("/", (req, res) => {
    res.render("example.ejs");
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
