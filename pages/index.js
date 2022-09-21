import Head from "next/head";
import Image from "next/image";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

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
    displayName: "Mutiple Sclerosis (MS)",
    description: "Multiple Sclerosis",
    parentIds: "2,8",
    childIds: "5,6,7",
    alternativeNames: "MS,name1,name2",
  },
];

export default function Home() {
  const [expandTicket, setExpandTicket] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const dynamicSearch = () => {
    return data.filter((concept) =>
      concept.displayName.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const filteredData = dynamicSearch();

  const toggleExpandTicket = () => {
    setExpandTicket(!expandTicket);
  };

  return (
    <div className="flex mx-auto items-center flex-col mt-8">
      <h2 className="text-3xl text-center">Master Oncology Lookup</h2>
      <div className="mt-8 bg-gray-300 p-4 w-full max-w-[960px] mx-2 rounded space-y-2">
        <div>
          <form>
            <input
              name="email"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by email"
              className="w-full mb-8 py-2 px-4 rounded-md"
            />
          </form>
        </div>
        {filteredData.length === 0 ? (
          <h2>No data fits that criteria.</h2>
        ) : (
          filteredData.map((concept) => (
            <div
              key={concept.conceptId}
              onClick={toggleExpandTicket}
              className="mx-auto w-full bg-gray-400 p-4 rounded flex justify-between items-center"
            >
              <div>
                <p>{concept.displayName}</p>
              </div>
              <div>
                <ChevronDownIcon className="w-5" />
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
