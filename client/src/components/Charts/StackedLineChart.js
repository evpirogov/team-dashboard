import React from "react";
import { Line } from 'react-chartjs-2';
import $ from './StackedLineChart.module.scss'


export const StackedLineChart = ({datasets, labels, chartName, stacked = false}) => {

  const params = {
    type: 'line',
    data:{
      datasets,
      labels
    },
    options: {
      legend: {
        position:'bottom',
        labels: {
          padding: 30
        }
      },
      elements: {
        line: {
          tension: 0
        },
        point:{
          radius: 0
        }
      },
      responsive: true,
      scales: {
        yAxes: [{
          stacked,
        }]
      },
      animation: {
        duration: 750,
      },
      tooltips: {
        mode: 'index',
      },
      order: 1
    }
  }

  return(
    <div className={$.chartContainer}>
      <p className={$.title}>{chartName}</p>
      <Line data={params.data} options={params.options}/>
    </div>
  )
}