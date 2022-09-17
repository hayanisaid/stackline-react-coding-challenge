import * as React from 'react'
import {useSelector} from 'react-redux'
import {getDataTableRowsKeys, getProductSalesNumbers, sortDataTable} from '../../utils/getProductDetails'
import Loading from '../common/Loading'
import s from './SalesTable.module.css'
import RowCell from './RowCell'
import ColumnCell from './ColumnCell'
export interface SalesTableProps {}
const SalesTable: React.FunctionComponent<SalesTableProps> = () => {
  const data = useSelector((state: any) => state.product)
  const [sortConfig, setSortMethod] = React.useState({key: 'unitsSold', direction: 'ascending'})
  const dataTable = getProductSalesNumbers(data.productData[0])
  if (!dataTable) {
    return <Loading />
  }

  const rows = getDataTableRowsKeys(dataTable)
  let columns = sortDataTable({data: data.productData[0].sales, sortConfig})
  const descendingOrder = sortConfig.direction === 'descending'
  return (
    <table className={s.container}>
      <thead>
        <tr>
          {rows.map((row, key) => (
            <RowCell arrowIcon={sortConfig.direction === 'ascending' && sortConfig.key === row ? '↓' : '↑'} onClick={() => setSortMethod({key: row, direction: descendingOrder ? 'ascending' : 'descending'})} rowName={row} key={`sales_row_cell_key_${key}`} />
          ))}
        </tr>
      </thead>
      <tbody>
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
