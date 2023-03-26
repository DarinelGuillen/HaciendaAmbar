// // window.addEventListener('load', function() {
// //   var densityCanvas = document.getElementById("densityChart");

// //   Chart.defaults.global.defaultFontFamily = "Lato";
// //   Chart.defaults.global.defaultFontSize = 18;

// //   var densityData = {
// //     label: 'Density of Planets (kg/m3)',
// //     data: [5427, 5243, 5514, 3933, 1326, 687, 1271, 1638]
// //   };

// //   var barChart = new Chart(densityCanvas, {
// //     type: 'bar',
// //     data: {
// //       labels: ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"],
// //       datasets: [densityData]
// //     }
// //   });
// // });

// // function MyFuntion(){
// // var densityCanvas = document.getElementById("densityChart");

// // Chart.defaults.global.defaultFontFamily = "Lato";
// // Chart.defaults.global.defaultFontSize = 18;

// // var densityData = {
// //   label: 'Density of Planets (kg/m3)',
// //   data: [5427, 5243, 5514, 3933, 1326, 687, 1271, 1638]
// // };

// // var barChart = new Chart(densityCanvas, {
// //   type: 'bar',
// //   data: {
// //     labels: ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"],
// //     datasets: [densityData]
// //   }
// // });
// // }

// // import Chart from 'chart.js';

// // // utilizando import

// // // utilizando require
// // const Chart = require('chart.js');

// // import { Chart } from '/node_modules/.vite/deps/chart__js.js?v=6642513b';

// // export default function MyFunction() {
// //   alert("ALERTTTTT")
// //   console.log("Chart is defined:", typeof Chart !== "undefined");

// //   var densityCanvas = document.getElementById("densityChart");

// //   // Set default font family and font size for all charts
// //   Chart.defaults.font.family = "Lato";
// //   Chart.defaults.font.size = 18;

// //   console.log("densityCanvas is defined:", densityCanvas);

// //   var densityData = {
// //     label: 'Density of Planets (kg/m3)',
// //     data: [5427, 5243, 5514, 3933, 1326, 687, 1271, 1638]
// //   };

// //   var barChart = new Chart(densityCanvas, {
// //     type: 'bar',
// //     data: {
// //       labels: ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"],
// //       datasets: [densityData]
// //     }
// //   }); 

// //   // Return the chart object if needed
// //   return barChart;
// // }

// import { Chart } from '/node_modules/.vite/deps/chart__js.js?v=6642513b';
// import { LineController } from 'chart.js';
// export default function MyFunction() {
//   alert("ALERTTTTT");
//   console.log("Chart is defined:", typeof Chart !== "undefined");

//   var chartCanvas = document.getElementById("chart");

//   // Set default font family and font size for all charts
//   Chart.defaults.font.family = "Lato";
//   Chart.defaults.font.size = 18;

//   console.log("chartCanvas is defined:", chartCanvas);

//   var data = {
//     labels: ["January", "February", "March", "April", "May", "June", "July"],
//     datasets: [
//       {
//         label: "Sales",
//         data: [65, 59, 80, 81, 56, 55, 40],
//         fill: false,
//         borderColor: "rgba(75,192,192,1)",
//         tension: 0.1
//       },
//       {
//         label: "Profit",
//         data: [35, 41, 50, 60, 70, 80, 90],
//         fill: false,
//         borderColor: "rgba(255,99,132,1)",
//         tension: 0.1
//       },
//       {
//         label: "Expenses",
//         data: [25, 31, 40, 50, 60, 70, 80],
//         fill: false,
//         borderColor: "rgba(54, 162, 235, 1)",
//         tension: 0.1
//       }
//     ]
//   };

//   var options = {
//     responsive: true,
//     plugins: {
//       title: {
//         display: true,
//         text: 'Sales, Profit and Expenses'
//       },
//       legend: {
//         position: 'bottom'
//       }
//     }
//   };

//   var chart = new Chart(chartCanvas, {
//     type: "line",
//     data: data,
//     options: options
//   });

//   // Return the chart object if needed
//   return chart;
// }



// // window.addEventListener('load', () => {
// //   MyFuntion();
// // });
