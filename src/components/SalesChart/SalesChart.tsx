import * as React from 'react'
import s from './SalesChart.module.css'
import Chart from './Chart'
import {useSelector} from 'react-redux'
import {getProductSalesNumbers} from '../../utils/getProductDetails'
export interface SalesChartProps {}
const SalesChart: React.FunctionComponent<SalesChartProps> = () => {
  //TODO
  // extract two datasets[retailSales,wholesaleSales]
  const data = useSelector((state: any) => state.product)
  const datasets = getProductSalesNumbers(data.productData[0])
  if (!datasets) {
    return <span>Loading ...</span>
  }
  return (
    <div className={s.container}>
      <div>
        <h3>Retail Sales</h3>
      </div>
      <Chart dataSets={datasets} />
    </div>
  )
}

export default SalesChart
