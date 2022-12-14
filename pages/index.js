import { useState } from "react";
import ConceptLookupSystem from "../components/ConceptLookupSystem";
import prisma from "../client";
import Head from "next/head";

export default function Home({ concepts }) {
  // Information about which concept to expand when clicked on
  const [expandTicket, setExpandTicket] = useState({
    state: false,
    id: 0,
  });
  const [searchTerm, setSearchTerm] = useState("");

  // Search bar functionality - Filter the search base on if
  // the character typed in are included in the concept display name
  // Also - sort alphabetically
  const dynamicSearch = () => {
    return concepts
      .sort((a, b) => a.displayName.localeCompare(b.displayName))
      .filter((concept) =>
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
    <>
      <Head>
        <title>Master Oncology</title>
      </Head>
      <div className="flex mx-auto items-center flex-col mt-8 overflow-hidden h-[100%]">
        <h2 className="text-3xl text-center font-bold">
          Master Oncology Lookup
        </h2>
        <ConceptLookupSystem
          concepts={concepts}
          filteredData={filteredData}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          toggleExpandTicket={toggleExpandTicket}
          expandTicket={expandTicket}
        />
      </div>
    </>
  );
}

// Getting initial concepts loaded
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
