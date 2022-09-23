import React from "react";

const ConceptSearch = ({ searchTerm, setSearchTerm }) => {
  return (
    <form className="flex-1">
      <input
        name="email"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search by concept name"
        className="w-full py-2 px-4 rounded-md border-2"
      />
    </form>
  );
};

export default ConceptSearch;
