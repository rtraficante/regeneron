import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";
import React from "react";

const Concept = ({ toggleExpandTicket, concept, expandTicket }) => {
  return (
    <div
      onClick={() => toggleExpandTicket(concept.conceptId)}
      className={`mx-auto w-full bg-gray-400 p-4 rounded ${
        expandTicket.state && expandTicket.id === concept.conceptId
          ? "rounded-b-none"
          : null
      } flex justify-between items-center`}
    >
      <div>
        <p>{concept.displayName}</p>
      </div>
      <div>
        {expandTicket.state && expandTicket.id === concept.conceptId ? (
          <ChevronUpIcon className="w-5" />
        ) : (
          <ChevronDownIcon className="w-5" />
        )}
      </div>
    </div>
  );
};

export default Concept;
