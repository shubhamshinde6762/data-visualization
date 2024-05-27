import React, { useRef, useEffect } from "react";
import * as d3 from "d3";

const PieChart = ({ likelihood }) => {
  const ref = useRef();

  useEffect(() => {
    const data = [
      { label: "Likes", value: likelihood },
      { label: "Remaining", value: 5 - likelihood },
    ];

    const width = 160;
    const height = 80;
    const radius = Math.min(width, height * 2) / 3;
    const innerRadius = radius / 1.125;
    const color = d3.scaleOrdinal().range(["#ffbb00", "#ccc"]);
    const arc = d3.arc().outerRadius(radius).innerRadius(innerRadius);

    const pie = d3
      .pie()
      .value((d) => d.value)
      .startAngle(-Math.PI / 2)
      .endAngle(Math.PI / 2)
      .padAngle(0.03);

    const svg = d3
      .select(ref.current)
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", `translate(${width / 2}, ${height - 20})`);

    const path = svg.selectAll("path").data(pie(data)).enter().append("path");

    path
      .attr("d", arc)
      .attr("fill", (d, i) => color(i))
      .attr("stroke", "#ffffff")        
      .style("stroke-width", "0.5px");

    svg
      .append("text")
      .attr("text-anchor", "middle")
      .attr("dy", "-0.35em")
      .style("font-size", "20px")
      .style("fill", "#4caf50")
      .text(`${likelihood}.0`);
  }, [likelihood]);

  return (
    <div className="">
      <svg className="" ref={ref}></svg>
    </div>
  );
};

export default PieChart;
