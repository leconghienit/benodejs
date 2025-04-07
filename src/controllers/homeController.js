const pool = require("../config/database");

const getHomePage = (req, res) => {
    let users = [];
    pool.query(
        "select * from leconghien.users",
        function (err, results, fields) {
            users = results;
            console.log(users);
            console.log("result = ", results); // results contains rows returned by server
            // console.log(fields); // fields contains extra meta data about results, if available
        }
    );
    res.render("example.ejs");
};

const getHienLe = (req, res) => {
    nd("le cong hien");
};

module.exports = {
    getHienLe,
    getHomePage,
};
