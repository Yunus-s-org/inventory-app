const Product = require("../models/product");

const getAllProductsStatic = async (req, res) => {
  const products = await Product.find({});
  res.status(200).json({ products, nbHits: products.length });
};
const getAllProducts = async (req, res) => {
  const { name } = req.query;
  const queryObject = {};

  if (name) {
    queryObject.name = { $regex: name, $options: "i" };
  }

  const product = await Product.find(queryObject);
  res.status(200).json(product);
};

const createProduct = async (req, res) => {
  const { name, price, description, category, featured, image } = req.body;
  try {
    const product = await Product.create({
      name,
      price,
      description,
      category,
      image,
      featured,
    });
    res.status(201).json({ product });
  } catch (error) {
    res.status(500).json({ msg: "Server Error" });
  }
};

const updateProduct = async (req, res) => {
  const { id: productID } = req.params;
  try {
    const update = await Product.findOneAndUpdate(
      { _id: productID },
      req.body,
      { new: true, runValidators: true }
    );
    res.status(200).json({ update });
  } catch (error) {
    res.status(500).json({ msg: "Server Error" });
  }
};

// delete Product code
const deleteProduct = async (req, res) => {
  const { id: productID } = req.params;
  try {
    const product = await Product.findByIdAndDelete(productID);
    if (!product) {
      return res.status(404).json({ msg: `No product with id: ${productID}` });
    }
    res
      .status(200)
      .json({ product: null, msg: `product with id: ${productID} deleted` });
  } catch (error) {
    res.status(500).json({ msg: "Server Error" });
  }
};

module.exports = {
  getAllProducts,
  getAllProductsStatic,
  createProduct,
  updateProduct,
  deleteProduct,
};
