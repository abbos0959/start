const express = require("express");
const router = express.Router();
const DataController = require("../controller/data");
router.route("/data").get(DataController.getAllData).post(DataController.postData);

module.exports = router;
