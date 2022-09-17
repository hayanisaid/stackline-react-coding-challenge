import * as React from 'react'
import s from './SalesTable.module.css'
export interface RowCellProps {
  rowName: string
  onClick: () => any
  arrowIcon: '↑' | '↓'
}
const RowCell: React.FunctionComponent<RowCellProps> = ({rowName, arrowIcon, onClick}) => {
  const upperCasedRowName = rowName.charAt(0).toUpperCase() + rowName.slice(1)
  return (
    <td onClick={() => onClick()}>
      <span> {upperCasedRowName}</span>
      <button className={s.sortButton}>{arrowIcon}</button>
    </td>
  )
}

export default RowCell
