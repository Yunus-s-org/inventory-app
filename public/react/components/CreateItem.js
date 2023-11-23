import React, { useState } from "react";

// Component for creating a new item
const CreateItem = ({ fetchProducts }) => {
  // State variables to store input values
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [featured, setFeatured] = useState(false);

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make a POST request to create a new item
      const response = await fetch(`http://localhost:3000/api/v1/products`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          description,
          price,
          category,
          image,
          featured,
        }),
      });

      // Check if the request was successful
      if (response.ok) {
        const data = await response.json();
        console.log(data);
      } else {
        console.error(
          `Server error: ${response.status} ${response.statusText}`
        );
      }

      // Clear the form fields and fetch updated product list
      setName("");
      setDescription("");
      setPrice("");
      setCategory("");
      setImage("");
      setFeatured(false);
      fetchProducts();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    // Form for creating a new item
    <div className="mx-5">
      <h1 className="flex justify-center items-center text-3xl m-5 text-blue-700">
        Create a new item
      </h1>
      <form className="flex flex-col">
        {/* Input for item name */}
        <label htmlFor="name" className="text-sm mt-5">
          Name
        </label>
        <input
          type="text"
          name="name"
          placeholder="Enter name of item"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="block w-[20%] pl-4 mt-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />

        {/* Input for item description */}
        <label htmlFor="description" className="text-sm mt-5">
          Description
        </label>
        <input
          type="text"
          name="description"
          placeholder="Enter description for item"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="block w-[20%] pl-4 mt-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />

        {/* Input for item price */}
        <label htmlFor="price" className="text-sm mt-5">
          Price
        </label>
        <input
          type="number"
          name="price"
          placeholder="Enter price for item"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
          className="block w-[20%] pl-4 mt-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />

        {/* Input for item category */}
        <label htmlFor="category" className="text-sm mt-5">
          Category
        </label>
        <input
          type="text"
          name="category"
          placeholder="Enter Category of item"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="block w-[20%] pl-4 mt-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />

        {/* Input for item image */}
        <label htmlFor="image" className="text-sm mt-5">
          Image
        </label>
        <input
          type="text"
          name="image"
          placeholder="Enter image for item"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="block w-[20%] pl-4 mt-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />

        {/* Checkbox for featured item */}
        <div className="flex items-center my-5">
          <label htmlFor="featured" className="text-sm ">
            Featured
          </label>
          <input
            type="checkbox"
            name="featured"
            value={featured}
            onClick={(e) => setFeatured(!featured)}
            className="ml-3"
          />
        </div>

        {/* Submit button */}
        <button
          type="submit"
          className="bg-blue-700 w-[20%] text-white py-3 uppercase rounded"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateItem;
