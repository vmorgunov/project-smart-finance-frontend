// import { useEffect, useState } from "react";
// import { Chart } from "./Chart";

// export function ChartReport() {
//   useEffect(() => {
//     const fetchPrices = async () => {
//       const res = await fetch("https://project-smart-finance.herokuapp.com/api/v1/");
//       const data = await res.json();
//       setChartData({
//         labels: data.data.map((crypto) => crypto.name),
//         datasets: [
//           {
//             label: "Price in USD",
//             data: data.data.map((crypto) => crypto.priceUsd),
//             backgroundColor: "var(--acent-color)"
//           }
//         ]
//       });
//     };
//     fetchPrices();
//   }, []);

//   const [chartData, setChartData] = useState({});

//   return (
//     <div>
//       <Chart chartData={chartData} />
//     </div>
//   );
// }