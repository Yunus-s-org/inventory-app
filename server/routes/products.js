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
  .post(createProduct);

router.route('/:id').patch(updateProduct).delete(deleteProduct);
router.route("/static").get(getAllProductsStatic);

module.exports = router;
