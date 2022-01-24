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

                    
export function Chart ({ transactions, categories, chartsCategoryId}) {
  const isTabletOrDesktop = useMediaQuery({ minWidth: 768 });
  const isMobile = useMediaQuery({minWidth: 320, maxWidth: 767 })
  const optionsMobile = {
    indexAxis: 'y',
      elements: {
    bar: {
      borderWidth: 2,
    },
  },
   responsive: true,
   maintainAspectRatio : false,
  plugins: {
    legend: {
      position: 'top',
    },
  },
  };
  
  const optionsDesktop = {
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

  const data = {
    labels: [ chartsCategoryId? transactions: categories ],
    datasets: [
      {
        label: '',
        data: [1,2,3,4],
        backgroundColor: 'var(--acent-color)',
    },
  ],
};
  
 return (
   <Container>
     {isMobile &&
       <Bar options={optionsMobile} data={data} />
     }
     {isTabletOrDesktop &&
       <Bar options={optionsDesktop} data={data} />
     }
   </Container >
  );
};
  
    

