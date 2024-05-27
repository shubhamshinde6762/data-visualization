import React, { useEffect, useState } from "react";
import Panel from "./sidePanel/Panel";
import { CiSearch } from "react-icons/ci";
import axios from "axios";
import Filter from "./DashboardComp/Filter";

function Dashboard() {
  const [counter, setCounter] = useState({
    pestle: [],
    country: [],
    region: [],
  });

  const [filter, setFilter] = useState({
    end_year: "",
    topic: "",
    sector: "",
    region: "",
    pestel: "",
    source: "",
    country: "",
    likelihood: "",
    page: 1,
    limit: 10,
    sortBy: "likelihood",
    sortOrder: 0,
  });

  const [filterPage, setFilterPage] = useState(0);
  const [filterData, setFilterData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const keys = Object.keys(counter);
        const results = await Promise.all(
          keys.map((key) =>
            axios.get(
              `${process.env.REACT_APP_API_URL}/api/v1/getCount?key=${key}`
            )
          )
        );

        const newCounter = keys.reduce((acc, key, index) => {
          acc[key] = results[index].data;
          return acc;
        }, {});

        setCounter(newCounter);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const queryParams = Object.keys(filter)
          .filter((key) => filter[key] !== "")
          .map((key) => `${key}=${encodeURIComponent(filter[key])}`)
          .join("&");

        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/v1/getdata?${queryParams}`
        );

        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [filter]);

  return (
    <div className="flex items-start ">
      <Panel filter={filter} setFilter={setFilter} />
      <div className="flex-grow">
        <nav className=" flex select-none justify-center items-center gap-2 p-2 h-auto ">
          <input
            className=" outline outline-slate-300 focus:outline-2 focus:outline-slate-700 transition-all duration-500 rounded-md w-full font-poppins p-2 px-4"
            placeholder="Search"
          ></input>
          <CiSearch className=" text-2xl cursor-pointer" />
        </nav>
        <Filter />
      </div>
    </div>
  );
}

export default Dashboard;
