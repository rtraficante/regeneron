import { useRouter } from "next/router";
import React from "react";
import { deleteConcept } from "../util/api";
import ChildButton from "./ChildButton";
import ParentButton from "./ParentButton";

const ConceptExpand = ({ concept, setSearchTerm, setEditForm }) => {
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
          <div className="space-x-2">
            <button
              className="p-2 mt-4 w-full max-w-[120px] text-sm bg-blue-800 hover:bg-blue-600 text-white rounded drop-shadow"
              onClick={() => setEditForm(true)}
            >
              Edit Concept
            </button>
            <button
              className="p-2 mt-4 w-full max-w-[120px] text-sm bg-red-700 hover:bg-red-600 text-white rounded drop-shadow"
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
    </div>
  );
};

export default ConceptExpand;
