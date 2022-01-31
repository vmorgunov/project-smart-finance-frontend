/* eslint-disable array-callback-return */
import React from 'react';
import { useState, useEffect } from 'react';
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
  Legend,
);
export const Chart = ({ transactions, chartsCategoryId = 0 }) => {
  const [labels, setLabelsArr] = useState([]);
  const [indexAxisArr, setIndexAxisArr] = useState(5000);
  const [category, setCategory] = useState(0);

  const isTabletOrDesktop = useMediaQuery({ minWidth: 768 });
  const isMobile = useMediaQuery({ minWidth: 320, maxWidth: 767 });
  const optionsMobile = {
    indexAxis: 'y',
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'right',
      },
      title: {
        display: false,
        text: 'График',
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

  useEffect(() => {
    transactions.map((item, i) => {
      if (i === category) {
        const arr = Object.keys(item.description);
        setLabelsArr(arr);
      }
    });
    setCategory(chartsCategoryId);
    getNumbersForIndexAxis(transactions);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category, transactions, chartsCategoryId]);

  const getNumbersForIndexAxis = transactions => {
    transactions.map((item, i) => {
      if (i === category) {
        const arr = Object.values(item.description);
        setIndexAxisArr(arr);
      }
    });
  };

  const data = {
    labels,
    datasets: [
      {
        label: '',
        data: indexAxisArr,
        backgroundColor: ['rgba(255, 117, 29, 1)', 'rgba(255, 218, 192, 1)'],
        borderRadius: 10,
        barThickness: isMobile ? 20 : 45,
      },
    ],
  };

  return (
    <Container>
      {isMobile && <Bar options={optionsMobile} data={data} />}
      {isTabletOrDesktop && <Bar options={optionsDesktop} data={data} />}
    </Container>
  );
};
