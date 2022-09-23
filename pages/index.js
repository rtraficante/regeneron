import { useState } from "react";
import ConceptLookupSystem from "../components/ConceptLookupSystem";
import prisma from "../client";

export async function getServerSideProps() {
  const concepts = await prisma.concept.findMany();

  return {
    props: {
      initialConcepts: concepts,
    },
  };
}

async function saveConcept(concept) {
  const res = await fetch("/api/concepts", {
    method: "POST",
    body: JSON.stringify(concept),
  });

  if (!res.ok) {
    throw new Error(res.statusText);
  }

  return await res.json();
}

export default function Home({ initialConcepts }) {
  const [concepts, setConcepts] = useState(initialConcepts);

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
    <div className="flex mx-auto items-center flex-col mt-8">
      <h2 className="text-3xl text-center">Master Oncology Lookup</h2>
      <ConceptLookupSystem
        concepts={concepts}
        setConcepts={setConcepts}
        saveConcept={saveConcept}
        filteredData={filteredData}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        toggleExpandTicket={toggleExpandTicket}
        expandTicket={expandTicket}
      />
    </div>
  );
}
