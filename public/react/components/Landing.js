import React, { useState, useEffect } from "react";
import ProductList from "./ProductList";
import Search from "./Search";
import { Outlet, Link } from "react-router-dom";

const Landing = ({ setProducts }) => {
  const [sauces, setSauces] = useState([]);



  return (
    <>
      <main>
        <nav className="bg-[#0f172a] text-white px-5 py-7 flex justify-between items-center">
          <div className="right">
            <Link to={"/"}>
              <h1 className="text-xl cursor-pointer">Inventory App</h1>
            </Link>
          </div>
          <a
            href="#"
            className="text-sm text-gray-50 bg-[#0f172a] p-2 hover:bg-gray-100 hover:text-[#0f172a] rounded"
          ></a>
        </nav>

        <Outlet />
      </main>
    </>
  );
};

export default Landing;
