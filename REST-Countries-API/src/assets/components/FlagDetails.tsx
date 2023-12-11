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
    <>
      <button className="border border-gray-200 shadow-md w-fit px-6">
        Back
      </button>
      <div className="p-7 flex flex-col gap-5 ">
        <img src={state.flags.svg} alt="" className="sm:w-2/4" />
        <div className="flex flex-wrap gap-5">
          <p className="text-2xl font-semibold w-full">Belgium</p>
          <div className="sm:w-2/4">
            <p className="font-semibold">
              Native Name: <span className="font-normal"> Belgium</span>
            </p>
            <p className="font-semibold">
              Population: <span className="font-normal"> 1</span>
            </p>
            <p className="font-semibold">
              Region: <span className="font-normal"> Europe</span>
            </p>
            <p className="font-semibold">
              Sub Region:<span className="font-normal"> Western Europe</span>
            </p>
            <p className="font-semibold">
              Capital:<span className="font-normal"> Brussels</span>
            </p>
          </div>
          <div className="sm:w-2/4">
            <p className="font-semibold">
              Top Lebel Domain: <span className="font-normal"> .be</span>
            </p>
            <p className="font-semibold">
              Currencies: <span className="font-normal"> Euro</span>
            </p>
            <p className="font-semibold">
              Languages: <span className="font-normal"> Dutch</span>
            </p>
          </div>
          <div>
            <p>Border Countries</p>
            <div className="flex flex-wrap justify-around items-center pt-5 gap-3">
              <p className="shadow-lg border border-gray-200 py-2 text-center w-24">
                France
              </p>
              <p className="shadow-lg border border-gray-200 py-2 text-center w-24">
                Germany
              </p>
              <p className="shadow-lg border border-gray-200 py-2 text-center w-24">
                Netherlands
              </p>
              <p className="shadow-lg border border-gray-200 py-2 text-center w-24">
                France
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
