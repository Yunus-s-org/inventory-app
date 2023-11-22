import React, { useState, useEffect } from "react";
import { SaucesList } from "./SaucesList";
import { IoSearchSharp } from "react-icons/io5";
import Popup from "./Popup";

// import and prepend the api url to any fetch calls
import apiURL from "../api";
import ProductList from "./ProductList";
import Search from "./Search";
import { set } from "mongoose";

export const App = () => {
  const [sauces, setSauces] = useState([]);
	const [products, setProducts] = useState([])
  const [product, setProduct] = useState({})
  const [showPopUp, setShowPopUp] = useState(false);

  async function fetchSauces() {
    try {
      const response = await fetch(`${apiURL}/sauces`);
      const saucesData = await response.json();

      setSauces(saucesData);
    } catch (err) {
      console.log("Oh no an error! ", err);
    }
  }


	const fetchProducts = async() => {
		try {
			const response = await fetch(`http://localhost:3000/api/v1/products`)
			const productsData = await response.json()
			setProducts(productsData)
		} catch (error) {
			console.log(error)
		}
	}

  const fetchProductsByName = async(name) => {
		try {
			const response = await fetch(`http://localhost:3000/api/v1/products?name=${name}`)
			const productsData = await response.json()
			setProducts(productsData)
		} catch (error) {
			console.log(error)
		}
	}

  useEffect(() => {
		fetchProducts()
  }, []);

  return (
    <main>
      <nav className="bg-[#0f172a] text-white px-5 py-7 flex justify-between items-center">
        <div className="right">
          <h1 className="text-xl cursor-pointer">Inventory App</h1>
        </div>
        <a
          href="#"
          className="text-sm text-gray-50 bg-[#0f172a] p-2 hover:bg-gray-100 hover:text-[#0f172a] rounded"
        >
          All products
        </a>
      </nav>
      <Search fetchProductsByName={fetchProductsByName} />
      {showPopUp ? <Popup/> : <ProductList products = {products} setProducts={setProducts} fetchProducts={fetchProducts} setShowPopUp={setShowPopUp}/>}
    </main>
  );
};
