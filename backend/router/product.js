const express = require("express");

const router = express.Router();
// const Auth = require("../middleware/IsAuth");
const productController = require("../controller/product");
const upload = require("../middleware/upload");
router
   .route("/product")
   .post(upload.single("photo"), productController.create)
   .get(productController.getAll);

router
   .route("/product/:id")
   .get(productController.productById)
   .delete(productController.remove)
   .patch(upload.single("photo"), productController.updateProduct);

module.exports = router;
