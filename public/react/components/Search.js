import React from 'react'
import { IoSearchSharp } from "react-icons/io5";

const Search = () => {
  return (
    <div className="links pr-5 flex justify-center items-center relative w-full">
    <input
      type="text"
      name="search"
      placeholder="Search for an item..."
      className="bg-[#f9fafb00] w-[50%] py-4 pl-3 rounded-full mt-5  border-2 border-[#4338ca]"
    />
    <IoSearchSharp className="text-3xl text-[#4338ca] absolute right-[27%] top-[43%]" />
  </div>
  )
}

export default Search