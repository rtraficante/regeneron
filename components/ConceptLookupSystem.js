import React, { useState } from "react";
import AddConceptForm from "./AddConceptForm";
import Concept from "./Concept";
import ConceptSearch from "./ConceptSearch";

const ConceptLookupSystem = ({
  searchTerm,
  setSearchTerm,
  filteredData,
  toggleExpandTicket,
  expandTicket,
  concepts,
}) => {
  // Form state for the Add Concept Form
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="mt-8 bg-white p-4 md:p-8 w-full max-w-[960px] mx-2 rounded-md space-y-2">
      <div className="w-full">
        {/* Search Bar */}
        <div className="flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-4">
          <ConceptSearch
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />
          {!showForm && (
            <button
              className="p-2 py-3 w-full md:w-[180px] md:max-w-[200px] text-sm bg-blue-800 hover:bg-blue-600 hover:drop-shadow-lg text-white rounded drop-shadow"
              onClick={() => setShowForm(true)}
            >
              Add Concept
            </button>
          )}
        </div>

        {showForm && (
          <AddConceptForm concepts={concepts} setShowForm={setShowForm} />
        )}
      </div>

      {filteredData.length === 0 ? (
        <p>No data fits that criteria.</p>
      ) : (
        <div>
          {/* List of Concepts */}
          {filteredData.map((concept) => (
            <div className="mt-2" key={concept.id}>
              <Concept
                setSearchTerm={setSearchTerm}
                toggleExpandTicket={toggleExpandTicket}
                concept={concept}
                expandTicket={expandTicket}
                concepts={concepts}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ConceptLookupSystem;
