import React from "react";
import Chart from "react-apexcharts";

const PieChart = () => {
  const chartOptions = {
    series: [44, 55, 41, 17, 15], // Data values
    options: {
      chart: {
        type: "pie",
      },
      labels: ["Apple", "Mango", "Orange", "Banana", "Grapes"], // Categories
      legend: {
        position: "bottom",
      },
    },
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <Chart options={chartOptions.options} series={chartOptions.series} type="pie" width="100%" />
    </div>
  );
};

export default PieChart;
