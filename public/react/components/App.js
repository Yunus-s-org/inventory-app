import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Landing from "./Landing";
import ProductList from "./ProductList";
import ProductPage from "./ProductPage";
import CreateItem from "./CreateItem";

export const App = () => {
  const [sauces, setSauces] = useState([]);
  const [products, setProducts] = useState([]);


  const fetchProducts = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/v1/products`);
      const productsData = await response.json();
      setProducts(productsData);
    } catch (error) {
      console.log(error);
    }
  };



  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Landing />}>
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
        <Route path="products/:id" element={<ProductPage />} />
        <Route path="create" element={<CreateItem fetchProducts={fetchProducts} />} />
      </Route>
    </Routes>
  );
};
