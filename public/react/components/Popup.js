import React, { useState } from "react";

const Popup = () => {
  return (
    <form className="w-full flex justify-center max-w-lg flex-col mx-auto mt-10 p-5 shadow-lg">
      <div className="flex flex-wrap -mx-3 mb-8 justify-center">
        <h1 className="text-2xl font-bold">Add an item</h1>
      </div>
      <div className="flex flex-wrap -mx-3 mb-4">
        <div className="w-full px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-item-name"
          >
            Item Name
          </label>
          <input
            className="appearance-none block w-full bg-gray-100 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-item-name"
            type="text"
            placeholder="Item name..."
          />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-7">
        <div className="w-full px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-description"
          >
            description
          </label>
          <input
            className="appearance-none block w-full overflow-auto bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-description"
            type="description"
            placeholder="This Item comes in all shapes and sizes..."
          />
          <p className="text-gray-600 text-xs italic">
            Make it as long and as crazy as you'd like
          </p>
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-2">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-price"
          >
            Price
          </label>
          <input
            className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-price"
            type="number"
            placeholder="10.99"
          />
        </div>
        <div className="w-full md:w-1/2 px-3 mb-4">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-category"
          >
            Category
          </label>
          <div className="relative">
            <select
              className="block appearance-none w-full bg-gray-100 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-category"
            >
              <option>men's clothing</option>
              <option>jewelery</option>
              <option>electronics</option>
              <option>women's clothing</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-image-url"
          >
            Image URL:
          </label>
          <input
            className="appearance-none block w-full bg-gray-100 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-image-url"
            type="text"
            placeholder="https://myimage.com/chosen-image"
          />
        </div>
      </div>
      <button
        class="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm font-bold border-4 text-white py-1 px-2 mb-1 rounded"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};

export default Popup;
