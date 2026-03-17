"use client"; // 必須

import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const AisasChart = () => {
  const data = {
    labels: ["認知", "興味", "検索", "行動", "共有"],
    datasets: [
      {
        label: "各段階の影響度",
        data: [0.32, 0.28, 0.26, 0.22, 0.24],
        backgroundColor: [
          "rgba(75, 192, 192, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(255, 99, 132, 0.6)",
          "rgba(153, 102, 255, 0.6)",
        ],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" as const },
      title: { display: true, text: "AISASモデルにおける各段階の影響度" },
    },
  };

  return <Bar data={data} options={options} />;
};

export default AisasChart;
