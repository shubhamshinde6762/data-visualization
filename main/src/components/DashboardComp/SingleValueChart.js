import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const SingleValueChart = ({ relevance, intensity }) => {
  const svgRef = useRef();

  useEffect(() => {
    const width = 300;
    const height = 150;
    const margin = { top: 50, right: 20, bottom: 28, left: 40 };
    const maxValue = 5;
    const maxIntensity = 96;

    const svg = d3
      .select(svgRef.current)
      .attr("width", width)
      .attr("height", height);

    svg.selectAll("*").remove();

    const relevanceBar = svg
      .append("rect")
      .attr("x", margin.left)
      .attr("y", height - margin.bottom - 6)
      .attr(
        "width",
        (relevance / maxValue) * (width - margin.left - margin.right)
      )
      .attr("height", 6)
      .attr("fill", "#4ADE80"); // Green

    const remainingRelevanceBar = svg
      .append("rect")
      .attr(
        "x",
        margin.left +
          (relevance / maxValue) * (width - margin.left - margin.right)
      )
      .attr("y", height - margin.bottom - 6)
      .attr(
        "width",
        (1 - relevance / maxValue) * (width - margin.left - margin.right)
      )
      .attr("height", 6)
      .attr("fill", "#1E293B");

    const intensityBar = svg
      .append("rect")
      .attr("x", margin.left)
      .attr("y", height / 2 - 6)
      .attr(
        "width",
        (intensity / maxIntensity) * (width - margin.left - margin.right) 
      )
      .attr("height", 6)
      .attr("fill", "#4ADE80");

    const remainingIntensityBar = svg
      .append("rect")
      .attr(
        "x",
        margin.left +
          (intensity / maxIntensity) * (width - margin.left - margin.right)
      )
      .attr("y", height / 2 - 6)
      .attr(
        "width",
        (1 - intensity / maxIntensity) * (width - margin.left - margin.right)
      )
      .attr("height", 6)
      .attr("fill", "#1E293B");

    svg
      .append("text")
      .attr("x", width / 2)
      .attr("y", height - 10)
      .attr("text-anchor", "middle")
      .attr("fill", "#4ADE80")
      .text(`Relevance: ${relevance} / 5`);

    svg
      .append("text")
      .attr("x", width / 2)
      .attr("y", height / 2 + 20)
      .attr("text-anchor", "middle")
      .attr("fill", "#4ADE80")
      .text(`Intensity: ${intensity} / 96`);
  }, [relevance, intensity]);

  return <svg ref={svgRef}></svg>;
};

export default SingleValueChart;
