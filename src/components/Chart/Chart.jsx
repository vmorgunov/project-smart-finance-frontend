import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { Container } from './Chart.styled';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

                    
export const Chart = () => {
  const isTabletOrDesktop = useMediaQuery({ minWidth: 768 });
  const isMobile = useMediaQuery({minWidth: 320, maxWidth: 767 })
 const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'График',
    },
  },
};

  const labels = ['Тут', 'Скоро', 'Будут', 'Наши', 'Расходы', 'и', 'Доходы'];
  
  const data = {
    labels,
    datasets: [
      {
        label: 'Транзакции',
        data: labels.map(() => Math.floor(Math.random() * 10)),
        backgroundColor: "var(--acent-color)",
    },
  ],
};
  
 return (
   <Container>
     {isMobile &&
       <Bar options={options} data={data} />
     }
        {isTabletOrDesktop &&
<Bar options={options} data={data} />
}
          </Container >
 
    );
};
    

// import { Bar } from "react-chartjs-2";

// export const Chart = ({ chartData }) => {
//   return (
//     <div>
//       <Bar
//         data={chartData}
//         options={{
//           plugins: {
//             title: {
//               display: true,
//               text: "Cryptocurrency prices"
//             },
//             legend: {
//               display: true,
//               position: "bottom"
//             }
//           }
//         }}
//       />
//     </div>
//   );
// };