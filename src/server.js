const { log } = require("console");
const express = require("express");
const connection = require("./config/database");

const configViewEngine = require("./config/viewEngine");
const webRouter = require("./routes/web");

require("dotenv").config();
const app = express();
const port = process.env.PORT ?? 8080;
const hostName = process.env.HOST_NAME;

// config template engine ejs
configViewEngine(app);

// A simple SELECT query

// khai báo route
app.use("/", webRouter);

app.listen(port, hostName, () => {
    console.log(`Example app listening on port ${port}`);
});
