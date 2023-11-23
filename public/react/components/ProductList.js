import React from "react";
import { Link } from "react-router-dom";
import Search from "./Search";
import { FaEdit, FaTrash } from "react-icons/fa";

const ProductList = ({ products, setProducts, fetchProducts }) => {
  // Function to handle the deletion of a product
  const handleDelete = async (id) => {
    try {
      // Delete item by ID using the API
      const response = await fetch(
        `http://localhost:3000/api/v1/products/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // Check if the deletion was successful
      if (response.ok) {
        // Remove the deleted item from the local state
        setProducts(products.filter((item) => item._id !== id));
      } else {
        console.error(`Failed to delete product with ID ${id}`);
      }
    } catch (error) {
      console.error(error);
    }
  };

  // Function to fetch products by name
  const fetchProductsByName = async (name) => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/v1/products?name=${name}`
      );
      const productsData = await response.json();
      setProducts(productsData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {/* Search component for filtering products by name */}
      <Search fetchProductsByName={fetchProductsByName} />

      {/* Product list container */}
      <div className="flex flex-row items-center flex-wrap">
        {products.map((product) => {
          return (
            // Product card container
            <div
              key={product._id}
              className="h-[60%] w-96  ml-10 mt-10 border border-gray-200 rounded-lg shadow bg-[#f9fafb00]"
            >
              <div className="relative">
                {/* Product image container */}
                <div className="w-full h-[30rem] rounded-md overflow-hidden group-hover:opacity-95 lg:h-[24rem]">
                  <img
                    className="object-center object-scale-down lg:w-full lg:h-full"
                    src={product.image}
                    alt=""
                  />
                </div>

                {/* Product name container */}
                <div className="p-3">
                  <Link to={`/products/${product._id}`}>
                    <span aria-hidden="true" className="absolute inset-0" />
                    {product.name}
                  </Link>
                </div>
              </div>

              {/* Product details and action buttons container */}
              <div className="p-3">
                <p className="mb-3 text-xs font-normal text-gray-700 dark:text-gray-400">
                  £{product.price}
                </p>

                {/* Edit button linking to the edit page */}
                <Link to={`/edit/${product._id}`}>
                  <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    <FaEdit />
                  </button>
                </Link>

                {/* Delete button triggering the handleDelete function */}
                <button
                  onClick={() => handleDelete(product._id)}
                  className="inline-flex items-center px-3 py-2 ml-3 text-sm font-medium text-center text-white bg-red-700 rounded-lg "
                >
                  <FaTrash />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductList;
