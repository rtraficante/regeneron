import Head from "next/head";
import Image from "next/image";

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
  return (
    <div className="flex mx-auto justify-center">
      <div className="mt-8 bg-gray-800 p-4 w-[95%] rounded-md space-y-2">
        {data.map((concept) => (
          <div
            key={concept.conceptId}
            className="mx-auto w-full bg-gray-900 p-4"
          >
            <div>
              <p>{concept.displayName}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
