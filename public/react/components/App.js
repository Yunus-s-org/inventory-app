import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Landing from "./Landing";
import ProductList from "./ProductList";
import ProductPage from "./ProductPage";
import CreateItem from "./CreateItem";
import Edit from "./Edit";

// Import and prepend the API URL to any fetch calls
import apiURL from "../api";

export const App = () => {
  const [products, setProducts] = useState([]);
  const [singleProduct, setSingleProduct] = useState({});

  // Function to fetch all products from the server
  const fetchProducts = async () => {
    try {
      const response = await fetch(`${apiURL}/products`);
      const productsData = await response.json();
      setProducts(productsData);
    } catch (error) {
      console.log(error);
    }
  };

  // Function to fetch a single product by ID from the server
  const fetchSingleProduct = async (id) => {
    try {
      const response = await fetch(`${apiURL}/products/${id}`);
      const productData = await response.json();
      setSingleProduct(productData.product);
    } catch (error) {
      console.log(error);
    }
  };

  // Fetch all products when the component mounts
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Landing setProducts={setProducts} />}>
        {/* Landing page with a nested route structure */}
        <Route
          index
          element={
            <ProductList
              products={products}
              setProducts={setProducts}
              fetchProducts={fetchProducts}
            />
          }
        />
        {/* Route for displaying a single product page */}
        <Route
          path="products/:id"
          element={<ProductPage fetchSingleProduct={fetchSingleProduct} singleProduct={singleProduct} />}
        />
        {/* Route for editing a product */}
        <Route
          path="edit/:id"
          element={<Edit fetchSingleProduct={fetchSingleProduct} singleProduct={singleProduct} setSingleProduct={setSingleProduct} />}
        />
        {/* Route for creating a new product */}
        <Route
          path="create"
          element={<CreateItem fetchProducts={fetchProducts} />}
        />
      </Route>
    </Routes>
  );
};
