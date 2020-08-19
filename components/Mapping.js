import React, { useEffect, useState } from "react";
import styles from '../styles/Home.module.css';
import * as d3 from "d3";
import { useD3 } from "d3blackbox"
import us from ".././counties-albers-10m.json";

const topojson = require("topojson");

const parseDate = d3.utcParse("%Y-%m-%d");
const radius = d3.scaleSqrt([0, 200000], [0, 60]);
const path = d3.geoPath();
const format = d3.format(",.0f");
const features = new Map(topojson.feature(us, us.objects.counties).features.map(d => [d.id, d]));
const projection = d3.geoAlbersUsa().scale(1300).translate([487.5, 305])

function drawMap(svg, data) {
  svg = svg.attr("viewBox", [0, 0, 975, 610]);

  svg.append("path")
    .datum(topojson.feature(us, us.objects.nation))
    .attr("fill", "#ddd")
    .attr("d", path);

  svg.append("path")
    .datum(topojson.mesh(us, us.objects.states, (a, b) => a !== b))
    .attr("fill", "none")
    .attr("stroke", "white")
    .attr("stroke-linejoin", "round")
    .attr("d", path);

  const legend = svg.append("g")
    .attr("fill", "#777")
    .attr("transform", "translate(915,608)")
    .attr("text-anchor", "middle")
    .style("font", "10px sans-serif")
    .selectAll("g")
    .data(radius.ticks(4).slice(1))
    .join("g");

  legend.append("circle")
    .attr("fill", "none")
    .attr("stroke", "#ccc")
    .attr("cy", d => -radius(d))
    .attr("r", radius);

  legend.append("text")
    .attr("y", d => -2 * radius(d))
    .attr("dy", "1.3em")
    .text(radius.tickFormat(4, "s"));

  svg.append("g")
    .attr("fill", "brown")
    .attr("fill-opacity", 0.5)
    .attr("stroke", "#fff")
    .attr("stroke-width", 0.5)
    .selectAll("circle")
    .data(data
      .filter(d => d.position)
      .sort((a, b) => d3.descending(a.value, b.value)))
    .join("circle")
    .attr("transform", d => `translate(${d.position})`)
    .attr("r", d => radius(d.value))
    .append("title")
    .text(d => `${d.title}
${format(d.value)}`);

  return svg.node();
}


export default function Mapping() {
  const [data, setData] = useState(null);

  function position({ fips, state, county }) {
    if (!fips) switch (`${county}, ${state}`) {
      case "New York City, New York": return projection([-74.0060, 40.7128]);
      case "Kansas City, Missouri": return projection([-94.5786, 39.0997]);
    }
    const feature = features.get(fips);
    return feature && path.centroid(feature);
  }

  useEffect(() => {
    async function loadData() {
      const rawdata = await d3.csv("us-counties.csv");

      const data = rawdata.map(d => ({
        id: d.fips,
        date: parseDate(d.date),
        position: position(d),
        title: d.county === "Unknown" ? d.state : `${d.county}, ${d.state}`,
        value: d.cases
      }));
      setData(data);
    }
    loadData();
  });

  const svgRef = useD3(anchor => {
    if (data !== null) {
      drawMap(d3.select(anchor), data);
    }
  });

  return (
    <div className="map">
      <h1>Hello, World</h1>
      <h2>Update the COVID19 cases happens today!</h2>
      <svg width="1280" height="1024" ref={svgRef} />
      <style jsx>{`
        .map {
          text-align: center;
          color: red;
        }
      `}</style>
    </div>
  );
}
