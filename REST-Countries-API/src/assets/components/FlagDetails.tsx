import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { flagsDataStore } from "../stores/flagsDataStore";

export const FlagDetails = () => {
  const { name } = useParams<{ name: string }>();
  const { setOneState, oneState } = flagsDataStore();
  useEffect(() => {
    console.log("ciao");
    if (name) {
      setOneState(name);
    }
  }, [name, setOneState]);

  const state = oneState;
  return (
    <div className="p-7">
      {state.name}
      {state.population}
      {state.languages.map((st) => (
        <p>{st.name}</p>
      ))}
      {state.currencies.map((st) => (
        <p>{st.name}</p>
      ))}
    </div>
  );
};
