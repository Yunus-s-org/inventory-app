import React from "react";
import { IoSearchSharp } from "react-icons/io5";

const Search = ({ fetchProductsByName }) => {
  return (
    <div className="flex justify-center items-center">
      <div className="links pr-5  relative w-[50%]">
        <input
          type="text"
          name="search"
          placeholder="Search for an item..."
          className="bg-[#f9fafb00] w-full py-4 pl-3 rounded-full mt-5  border-2 border-[#4338ca]"
          onChange={(e) => fetchProductsByName(e.target.value)}
        />
        <IoSearchSharp className="text-2xl text-gray-300 absolute right-[50px] top-[49%]" />
      </div>
    </div>
  );
};

export default Search;
