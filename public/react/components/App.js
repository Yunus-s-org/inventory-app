import React, { useState, useEffect } from "react";
import { SaucesList } from "./SaucesList";
import { IoSearchSharp } from "react-icons/io5";

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
      <div className="flex flex-row">
        <div className="max-w-[15rem] ml-10 mt-10 border border-gray-200 rounded-lg shadow bg-[#f9fafb00]">
          <a href="#">
            <img
              className="rounded-t-lg p-1"
              src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
              alt=""
            />
          </a>
          <div className="p-3">
            <a href="#">
              <h5 className="mb-4 text-sm font-bold tracking-tight text-gray-900 ">
                Backpack
              </h5>
            </a>
            <p className="mb-3 text-xs font-normal text-gray-700 dark:text-gray-400">
              £9.99
            </p>
            <a
              href="#"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Add to cart
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div>
        <div className="max-w-[15rem] ml-10 mt-10 border border-gray-200 rounded-lg shadow bg-[#f9fafb00]">
          <a href="#">
            <img
              className="rounded-t-lg p-1"
              src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
              alt=""
            />
          </a>
          <div className="p-3">
            <a href="#">
              <h5 className="mb-4 text-sm font-bold tracking-tight text-gray-900 ">
                Backpack
              </h5>
            </a>
            <p className="mb-3 text-xs font-normal text-gray-700 dark:text-gray-400">
              £9.99
            </p>
            <a
              href="#"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Add to cart
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div>
        <div className="max-w-[15rem] ml-10 mt-10 border border-gray-200 rounded-lg shadow bg-[#f9fafb00]">
          <a href="#">
            <img
              className="rounded-t-lg p-1"
              src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
              alt=""
            />
          </a>
          <div className="p-3">
            <a href="#">
              <h5 className="mb-4 text-sm font-bold tracking-tight text-gray-900 ">
                Backpack
              </h5>
            </a>
            <p className="mb-3 text-xs font-normal text-gray-700 dark:text-gray-400">
              £9.99
            </p>
            <a
              href="#"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Add to cart
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div>
        <div className="max-w-[15rem] ml-10 mt-10 border border-gray-200 rounded-lg shadow bg-[#f9fafb00]">
          <a href="#">
            <img
              className="rounded-t-lg p-1"
              src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
              alt=""
            />
          </a>
          <div className="p-3">
            <a href="#">
              <h5 className="mb-4 text-sm font-bold tracking-tight text-gray-900 ">
                Backpack
              </h5>
            </a>
            <p className="mb-3 text-xs font-normal text-gray-700 dark:text-gray-400">
              £9.99
            </p>
            <a
              href="#"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Add to cart
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};
