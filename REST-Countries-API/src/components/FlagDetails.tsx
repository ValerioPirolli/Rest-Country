import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { flagsDataStore } from "../stores/flagsDataStore";

export const FlagDetails = () => {
  const { name } = useParams<{ name: string }>();
  const { setOneState, dataFlag } = flagsDataStore();
  useEffect(() => {
    if (name) {
      setOneState(name);
    }
  }, [name, setOneState]);
  return (
    <>
      <button className="border border-gray-200 shadow-md w-fit px-6">
        Back
      </button>
      <div className="p-7 flex flex-col sm:flex-row gap-6 sm:gap-20 text-sm sm:text-lg leading-9">
        <img src={dataFlag?.flags.png} alt="" className="sm:w-2/5" />
        <div className="flex flex-col gap-5">
          <p className="font-semibold text-3xl">{dataFlag?.name.common}</p>
          <div>
            <div className="sm:flex gap-5">
              <div>
                <p className="font-semibold">
                  Native Name:
                  <span className="font-normal">
                    {" "}
                    {dataFlag?.name.official}
                  </span>
                </p>
                <p className="font-semibold">
                  Population:
                  <span className="font-normal"> {dataFlag?.population}</span>
                </p>
                <p className="font-semibold">
                  Region:
                  <span className="font-normal"> {dataFlag?.region}</span>
                </p>
                <p className="font-semibold">
                  Sub Region:
                  <span className="font-normal"> {dataFlag?.subregion}</span>
                </p>
                <p className="font-semibold">
                  Capital:
                  <span className="font-normal"> {dataFlag?.capital}</span>
                </p>
              </div>
              <div className="mt-5 sm:mt-0">
                <p className="font-semibold">
                  Top Lebel Domain:
                  <span className="font-normal"> {dataFlag?.tld}</span>
                </p>
                <p className="font-semibold">
                  Currencies:
                  {Object.values(dataFlag?.currencies || {}).map((currency) => (
                    <span key={currency.name}>
                      <span className="font-normal"> {currency.name}</span>
                    </span>
                  ))}
                </p>

                <p className="font-semibold">
                  Languages:
                  {Object.values(dataFlag?.languages || {}).map(
                    (language, index, array) => (
                      <span key={language} className="font-normal">
                        {" " + language}
                        {index < array.length - 1 && ","}
                      </span>
                    )
                  )}
                </p>
              </div>
            </div>
          </div>
          <div className="sm:flex items-end justify-center gap-3">
            <p className="font-semibold">Border Countries: </p>
            <div className="flex flex-wrap items-center pt-5 gap-3 flex-1">
              {dataFlag?.borders.slice(0, 3).map((border) => {
                return (
                  <p
                    key={border}
                    className="shadow-lg border border-gray-200 rounded-lg py-1 px-6 text-center text-sm"
                  >
                    {border}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
