import React, { useState, useEffect } from "react";
import { FaFilter } from "react-icons/fa";
import axios from "axios";

const Panel = (props) => {
  const [filterKeys, setFilterKeys] = useState({
    pestle: [],
    country: [],
    region: [],
    likelihood: [],
    source: [],
    sector: [],
    topic: [],
  });

  const changeHandler = (e) => {
    console.log(e.target);
    try {
      const { name, value, type, checked } = e.target;
      console.log(name, value, checked, type);
      props.setFilter((pre) => ({
        ...pre,
        [name]: type === "checkbox" ? checked : value,
      }));
    } catch (error) {}
  };

  useEffect(() => console.log(props.filter), [props.filter]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const keys = Object.keys(filterKeys);
        const results = await Promise.all(
          keys.map((key) =>
            axios.get(
              `${process.env.REACT_APP_API_URL}/api/v1/getSet?key=${key}`
            )
          )
        );

        const newFilterKeys = keys.reduce((acc, key, index) => {
          acc[key] = results[index].data;
          return acc;
        }, {});

        console.log(newFilterKeys);

        setFilterKeys(newFilterKeys);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="w-[280px] select-none p-2 py-4 sticky flex  gap-6 flex-col justify-start items-center bg-slate-800 text-white font-poppins h-screen">
      <div className="flex items-center gap-2 mb-3">
        <FaFilter className="text-xl" />
        <div className="text-xl">Filter</div>
      </div>
      <div className="p-2 py-3 w-full relative flex flex-col items-center justify-center gap-2 border-2 border-dotted rounded-xl ">
        <div className="absolute -top-3 left-4 bg-slate-800 px-1">Area</div>
        <label className="flex gap-4 items-center">
          <p className="min-w-16">Country</p>
          <select
            name="country"
            value={props.filter.country}
            onChange={changeHandler}
            className="text-gray-100 w-full bg-gray-600 text-base px-2 rounded-md whitespace-nowrap overflow-ellipsis overflow-hidden max-w-40"
          >
            <option default>Select Country</option>
            {filterKeys &&
              filterKeys.country &&
              filterKeys.country.length > 0 &&
              filterKeys.country.map(
                (ele) =>
                  ele && (
                    <option className=" " value={ele}>
                      {ele}
                    </option>
                  )
              )}
          </select>
        </label>
        <label className="flex gap-4 items-center">
          <p className="min-w-16">Region</p>
          <select
            name="region"
            value={props.filter.region}
            onChange={changeHandler}
            className="text-gray-100 w-full bg-gray-600 text-base px-2 rounded-md whitespace-nowrap overflow-ellipsis overflow-hidden max-w-40"
          >
            <option default>Select Region</option>
            {filterKeys &&
              filterKeys.region &&
              filterKeys.region.length > 0 &&
              filterKeys.region.map(
                (ele) =>
                  ele && (
                    <option className=" " value={ele}>
                      {ele}
                    </option>
                  )
              )}
          </select>
        </label>
      </div>
      <div className=" relative p-2 w-full border-t border-b border-dashed rounded-md">
        <div className="absolute -top-3 left-4 bg-slate-800 px-1">
          Likelihood
        </div>
        <div class="relative mb-6 mt-3 w-full flex flex-col gap-2 px-2">
          <input
            name="likelihood"
            type="range"
            onChange={changeHandler}
            min={0}
            step={1}
            max={5}
            className="w-full h-2 bg-gray-100 rounded-lg appearance-none cursor-pointer dark:bg-gray-500"
          />
          <div className="text-sm w-[93%] text-gray-400  absolute flex justify-between items-center -bottom-6">
            {Array.from({ length: 6 }).map((ele, index) => (
              <span>{index}</span>
            ))}
          </div>
        </div>
      </div>
      <div className="p-2 py-3 w-full relative flex flex-col items-center justify-center gap-2 border-2 border-dotted rounded-xl ">
        <div className="absolute -top-3 left-4 bg-slate-800 px-1">Type</div>
        <label className="flex gap-4 items-center">
          <p className="min-w-16">Pestel</p>
          <select
            name="pestle"
            value={props.filter.pestle}
            onChange={changeHandler}
            className="text-gray-100 w-full bg-gray-600 text-base px-2 rounded-md whitespace-nowrap overflow-ellipsis overflow-hidden max-w-40"
          >
            <option default>Select Pestel</option>
            {filterKeys &&
              filterKeys.pestle &&
              filterKeys.pestle.length > 0 &&
              filterKeys.pestle.map(
                (ele) =>
                  ele && (
                    <option className=" " value={ele}>
                      {ele}
                    </option>
                  )
              )}
          </select>
        </label>
        <label className="flex gap-4 items-center">
          <p className="min-w-16">Source</p>
          <select
            name="source"
            value={props.filter.source}
            onChange={changeHandler}
            className="text-gray-100 w-full bg-gray-600 text-base px-2 rounded-md whitespace-nowrap overflow-ellipsis overflow-hidden max-w-40"
          >
            <option default>Select Source</option>
            {filterKeys &&
              filterKeys.source &&
              filterKeys.source.length > 0 &&
              filterKeys.source.map(
                (ele) =>
                  ele && (
                    <option className=" " value={ele}>
                      {ele}
                    </option>
                  )
              )}
          </select>
        </label>
        <label className="flex gap-4 items-center">
          <p className="min-w-16">Sector</p>
          <select
            name="sector"
            value={props.filter.sector}
            onChange={changeHandler}
            className="text-gray-100 w-full bg-gray-600 text-base px-2 rounded-md whitespace-nowrap overflow-ellipsis overflow-hidden max-w-40"
          >
            <option default>Select Sector</option>
            {filterKeys &&
              filterKeys.sector &&
              filterKeys.sector.length > 0 &&
              filterKeys.sector.map(
                (ele) =>
                  ele && (
                    <option className=" " value={ele}>
                      {ele}
                    </option>
                  )
              )}
          </select>
        </label>
        <label className="flex gap-4 items-center">
          <p className="min-w-16">Topic</p>
          <select
            name="topic"
            value={props.filter.topic}
            onChange={changeHandler}
            className="text-gray-100 w-full bg-gray-600 text-base px-2 rounded-md whitespace-nowrap overflow-ellipsis overflow-hidden max-w-40"
          >
            <option default>Select Pestel</option>
            {filterKeys &&
              filterKeys.topic &&
              filterKeys.topic.length > 0 &&
              filterKeys.topic.map(
                (ele) =>
                  ele && (
                    <option className=" " value={ele}>
                      {ele}
                    </option>
                  )
              )}
          </select>
        </label>
        <label className="flex gap-2 w-full items-center">
          <p className="min-w-20">End-Year</p>
          <input
            name="end_year"
            placeholder="Year"
            type="number"
            min={1900}
            max={3000}
            value={props.filter.end_year}
            onChange={changeHandler}
            className="text-gray-100 w-full bg-gray-600 text-base px-2 rounded-md whitespace-nowrap overflow-ellipsis overflow-hidden max-w-36"
          ></input>
        </label>
      </div>

      <div className="p-2 py-3 w-full relative flex flex-col items-center justify-center gap-2 border-2 border-dotted rounded-xl ">
        <div className="absolute -top-3 left-4 bg-slate-800 px-1">Sort</div>
        <div className="bg-slate-900 text-slate-200 flex gap-2 items-center p-1 rounded-3xl">
          <div
            onClick={(e) =>
              props.setFilter((pre) => ({ ...pre, ["sortBy"]: "likelihood" }))
            }
            className={`pl-2 py-1 cursor-pointer rounded-full transition-all duration-500 ${
              props.filter.sortBy === "likelihood" &&
              "bg-slate-700 text-slate-50  pr-2"
            }`}
          >
            Likelihood
          </div>
          <div
            onClick={(e) =>
              props.setFilter((pre) => ({ ...pre, ["sortBy"]: "relevance" }))
            }
            className={`pr-2 py-1 cursor-pointer rounded-full transition-all duration-500  ${
              props.filter.sortBy === "relevance" &&
              "bg-slate-700 text-slate-50  pl-2 "
            }`}
          >
            Relevence
          </div>
        </div>
        <div className="bg-slate-900 text-slate-200 flex gap-2 items-center p-1 rounded-3xl">
          <div
            onClick={(e) =>
              props.setFilter((pre) => ({ ...pre, ["sortOrder"]: true }))
            }
            className={`pl-2 py-1 cursor-pointer rounded-full transition-all duration-500 ${
              props.filter.sortOrder && "bg-slate-700 text-slate-50  pr-2"
            }`}
          >
            Ascending
          </div>
          <div
            onClick={(e) =>
              props.setFilter((pre) => ({ ...pre, ["sortOrder"]: false }))
            }
            className={`pr-2 py-1 cursor-pointer rounded-full transition-all duration-500  ${
              !props.filter.sortOrder && "bg-slate-700 text-slate-50  pl-2 "
            }`}
          >
            Descending
          </div>
        </div>
      </div>
    </div>
  );
};

export default Panel;
