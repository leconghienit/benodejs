const path = require("path");
const express = require("express");

const configViewEngine = (app) => {
    app.set("views", path.join("./src", "views")); // path.join(value1, value2, ..) : dùng để nối đường dẫn => ./src/views
    app.set("view engine", "ejs");
    app.use(express.static(path.join("./src", "public")));
};

module.exports = configViewEngine;
