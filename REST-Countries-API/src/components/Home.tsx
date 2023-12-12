import { Link } from "react-router-dom";
import { flagsDataStore } from "../stores/flagsDataStore";
import { Flag } from "./Flag";
import { useState } from "react";
import { stateData } from "../models/stateData";

export const Home = () => {
  const { dataAllFlags: allStates } = flagsDataStore();
  const [selected, setSelected] = useState("");
  const [searchText, setSearchText] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "region") {
      setSelected(value);
    } else if (name === "search") {
      setSearchText(value);
    }
  };

  return (
    <div className="flex flex-col gap-9 p-5">
      <input
        className="w-full mx-auto p-4 rounded-lg shadow-md"
        type="text"
        name="search"
        placeholder="Search for a Country"
        value={searchText}
        onChange={handleChange}
      />

      <select
        name="region"
        value={selected}
        onChange={handleChange}
        className="w-3/5 p-4 rounded-lg shadow-md"
      >
        <option value="">Filter By Region</option>
        <option value="Africa">Africa</option>
        <option value="Americas">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>

      <div className="mx-auto flex flex-wrap sm:flex-row">
        {allStates
          .filter((state: stateData) => {
            const regionMatch = selected === "" || state.region === selected;
            const searchMatch = state.name.common
              .toLowerCase()
              .includes(searchText.toLowerCase());
            return regionMatch && searchMatch;
          })
          .map((state: stateData) => (
            <Link
              key={state.name.common}
              to={`/${state.name.official}`}
              className="w-full sm:w-1/4 p-4"
            >
              <Flag {...state} />
            </Link>
          ))}
      </div>
    </div>
  );
};
