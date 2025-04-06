// khai báo route
const express = require("express");
const { getHomePage, getHienLe } = require("../controllers/homeController");
const router = express.Router();

router.get("/", getHomePage);
router.get("/hienle", getHienLe);

module.exports = router;
