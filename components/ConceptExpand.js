import { useRouter } from "next/router";
import React from "react";
import { deleteConcept } from "../util/api";
import ChildButton from "./ChildButton";
import ParentButton from "./ParentButton";

const ConceptExpand = ({ concept, setSearchTerm }) => {
  const router = useRouter();

  const refreshData = () => {
    router.replace(router.asPath);
  };

  return (
    <div className="mt-2 justify-between items-center cursor-default">
      <div>
        <p>Description: {concept.description}</p>
        <p>
          Alternative Names:{" "}
          {concept.alternativeNames ? concept.alternativeNames : "None"}
        </p>
        <div>
          <div className="flex space-x-1 flex-wrap">
            <p>Parents:</p>
            {concept.parents.length > 0 ? (
              <ParentButton concept={concept} setSearchTerm={setSearchTerm} />
            ) : (
              <p>None</p>
            )}
          </div>
          <div className="flex space-x-1 flex-wrap">
            <p>Children:</p>
            {concept.children.length > 0 ? (
              <ChildButton concept={concept} setSearchTerm={setSearchTerm} />
            ) : (
              <p>None</p>
            )}
          </div>
          <button
            className="p-2 py-3 mt-4 w-full max-w-[160px] text-sm bg-red-700 hover:bg-red-600 hover:drop-shadow-lg text-white rounded drop-shadow"
            onClick={async () => {
              await deleteConcept(concept.id);
              refreshData();
            }}
          >
            Delete Concept
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConceptExpand;
