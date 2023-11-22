import React from "react";

const ProductList = ({ products, setProducts }) => {

  const handleDelete = async (id) => {
    try {
      // Delete item by ID
      const response = await fetch(`http://localhost:3000/api/v1/products/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        // Remove the deleted item from the local state
        setProducts(products.filter(item => item._id !== id));
      } else {
        console.error(`Failed to delete product with ID ${id}`);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-row flex-wrap">
      {products.map((product) => {
        return (
          <div
            key={product._id}
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
              <button onClick={() => handleDelete(product._id)} className="inline-flex items-center px-3 py-2 ml-3 text-sm font-medium text-center text-white bg-red-700 rounded-lg ">
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
