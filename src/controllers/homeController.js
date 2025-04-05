const getHomePage = (req, res) => {
    res.render("example.ejs");
};

const getHienLe = (req, res) => {
    res.send("le cong hien");
};

module.exports = {
    getHienLe,
    getHomePage,
};
