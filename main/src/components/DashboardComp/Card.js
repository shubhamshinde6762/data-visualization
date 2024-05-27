import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import PieChart from "./Piechart";
const formatDate = (dateString) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

const Card = ({ data, setSelection }) => {
  return (
    <div
      onClick={() => setSelection(data)}
      className="flex cursor-pointer select-none min-h-[160px] hover:scale-[1.01] transition-all duration-300 flex-col gap-2 text-white bg-slate-900 p-2 rounded-xl max-w-[530px] min-w-[200px]"
    >
      <p className="text-center flex-grow text-pretty font-poppins text-xl xs:text-base overflow-hidden line-clamp-2">
        {data.title}
      </p>

      <div className="flex xs:flex-wrap w-full gap-2 justify-center items-center">
        {data.likelihood !== undefined && (
          <div className="flex justify-center">
            <PieChart likelihood={data.likelihood} />
          </div>
        )}
        <div className="w-full text-sm  flex flex-col text-right">
          <i className="text-sm font-lora">
            {data && data.source && data.source}{" "}
          </i>
          {data && (data.country || data.region) && (
            <i className="flex items-center justify-end text-slate-200 gap-1 font-barlow">
              <IoLocationOutline className="text-base text-white" />
              {data.country + ", " + data.region}
            </i>
          )}
          <i className="text-slate-300">
            {data &&
              data.published &&
              "Published on " + formatDate(data.published)}
          </i>
        </div>
      </div>
    </div>
  );
};

export default Card;
