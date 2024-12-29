import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store/store";
import { addHabit } from "../store/habbitSlice";

const AddHabbit = () => {
  const dispatch = useDispatch<AppDispatch>();

  const [name, setName] = useState("");
  const [freq, setFreq] = useState("daily");

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && freq) {
      dispatch(addHabit({ name, freq }));
    }

    setName("");
  };

  return (
    <div>
      <h2>Add habbit</h2>

      <div className="add-habit-form">
        <form onSubmit={handleAdd}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              autoComplete="off"
              value={name}
              placeholder="enter habbit name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="freq">Frequency</label>
            <select
              id="freq"
              value={freq}
              onChange={(e) => setFreq(e.target.value)}
            >
              <option value="daily">Daily</option>
              <option value="weekly">Weekly</option>
            </select>
          </div>

          <div className="form-group">
            <button type="submit">Add Habbit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddHabbit;
