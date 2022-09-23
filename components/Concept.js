import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";
import React from "react";
import ConceptExpand from "./ConceptExpand";

const Concept = ({
  toggleExpandTicket,
  concept,
  expandTicket,
  setSearchTerm,
}) => {
  return (
    <div className="overflow-hidden flex flex-col mx-auto w-full bg-white p-4 rounded drop-shadow cursor-pointer">
      <div
        onClick={() => toggleExpandTicket(concept.id)}
        className={` flex justify-between items-center`}
      >
        <div>
          <p className="font-bold">{concept.displayName}</p>
        </div>
        <div>
          {expandTicket.state && expandTicket.id === concept.id ? (
            <ChevronUpIcon className="w-5" />
          ) : (
            <ChevronDownIcon className="w-5" />
          )}
        </div>
      </div>
      {expandTicket.state && expandTicket.id === concept.id ? (
        <ConceptExpand concept={concept} setSearchTerm={setSearchTerm} />
      ) : null}
    </div>
  );
};

export default Concept;
