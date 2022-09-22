import React from "react";

const ConceptSearch = ({ searchTerm, setSearchTerm }) => {
  return (
    <form>
      <input
        name="email"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search by concept name"
        className="w-full mb-8 py-2 px-4 rounded-md"
      />
    </form>
  );
};

export default ConceptSearch;
