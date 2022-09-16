import * as React from 'react'
import s from './SalesTable.module.css'
export interface RowCellProps {
  columnName: string | number
}
const ColumnCell: React.FunctionComponent<RowCellProps> = ({columnName}) => {
  return <td className={s.td}>{columnName}</td>
}

export default ColumnCell
