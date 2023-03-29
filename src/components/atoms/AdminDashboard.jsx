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
      labels: ["Corto plazo", "Normal", "Último minuto"],
      datasets: [
        {
          label: "Porcentaje de ventas",
          data: [15, 80, 5],
          backgroundColor: ["#ED0302", "#ED0302", "#ED0302"],
          hoverBackgroundColor: ["#ED0302", "#ED0302", "#ED0302"],
        },
      ],
    };
    setChartData1(data1);
  }, []);

  useEffect(() => {
    const data2 = {
      labels: ["Paquete matoymente vendido", "Paquete menormente vendido", "Paquete normalmente vendido"],
      datasets: [
        {
          label: "Porcentaje de paquetes",
          data: [40, 10, 30],
          backgroundColor: ["#ED0302", "#9C2727", "#74393A"],
          hoverBackgroundColor: ["#4B4B4C", "#4B4B4C", "#4B4B4C"],
        },
      ],
    };
    setChartData2(data2);
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
        </div>
      </div>
    </>
  );
}

export default AdminDashboard;
