import React, { useState } from "react";
import { MultiSelect } from "react-multi-select-component";

const AddConceptForm = ({ saveConcept, concepts }) => {
  const [data, setData] = useState({
    displayName: "",
    alternativeNames: "",
    parents: [],
    children: [],
    description: "",
  });

  const options = concepts.map((val) => {
    return { label: val.displayName, value: val.displayName };
  });

  const handleSubmit = async (data, e) => {
    e.preventDefault();
    try {
      await saveConcept(data);

      e.target.reset();
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    e.persist();
    setData(() => ({
      ...data,
      [e.target.name]: e.target.value,
    }));
  };

  const handleParentChange = (e) => {
    setData(() => ({
      ...data,
      parents: [e.target.value],
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4 flex flex-col items-center">
      <div className="grid grid-cols-2 gap-4 w-full">
        <input
          onChange={handleChange}
          value={data.displayName}
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

        <MultiSelect
          options={options}
          value={data.parents}
          // onChange={() => setData(() => ({ ...data, parents:  }))}
          labelledBy="Select Parents"
        />

        <select
          // onChange={handleSelectChange}
          multiple={true}
          name="chidren"
          placeholder="Select Childre"
          className="py-1 px-2 border-2 rounded"
          value={data.children}
        >
          <option value="DEFAULT" disabled>
            Select Children
          </option>
        </select>
        <textarea
          onChange={handleChange}
          name="description"
          placeholder="Description"
          className="py-1 px-2 border-2 rounded"
        />
      </div>

      <button className="p-2 py-3 mt-4 w-full max-w-[200px] text-sm bg-blue-800 hover:bg-blue-600 hover:drop-shadow-lg text-white rounded drop-shadow">
        Save Concept
      </button>
    </form>
  );
};

export default AddConceptForm;
