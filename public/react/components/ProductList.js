import React from "react";

const ProductList = ({ products }) => {
  return (
    <div className="flex flex-row flex-wrap">
      {products.map((product) => {
        return (
          <div
            key={product.id}
            className="h-[60%] w-96 ml-10 mt-10 border border-gray-200 rounded-lg shadow bg-[#f9fafb00]"
          >
            <div className="w-full h-[30rem] rounded-md overflow-hidden group-hover:opacity-95 lg:h-[24rem]">
              <img
                className="object-center object-scale-down lg:w-full lg:h-full"
                src={product.image}
                alt=""
              />
            </div>
            <div className="p-3">
              <a href="#">
                <h5 className="mb-4 text-sm font-bold tracking-tight text-gray-900 ">
                  {product.name}
                </h5>
              </a>
              <p className="mb-3 text-xs font-normal text-gray-700 dark:text-gray-400">
                £{product.price}
              </p>
              <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Edit
              </button>
              <button className="inline-flex items-center px-3 py-2 ml-3 text-sm font-medium text-center text-white bg-red-700 rounded-lg ">
                Delete
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;
