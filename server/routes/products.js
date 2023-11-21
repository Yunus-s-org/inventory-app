const express = require("express");
const router = express.Router();

const {
  getAllProducts,
  getAllProductsStatic,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/products");

router
  .route("/")
  .get(getAllProducts)
  .patch(updateProduct)
  .delete(deleteProduct)
  .post(createProduct);
router.route("/static").get(getAllProductsStatic);

module.exports = router;
