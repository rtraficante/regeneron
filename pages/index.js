import Head from "next/head";
import Image from "next/image";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import Concept from "../components/Concept";
import ConceptExpand from "../components/ConceptExpand";
import ConceptSearch from "../components/ConceptSearch";

const data = [
  {
    conceptId: 1,
    displayName: "Diagnosis",
    description: "Entity domain",
    parentIds: null,
    childIds: "2,3",
    alternativeNames: null,
  },
  {
    conceptId: 2,
    displayName: "Disease of Nervous System",
    description: "Disease targeting the nervous system",
    parentIds: "1",
    childIds: "4",
    alternativeNames: null,
  },
  {
    conceptId: 3,
    displayName: "Disease of Eye",
    description: "Diseases targeting the eye",
    parentIds: "1",
    childIds: "2,3",
    alternativeNames: null,
  },
  {
    conceptId: 4,
    displayName: "Multiple Sclerosis (MS)",
    description: "Multiple Sclerosis",
    parentIds: "2,8",
    childIds: "5,6,7",
    alternativeNames: "MS,name1,name2",
  },
];

export default function Home() {
  const [expandTicket, setExpandTicket] = useState({
    state: false,
    id: 0,
  });
  const [searchTerm, setSearchTerm] = useState("");

  const dynamicSearch = () => {
    return data.filter((concept) =>
      concept.displayName.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const filteredData = dynamicSearch();

  const toggleExpandTicket = (id) => {
    if (expandTicket.id === id) {
      setExpandTicket({ state: false, id: 0 });
    } else {
      setExpandTicket({ state: true, id });
    }
  };

  return (
    <div className="flex mx-auto items-center flex-col mt-8">
      <h2 className="text-3xl text-center">Master Oncology Lookup</h2>
      <div className="mt-8 bg-gray-300 p-4 w-full max-w-[960px] mx-2 rounded">
        <div>
          <ConceptSearch
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />
        </div>
        {filteredData.length === 0 ? (
          <p>No data fits that criteria.</p>
        ) : (
          filteredData.map((concept) => (
            <div className="mt-2" key={concept.conceptId}>
              <Concept
                toggleExpandTicket={toggleExpandTicket}
                concept={concept}
                expandTicket={expandTicket}
              />
              {expandTicket.state && expandTicket.id === concept.conceptId ? (
                <ConceptExpand concept={concept} />
              ) : null}
            </div>
          ))
        )}
      </div>
    </div>
  );
}
