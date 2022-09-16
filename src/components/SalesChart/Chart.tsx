import React from 'react'
import {Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend} from 'chart.js'
import {Line} from 'react-chartjs-2'
import {ChartDataSets} from '../../services/types'
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const
    },
    title: {
      display: false,
      text: 'Chart.js Line Chart'
    }
  }
}

const labels = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOv', 'DEC']

export interface ChartLineProps {
  dataSets: ChartDataSets
}
const ChartLine: React.FunctionComponent<ChartLineProps> = ({dataSets}) => {
  const data = {
    labels,
    datasets: [
      {
        label: 'Retails Sales',
        data: dataSets.retailsSales,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)'
      },
      {
        label: 'Whole Sales',
        data: dataSets.wholesaleSales,

        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)'
      }
    ]
  }

  return <Line options={options} data={data} />
}

export default ChartLine
