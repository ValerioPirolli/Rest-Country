import { Link } from "react-router-dom";
import { flagsDataStore } from "../stores/flagsDataStore";
import { Flag } from "./Flag";
import { TState } from "../models/TState";

export const Home = () => {
  const { allStates } = flagsDataStore();

  return (
    <div className="w-3/4 mx-auto flex flex-col gap-9">
      {allStates.map((state: TState) => (
        <Link key={state.name} to={`/${state.name}`}>
          <Flag {...state} />
        </Link>
      ))}
    </div>
  );
};
