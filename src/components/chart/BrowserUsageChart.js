import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

// Register the components you need
ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["Chrome", "Firefox", "Safari", "Edge"],
  datasets: [
    {
      label: "# of Users",
      data: [60, 15, 15, 10],
      backgroundColor: ["#36A2EB", "#FF6384", "#FFCE56", "#4BC0C0"],
    },
  ],
};

export default function BrowserUsageChart() {
  return (
    <div style={{ maxWidth: "400px", margin: "0 auto" }}>
      <Doughnut data={data} />
    </div>
  );
}
