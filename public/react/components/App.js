import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Landing from "./Landing";
import ProductList from "./ProductList";
import ProductPage from "./ProductPage";
import CreateItem from "./CreateItem";
import Edit from "./Edit";

export const App = () => {
  const [sauces, setSauces] = useState([]);
  const [products, setProducts] = useState([]);
  const [singleProduct, setSingleProduct] = useState({});

  const fetchProducts = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/v1/products`);
      const productsData = await response.json();
      setProducts(productsData);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchSingleProduct = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/v1/products/${id}`
      );
      const productData = await response.json();
      setSingleProduct(productData.product);
    } catch (error) {
      console.log(error);
    }
  };



  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Landing setProducts ={setProducts} />}>
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
        <Route path="products/:id" element={<ProductPage fetchSingleProduct={fetchSingleProduct} singleProduct={singleProduct} setSingleProduct={setSingleProduct} />} />
        <Route path="edit/:id" element={<Edit fetchSingleProduct={fetchSingleProduct} singleProduct={singleProduct} setSingleProduct={setSingleProduct} />} />
        <Route path="create" element={<CreateItem fetchProducts={fetchProducts} />} />
      </Route>
    </Routes>
  );
};
