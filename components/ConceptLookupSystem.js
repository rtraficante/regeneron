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
  saveConcept,
  concepts,
}) => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="mt-8 bg-white py-8 p-4 w-full max-w-[960px] mx-2 rounded">
      <div className="w-full">
        <div className="flex">
          <ConceptSearch
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />
          {showForm ? (
            <button
              className="p-2 py-3 w-[180px] max-w-[200px] text-sm bg-blue-800 hover:bg-blue-600 hover:drop-shadow-lg text-white rounded drop-shadow"
              onClick={() => setShowForm(false)}
            >
              Exit
            </button>
          ) : (
            <button
              className="p-2 py-3 w-[180px] max-w-[200px] text-sm bg-blue-800 hover:bg-blue-600 hover:drop-shadow-lg text-white rounded drop-shadow"
              onClick={() => setShowForm(true)}
            >
              Add Concept
            </button>
          )}
        </div>

        {showForm && (
          <AddConceptForm concepts={concepts} saveConcept={saveConcept} />
        )}
      </div>
      {filteredData.length === 0 ? (
        <p>No data fits that criteria.</p>
      ) : (
        filteredData.map((concept) => (
          <div className="mt-2" key={concept.id}>
            <Concept
              toggleExpandTicket={toggleExpandTicket}
              concept={concept}
              expandTicket={expandTicket}
            />
          </div>
        ))
      )}
    </div>
  );
};

export default ConceptLookupSystem;
