import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Edit = ({ fetchProducts }) => {
  // Extracting the 'id' parameter from the URL using 'useParams' hook
  const { id } = useParams();

  // State variables to hold the edited item's details
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");

  // Function to handle the edit of an item
  const handleEdit = async (id, updatedData) => {
    try {
      // Sending a PATCH request to update the item with the provided 'id'
      const response = await fetch(
        `http://localhost:3000/api/v1/products/${id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedData),
        }
      );

      // Check if the update was successful
      if (!response.ok) {
        console.error(
          `Error updating item with ID ${id}: ${response.statusText}`
        );
        return;
      }

      // Parse the response data
      const data = await response.json();
      console.log(`Item with ID ${id} updated successfully:`, data);

      // Fetch updated products to refresh the UI
      fetchProducts();
    } catch (error) {
      console.error(`Error updating item with ID ${id}:`, error);
    }
  };

  // Object holding the updated item's data
  const updatedItemData = {
    name: name,
    price: price,
    description: description,
    category: category,
    image: image,
  };

  return (
    <form className="w-full flex justify-center max-w-lg flex-col mx-auto mt-10 p-5 shadow-lg">
      {/* Section for displaying the item being edited */}
      <div className="flex flex-wrap -mx-3 mb-8 justify-center">
        <h1 className="text-2xl font-bold">
          Edit item <span className="text-blue-300 text-md">{id}</span>{" "}
        </h1>
      </div>

      {/* Form input fields for editing item details */}
      <div className="flex flex-wrap -mx-3 mb-4">
        <div className="w-full px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-item-name"
          >
            Item Name
          </label>
          <input
            className="appearance-none block w-full bg-gray-100 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-item-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Item name..."
          />
        </div>
      </div>

      {/* Additional input fields for description, price, category, and image */}
      <div className="flex flex-wrap -mx-3 mb-7">
        <div className="w-full px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-description"
          >
            Description
          </label>
          <input
            className="appearance-none block w-full overflow-auto bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-description"
            type="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
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
            htmlFor="grid-price"
          >
            Price
          </label>
          <input
            className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-price"
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="10.99"
          />
        </div>
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-category"
          >
            Category
          </label>
          <input
            className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-category"
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="Category"
          />
        </div>
      </div>

      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-image-url"
          >
            Image URL:
          </label>
          <input
            className="appearance-none block w-full bg-gray-100 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-image-url"
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            placeholder="https://myimage.com/chosen-image"
          />
        </div>
      </div>

      {/* Submit button to trigger the handleEdit function */}
      <button
        className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm font-bold border-4 text-white py-1 px-2 mb-1 rounded"
        type="submit"
        onClick={() => handleEdit(id, updatedItemData)}
      >
        Submit
      </button>
    </form>
  );
};

export default Edit;
