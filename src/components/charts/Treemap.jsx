import React from "react";
import Chart from "react-apexcharts";

export default function TreemapChart() {
  const options = {
    chart: {
      type: "treemap",
    },
    legend: {
      show: false,
    },
    plotOptions: {
      treemap: {
        distributed: true, // Ensures different colors for each block
      },
    },
    colors: ["#008FFB", "#00E396", "#FEB019", "#FF4560", "#775DD0"],
  };

  const series = [
    {
      data: [
        { x: "Stocks", y: 40 },
        { x: "Mutual Funds", y: 25 },
        { x: "Bonds", y: 15 },
        { x: "Real Estate", y: 10 },
        { x: "Crypto", y: 10 },
      ],
    },
  ];

  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      <Chart options={options} series={series} type="treemap" height={200} />
    </div>
  );
}
