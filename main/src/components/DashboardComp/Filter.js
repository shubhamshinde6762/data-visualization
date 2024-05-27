import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import Card from "./Card";
import DetailedCard from "./DetailedCard";
import { FaFilter } from "react-icons/fa";

const Filter = ({ setFilter, filterData, filter, totalPages, setPaneOpen }) => {
  const [selection, setSelection] = useState();

  const nextPage = () => {
    if (filter.page < totalPages) {
      setFilter((pre) => ({ ...pre, ["page"]: filter.page + 1 }));
    }
  };

  const prevPage = () => {
    if (filter.page > 1) {
      setFilter((pre) => ({ ...pre, ["page"]: filter.page - 1 }));
    }
  };

  return (
    <div className="flex-grow flex flex-col gap-4 p-4 py-2">
      <nav className=" flex select-none justify-center items-center gap-4 p-2 h-auto ">
        <div
          onClick={() => setPaneOpen(1)}
          className="w-fir z-50 xs:flex hidden justify-center text-white cursor-pointer relative items-center gap-2 "
        >
          <FaFilter className="text-xl" />
          <div className="text-xl">Filter</div>
        </div>
        <input
          className=" outline outline-slate-300 bg-slate-500 placeholder:text-gray-200 text-white focus:outline-2 focus:outline-slate-300 transition-all duration-200 rounded-md w-full font-poppins p-2 px-4"
          placeholder="Search"
        ></input>
        <CiSearch className=" text-3xl text-white font-bold cursor-pointer" />
      </nav>
      <div className="flex  justify-center items-start align-top flex-wrap w-full gap-4">
        {filterData &&
          filterData.map((ele) => (
            <Card key={ele.id} setSelection={setSelection} data={ele} />
          ))}
      </div>
      {totalPages > 1 && (
        <div className="flex justify-between items-center mt-4">
          {filter.page !== 1 && (
            <button
              onClick={prevPage}
              disabled={filter.page === 1}
              className="bg-blue-500 hover:bg-blue-700 rounded-xl text-white font-bold py-2 px-4 "
            >
              Previous
            </button>
          )}
          <span className="text-gray-300">
            Page {filter.page} of {totalPages}
          </span>
          {filter.page < totalPages && (
            <button
              onClick={nextPage}
              disabled={filter.page === totalPages}
              className="bg-blue-500 hover:bg-blue-700 rounded-xl text-white font-bold py-2 px-4 "
            >
              Next
            </button>
          )}
        </div>
      )}
      {selection && (
        <DetailedCard selection={selection} setSelection={setSelection} />
      )}
    </div>
  );
};

export default Filter;
