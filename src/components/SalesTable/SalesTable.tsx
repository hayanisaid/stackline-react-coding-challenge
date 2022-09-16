import * as React from 'react'
import {useSelector} from 'react-redux'
import {SalesDataTypes} from '../../services/types'
import {getProductSalesNumbers} from '../../utils/getProductDetails'
import Loading from '../common/Loading'
import s from './SalesTable.module.css'
import RowCell from './RowCell'
import ColumnCell from './ColumnCell'
export interface SalesTableProps {
  // dataTable: SalesDataTypes
}
const SalesTable: React.FunctionComponent<SalesTableProps> = () => {
  const data = useSelector((state: any) => state.product)
  const dataTable = getProductSalesNumbers(data.productData[0])
  if (!dataTable) {
    return <Loading />
  }
  console.log(Object.keys(dataTable))
  const rows = Object.keys(dataTable)
  //let columns = Object.values(dataTable)
  let columns = data.productData[0].sales
  console.log(data.productData[0].sales)
  // columns.map((col) => {
  //   col.map((a: any) => {
  //     console.log(a)
  //   })
  // })

  return (
    <table className={s.container}>
      <thead>
        <tr>
          {rows.map((row, key) => (
            <RowCell rowName={row} key={`sales_row_cell_key_${key}`} />
          ))}
        </tr>
      </thead>
      <tbody>
        {/* {columns.map((col, key) => {
            return col.map((val: string, valKey: number) => <ColumnCell columnName={val} key={valKey} />)
          })} */}

        {columns.map((col: any, key: any) => {
          return (
            <tr className={s.rowContainer} key={`sales_table_columns_td_key_${key}`}>
              <ColumnCell columnName={col.retailSales} />
              <ColumnCell columnName={col.wholesaleSales} />
              <ColumnCell columnName={col.weekEnding} />
              <ColumnCell columnName={col.unitsSold} />
              <ColumnCell columnName={col.retailerMargin} />
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default SalesTable
