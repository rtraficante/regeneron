import { ChevronDownIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import ConceptExpand from "./ConceptExpand";
import EditConcept from "./EditConcept";

const Concept = ({
  toggleExpandTicket,
  concept,
  expandTicket,
  setSearchTerm,
  concepts,
}) => {
  const [editForm, setEditForm] = useState(false);

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
          <ChevronDownIcon
            className={`w-5 transition-transform duration-150 ${
              expandTicket.state && expandTicket.id === concept.id
                ? "rotate-180"
                : null
            } `}
          />
        </div>
      </div>

      {/* Show Edit Concept Form when it has been clicked and the concept ID matches the expanded concept ID */}
      {editForm && expandTicket.id === concept.id ? (
        <EditConcept
          concept={concept}
          setEditForm={setEditForm}
          concepts={concepts}
        />
      ) : // Otherwise just show the concept with the ID that matches the expanded concept ID
      expandTicket.state && expandTicket.id === concept.id ? (
        <ConceptExpand
          concept={concept}
          setSearchTerm={setSearchTerm}
          setEditForm={setEditForm}
        />
      ) : null}
    </div>
  );
};

export default Concept;
