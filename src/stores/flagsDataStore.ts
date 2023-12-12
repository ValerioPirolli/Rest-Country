import { create } from "zustand";
import { stateData } from "../models/stateData";

type TFlagsDataStore = {
  dataAllFlags: stateData[];
  dataFlag?: stateData;
  setAllStates: () => void;
  setOneState: (name: string) => void;
};

export const flagsDataStore = create<TFlagsDataStore>((set) => ({
  dataAllFlags: [],
  setAllStates: async () => {
    try {
      const response = await fetch(
        "https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital,subregion,tld,currencies,languages,borders"
      );
      if (!response.ok) {
        throw new Error("data not found");
      }
      const data = await response.json();
      set({ dataAllFlags: data });
    } catch (error) {
      console.error("Error fetching all states:", error);
    }
  },
  setOneState: async (name: string) => {
    try {
      const response = await fetch(
        `https://restcountries.com/v3.1/name/${name}?fields=name,flags,population,region,capital,subregion,tld,currencies,languages,borders`
      );
      if (!response.ok) {
        throw new Error("data not found");
      }
      const data = await response.json();
      set({ dataFlag: data[0] });
    } catch (error) {
      console.error("Error fetching all states:", error);
    }
  },
}));
