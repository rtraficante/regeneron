import { useRouter } from "next/router";
import React, { useState } from "react";
import { MultiSelect } from "react-multi-select-component";
import { updateConcept } from "../util/api";

const EditConcept = ({ concept, concepts, setEditForm }) => {
  const [data, setData] = useState({
    displayName: concept.displayName,
    alternativeNames: concept.alternativeNames,
    description: concept.description,
  });

  const router = useRouter();
  const refreshData = () => {
    router.replace(router.asPath);
  };

  // Preset the parents and the children in the format
  // that React Multi Select needs it to be in for the information
  // to be available on first render
  const presetParents = concept.parents.map((parent) => {
    return {
      id: parent.id,
      label: parent.displayName,
      value: parent.displayName,
    };
  });
  const presetChildren = concept.children.map((child) => {
    return { id: child.id, label: child.displayName, value: child.displayName };
  });

  // Use the previously preset parents and children to set the initial state
  const [parentsSelected, setParentsSelected] = useState(presetParents);
  const [childrenSelected, setChrildrenSelected] = useState(presetChildren);

  // Format the options for the multi select tool
  const options = concepts.map((val) => {
    return { id: val.id, label: val.displayName, value: val.displayName };
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateConcept(concept.id, {
        ...data,
        parents: parentsSelected,
        children: childrenSelected,
      });

      setEditForm(false);
      refreshData();
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    setData(() => ({
      ...data,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-2 flex flex-col items-center bg-[#f6f6f6] p-2 py-4 rounded-md"
    >
      <div className="grid grid-cols-2 gap-4 w-full">
        <input
          onChange={handleChange}
          value={data.displayName}
          required
          name="displayName"
          placeholder="Concept Name"
          className="py-1 px-2 border-2 rounded"
        />
        <input
          onChange={handleChange}
          name="alternativeNames"
          placeholder="Alternative Names (separate by commas)"
          className="py-1 px-2 border-2 rounded"
        />
        <div>
          <h2>Select Parents</h2>
          <MultiSelect
            options={options}
            value={parentsSelected}
            onChange={setParentsSelected}
            labelledBy={"Select Parents"}
          />
        </div>

        <div>
          <h2>Select Children</h2>
          <MultiSelect
            options={options}
            value={childrenSelected}
            onChange={setChrildrenSelected}
            labelledBy="Select Children"
          />
        </div>

        <textarea
          onChange={handleChange}
          value={data.description}
          name="description"
          placeholder="Description"
          className="py-1 px-2 border-2 rounded"
        />
      </div>

      <div className="flex justify-around w-full">
        <button className="p-2 py-3 mt-4 w-full max-w-[200px] text-sm bg-blue-800 hover:bg-blue-600 text-white rounded drop-shadow">
          Save Changes
        </button>
        <button
          className="p-2 py-3 mt-4 w-full max-w-[200px] text-sm bg-white border-blue-800 border-2 text-blue-800 hover:text-blue-600 hover:border-blue-600 rounded drop-shadow"
          onClick={() => setEditForm(false)}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default EditConcept;
