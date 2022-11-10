const express = require("express");
const userController = require("../controller/user");
const router = express.Router();

router.route("/register").post(userController.Register);
router.route("/login").post(userController.login);
router.route("/logout").get(userController.logout);

module.exports = router;
