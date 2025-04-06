const { log } = require("console");
const express = require("express");

const configViewEngine = require("./config/viewEngine");
const webRouter = require("./routes/web");

require("dotenv").config();
const app = express();
const port = process.env.PORT ?? 8080;
const hostName = process.env.HOST_NAME;

// config template engine ejs
configViewEngine(app);

// create connection database mysql
const mysql = require("mysql2");
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "leconghien",
    password: "Hien12345@",
});

// A simple SELECT query
connection.query(
    "select * from leconghien.users",
    function (err, results, fields) {
        console.log("result = ", results); // results contains rows returned by server
        console.log(fields); // fields contains extra meta data about results, if available
    }
);

// khai báo route
app.use("/", webRouter);

app.listen(port, hostName, () => {
    console.log(`Example app listening on port ${port}`);
});
