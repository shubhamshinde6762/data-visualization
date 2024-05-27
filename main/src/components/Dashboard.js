import React, { useEffect, useState } from "react";
import Panel from "./sidePanel/Panel";
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
    likelihood: 0,
    page: 1,
    limit: 6,
    sortBy: "likelihood",
    sortOrder: 0,
  });

  const [totalPages, setTotalPages] = useState(0);
  const [paneOpen, setPaneOpen] = useState(1);
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

        console.log(response);
        setFilterData(response.data.data);
        setTotalPages(response.data.totalPages);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [filter]);

  useEffect(() => console.log(paneOpen), [paneOpen]);

  return (
    <div className="flex items-start bg-slate-700">
      <Panel
        paneOpen={paneOpen}
        setPaneOpen={setPaneOpen}
        filter={filter}
        setFilter={setFilter}
      />
      <Filter
        totalPages={totalPages}
        filterData={filterData}
        filter={filter}
        setFilter={setFilter}
        setPaneOpen={setPaneOpen}
      />
    </div>
  );
}

export default Dashboard;
