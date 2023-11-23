import React, { useState, useEffect } from "react";
import { SaucesList } from "./SaucesList";
import { IoSearchSharp } from "react-icons/io5";
import Popup from "./Popup";

// import and prepend the api url to any fetch calls
import apiURL from "../api";
import { Route, Routes } from "react-router-dom";
import Landing from "./Landing";
import ProductList from "./ProductList";
import ProductPage from "./ProductPage";
import CreateItem from "./CreateItem";

export const App = () => {
  const [sauces, setSauces] = useState([]);
	const [products, setProducts] = useState([])
  const [product, setProduct] = useState({})
  const [showPopUp, setShowPopUp] = useState(false);


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
