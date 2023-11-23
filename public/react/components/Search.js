import React from "react";
import { IoSearchSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const Search = ({ fetchProductsByName }) => {
  return (
    <div className="flex justify-between items-center px-7">
      <div className=" pr-5  relative w-[50%]">
        <input
          type="text"
          name="search"
          placeholder="Search for an item..."
          className="bg-[#f9fafb00] w-full py-4 pl-3 rounded-full mt-5  border-2 border-[#4338ca]"
          onChange={(e) => fetchProductsByName(e.target.value)}
        />
        <IoSearchSharp className="text-2xl text-gray-300 absolute right-[50px] top-[49%]" />
      </div>
      <Link to={'/create'}>
        <button className="bg-blue-500 text-white p-3 rounded text-sm">
          + Add new item
        </button>
      </Link>
    </div>
  );
};

export default Search;
