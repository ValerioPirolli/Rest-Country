import { create } from "zustand";
import { TState } from "../models/TState";

type TFlagsDataStore = {
  allStates: TState[];
  oneState: TState;
  setAllStates: () => void;
  setOneState: (name: string) => void;
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
      set({ allStates: data });
    } catch (error) {
      console.error("Error fetching all states:", error);
    }
  },
  setOneState: (name) => {
    set((state) => ({
      oneState:
        state.allStates.find((st) => st.name === name) || ({} as TState),
    }));
  },
}));
