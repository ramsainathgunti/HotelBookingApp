const express = require("express");
const router = express.Router();
const authController = require("../controller/authController");

router
    .post("/login", authController.loginUser)
    .post("/register", authController.createUser);

module.exports = router;