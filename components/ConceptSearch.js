import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/solid";
import React from "react";

const ConceptSearch = ({ searchTerm, setSearchTerm }) => {
  return (
    <form className="flex flex-1 items-center space-x-2 rounded border border-gray-200 bg-gray-100 px-3 py-2">
      <MagnifyingGlassIcon className="w-5 text-gray-400" />
      <input
        name="email"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search by concept name"
        className="flex-1 bg-transparent outline-none"
      />
      {searchTerm.length ? (
        <XMarkIcon
          onClick={() => setSearchTerm("")}
          className="w-5 cursor-pointer"
        />
      ) : null}
    </form>
  );
};

export default ConceptSearch;
