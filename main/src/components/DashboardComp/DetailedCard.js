import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { IoCloseOutline } from "react-icons/io5";
import Piechart from "./Piechart"; 

const formatDate = (dateString) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

const DetailedCard = ({ selection, setSelection }) => {
  return (
    <div className="fixed overflow-hidden duration-300 transition-all top-0 left-0 bg-stone-900 bg-opacity-35 flex justify-center items-center h-screen w-full max-w-screen">
      <div className="max-w-[1000px] transition-all p-12 flex flex-col gap-6 xs:p-3 duration-300 relative w-[90%]  max-h-[90%] rounded-xl bg-slate-900">
        <IoCloseOutline
          onClick={() => setSelection()}
          className="absolute cursor-pointer hover:scale-105 transition-all duration-300 text-white font-bold text-3xl top-3 right-3"
        />

        {selection?.title && (
          <div className="text-white p-2 text-center text-2xl xs:text-lg font-bold ">
            {selection.title}
          </div>
        )}
        <div className="flex gap-4 font-barlow xs:flex-wrap">
          <div className="p-2 py-3 text-white w-full relative flex flex-col items-center justify-center gap-2 border-2 border-dotted rounded-xl ">
            <div className="absolute -top-3 left-4 bg-slate-900 px-1">Type</div>
            {selection?.pestel && <p>Pestel : {selection.pestel}</p>}
            {selection?.source && <p>Source : {selection.source}</p>}
            {selection?.sector && <p>Sector : {selection.sector}</p>}
            {selection?.topic && <p>Topic : {selection.topic}</p>}
            {selection?.start_year && (
              <p>Start-Year : {selection.start_year}</p>
            )}
            {selection?.end_year && <p>End-Year : {selection.end_year}</p>}
          </div>

          <div className="p-2 py-3 text-white w-full relative flex flex-col items-center justify-center gap-2 border-2 border-dotted rounded-xl ">
            <div className="absolute -top-3 left-4 bg-slate-900 px-1">
              Other
            </div>
            {selection?.country && <p>Country : {selection.country}</p>}
            {selection?.region && <p>Region : {selection.region}</p>}
            {selection?.insight && <p>Insight : {selection.insight}</p>}
            {selection?.intensity && <p>Intensity : {selection.intensity}</p>}
            {selection?.relevance && <p>Relevance : {selection.relevance}</p>}
          </div>
        </div>

        <div className="flex gap-2 xs:flex-wrap items-center">
          {selection?.likelihood !== undefined && (
            <div className="flex-grow flex justify-end w-full mt-4">
              <Piechart likelihood={selection.likelihood} />
            </div>
          )}
          <div className="w-fit min-w-[280px] sx:min-w-0 text-sm flex flex-col text-right">
            {selection?.source && (
              <i className="text-sm font-lora">{selection.source}</i>
            )}
            {(selection?.country || selection?.region) && (
              <i className="flex items-center justify-end text-slate-200 gap-1 font-barlow">
                <IoLocationOutline className="text-base text-white" />
                {`${selection.country ?? ""}, ${selection.region ?? ""}`}
              </i>
            )}
            {selection?.published && (
              <i className="text-slate-300">
                {`Published on ${formatDate(selection.published)}`}
              </i>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailedCard;
