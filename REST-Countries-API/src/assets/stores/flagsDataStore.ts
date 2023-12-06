import { create } from "zustand";
import { TState } from "../models/TState";

type TFlagsDataStore = {
  allStates: TState[];
  oneState: TState;
  setAllStates: () => void;
  getOneState: (name: string) => void;
};

export const flagsDataStore = create<TFlagsDataStore>((set) => ({
  allStates: [],
  oneState: {} as TState,
  setAllStates: async () => {
    try {
      const response = await fetch("../../../data.json");
      if (!response.ok) {
        throw new Error("data not found");
      }

      const data = await response.json();
      console.log(data);
      set({ allStates: data });
    } catch (error) {
      console.error("Error fetching all states:", error);
    }
  },
  getOneState: (name) => {
    set({
      oneState: flagsDataStore
        .getState()
        .allStates.find((st) => st.name === name),
    });
  },
}));
