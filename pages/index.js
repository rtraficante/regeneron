import { useState } from "react";
import ConceptLookupSystem from "../components/ConceptLookupSystem";
import prisma from "../client";

export default function Home({ concepts }) {
  const [expandTicket, setExpandTicket] = useState({
    state: false,
    id: 0,
  });
  const [searchTerm, setSearchTerm] = useState("");

  const dynamicSearch = () => {
    return concepts.filter((concept) =>
      concept.displayName.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const filteredData = dynamicSearch();

  const toggleExpandTicket = (id) => {
    if (expandTicket.id === id) {
      setExpandTicket({ state: false, id: null });
    } else {
      setExpandTicket({ state: true, id });
    }
  };

  return (
    <div className="flex mx-auto items-center flex-col mt-8 overflow-hidden h-[100%]">
      <h2 className="text-3xl text-center">Master Oncology Lookup</h2>
      <ConceptLookupSystem
        concepts={concepts}
        filteredData={filteredData}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        toggleExpandTicket={toggleExpandTicket}
        expandTicket={expandTicket}
      />
    </div>
  );
}

export async function getServerSideProps() {
  const concepts = await prisma.concept.findMany({
    include: {
      parents: true,
      children: true,
    },
  });

  return {
    props: {
      concepts,
    },
  };
}
