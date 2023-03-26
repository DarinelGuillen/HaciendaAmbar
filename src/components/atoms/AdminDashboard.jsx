import React, { useState, useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import "../../assets/style/atomscss/AdminDashboard.css";

function AdminDashboard() {
  const [chartData1, setChartData1] = useState({});
  const [chartData2, setChartData2] = useState({});
  const [chartData3, setChartData3] = useState({});
  const chartRef1 = useRef();
  const chartRef2 = useRef();
  const chartRef3 = useRef();

  useEffect(() => {
    const data1 = {
      labels: ["Categoría 1", "Categoría 2", "Categoría 3"],
      datasets: [
        {
          label: "Porcentaje de ventas",
          data: [30, 40, 30],
          backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
          hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        },
      ],
    };
    setChartData1(data1);
  }, []);

  useEffect(() => {
    const data2 = {
      labels: ["Paquete 1", "Paquete 2", "Paquete 3", "Paquete 4"],
      datasets: [
        {
          label: "Porcentaje de paquetes",
          data: [40, 10, 30, 20],
          backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#E7E9ED"],
          hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#E7E9ED"],
        },
      ],
    };
    setChartData2(data2);
  }, []);
  useEffect(() => {
    //Este num 3
    const data = {
      labels: ["A", "B", "C", "D", "E"],
      datasets: [
        {
          label: "Datos",
          data: [10, 20, 30, 40, 50],
          backgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56",
            "#E7E9ED",
            "#A1E7A1",
          ],
          hoverBackgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56",
            "#E7E9ED",
            "#A1E7A1",
          ],
        },
      ],
    };
    setChartData3(data);
  }, []);

  useEffect(() => {
    if (chartRef1.current) {
      chartRef1.current.destroy();
    }
    const ctx1 = document.getElementById("myChart1");
    chartRef1.current = new Chart(ctx1, {
      type: "bar",
      data: chartData1,
    });
  }, [chartData1]);

  useEffect(() => {
    if (chartRef2.current) {
      chartRef2.current.destroy();
    }
    const ctx2 = document.getElementById("myChart2");
    chartRef2.current = new Chart(ctx2, {
      type: "doughnut",
      data: chartData2,
    });
  }, [chartData2]);

  useEffect(() => {
    if (chartRef3.current) {
      chartRef3.current.destroy();
    }
    const ctx3 = document.getElementById("myChart3");
    chartRef3.current = new Chart(ctx3, {
      type: "bar",
      data: chartData3,
    });
  }, [chartData3]);

  return (
    <>
      <div className="chart-container">
        <div className="left40">
          <canvas id="myChart1"></canvas>
        </div>
        <div className="center30">
          <canvas id="myChart2"></canvas>
        </div>
        <div className="rigth30">
          <canvas id="myChart3"></canvas>
        </div>
      </div>
    </>
  );
}

export default AdminDashboard;
