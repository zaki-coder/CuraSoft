import React from 'react'
import { HiSearch } from "react-icons/hi";


const SearchProtocolls = ({ setSearchData, items }) => {
  console.log(items);
  const handleSubmit = (e) => e.preventDefault();
  const handleSearchChange = (e) => {
    if (!e.target.value) return setSearchData(items);
    const resultsArray = items.filter(
      (protocoll) => protocoll.message.includes(e.target.value));
    setSearchData(resultsArray);
  };

  return (
    <header>
      <form
        onSubmit={handleSubmit}
        className="bg-primary mx-auto py-4 px-4 sm:px-6 lg:px-6 flex justify-between items-center rounded-t-md"
      >
        <input
          type="text"
          className="font-bold bg-primary outline-none placeholder-white text-white"
          placeholder="Protokol"
          onChange={handleSearchChange}
        />
        <button>
          <HiSearch className="w-6 h-6 text-white font-bold" />
        </button>
      </form>
    </header>
  );
};

export default SearchProtocolls