import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { flagsDataStore } from "../stores/flagsDataStore";

export const FlagDetails = () => {
  const { name } = useParams<{ name: string }>();
  const { setOneState, oneState, allStates, setAllStates } = flagsDataStore();
  useEffect(() => {
    if (!allStates) {
      setAllStates();
    }
    if (name) {
      setOneState(name);
    }
  }, [name, setOneState, allStates, setAllStates]);

  const state = oneState;
  return (
    <div className="p-7">
      {state.name}
      {state.population}
    </div>
  );
};
