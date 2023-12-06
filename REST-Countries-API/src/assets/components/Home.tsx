import { useEffect } from "react";
import { flagsDataStore } from "../stores/flagsDataStore";
import { Flag } from "./flag";
import { TState } from "../models/TState";

export const Home = () => {
  const { setAllStates, allStates } = flagsDataStore();
  useEffect(() => {
    setAllStates();
  }, [setAllStates]);
  return (
    <div className="w-3/4 mx-auto flex flex-col gap-9">
      {allStates.map((state: TState) => (
        <Flag {...state} />
      ))}
    </div>
  );
};
