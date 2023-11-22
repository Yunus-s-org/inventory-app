import React, { useState, useEffect } from "react";
import { SaucesList } from "./SaucesList";
import { IoSearchSharp } from "react-icons/io5";
import ProductList from "./ProductList";

// import and prepend the api url to any fetch calls
import apiURL from "../api";

export const App = () => {
  const [sauces, setSauces] = useState([]);

  async function fetchSauces() {
    try {
      const response = await fetch(`${apiURL}/sauces`);
      const saucesData = await response.json();

      setSauces(saucesData);
    } catch (err) {
      console.log("Oh no an error! ", err);
    }
  }

  useEffect(() => {
    fetchSauces();
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
      <div className="links pr-5 flex justify-center items-center relative w-full">
        <input
          type="text"
          name="search"
          placeholder="Search for an item..."
          className="bg-[#f9fafb00] w-[50%] py-4 pl-3 rounded-full mt-5  border-2 border-[#4338ca]"
        />
        <IoSearchSharp className="text-3xl text-[#4338ca] absolute right-[27%] top-[43%]" />
      </div>
      <ProductList />
    </main>
  );
};
