import { useEffect } from "react";
import { flagsDataStore } from "../stores/flagsDataStore";

export const Home = () => {
  const { setAllStates, allStates } = flagsDataStore();
  useEffect(() => {
    setAllStates();
  }, [setAllStates]);
  return (
    <div>
      {allStates.map((step) => (
        <h1>name: {step.name}</h1>
      ))}
    </div>
  );
};
