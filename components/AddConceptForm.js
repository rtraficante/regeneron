import { useRouter } from "next/router";
import React, { useState } from "react";
import { MultiSelect } from "react-multi-select-component";
import { saveConcept } from "../util/api";

const AddConceptForm = ({ concepts, setShowForm }) => {
  const [data, setData] = useState({
    displayName: "",
    alternativeNames: "",
    description: "",
  });

  const router = useRouter();
  const refreshData = () => {
    router.replace(router.asPath);
  };

  const [parentsSelected, setParentsSelected] = useState([]);
  const [childrenSelected, setChrildrenSelected] = useState([]);

  // Format options in the way the multi select tool needs
  const options = concepts.map((val) => {
    return { id: val.id, label: val.displayName, value: val.displayName };
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await saveConcept({
        ...data,
        parents: parentsSelected,
        children: childrenSelected,
      });
      setShowForm(false);
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
      <div className="grid md:grid-cols-2 gap-2 md:gap-4 w-full">
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

      <div className="flex flex-col md:flex-row justify-around w-full">
        <button className="p-2 py-3 mt-4 w-full md:max-w-[200px] text-sm bg-blue-800 hover:bg-blue-600 text-white rounded drop-shadow">
          Save Concept
        </button>
        <button
          className="p-2 py-3 mt-2 w-full md:max-w-[200px] text-sm bg-white border-blue-800 border-2 text-blue-800 hover:text-blue-600 hover:border-blue-600 rounded drop-shadow"
          onClick={() => setShowForm(false)}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default AddConceptForm;
