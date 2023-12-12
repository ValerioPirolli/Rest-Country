import { stateData } from "../models/stateData";

export const Flag = (data: stateData) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md sm:h-full">
      <img
        src={data.flags.png}
        className="shadow-md aspect-video bg-cover bg-center"
      />
      <div className="px-6 pb-10 leading-7 pt-4">
        <h3 className="text-xl text my-3">{data.name.common}</h3>
        <p className="font-semibold">
          Population: <span className="font-normal">{data.population}</span>
        </p>
        <p className="font-semibold">
          Region: <span className="font-normal">{data.region}</span>
        </p>
        <p className="font-semibold">
          Capital: <span className="font-normal">{data.capital[0]}</span>
        </p>
      </div>
    </div>
  );
};
