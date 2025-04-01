import React from "react";
import Chart from "react-apexcharts";

const SplineAreaChart = () => {
 
  const options = {
    chart: {
      type: "area",
      toolbar: { show: false },
    },
    grid: { show: false },
    stroke: { curve: "smooth" },
    xaxis: { type: "datetime" },
    yaxis: { labels: { formatter: (val) => val.toFixed(2) } },
    tooltip: {
      theme: "light", // Light theme to ensure dark text
      style: {
        fontSize: "14px",
        fontWeight: "bold",
        color: "#000", // Black text
      },
      x: { format: "dd MMM yyyy" },
    },
  };

  const series = [
    {
      name: "Stock Price",
      data: [
        { x: new Date("2024-03-01").getTime(), y: 100 },
        { x: new Date("2024-03-05").getTime(), y: 120 },
        { x: new Date("2024-03-10").getTime(), y: 90 },
        { x: new Date("2024-03-15").getTime(), y: 110 },
      ],
    },
  ];

  return (
    <Chart options={options} series={series} type="area" height={270} />
  );
};

export default SplineAreaChart;
