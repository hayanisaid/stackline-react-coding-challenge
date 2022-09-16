import * as React from 'react'

export interface RowCellProps {
  rowName: string
}
const RowCell: React.FunctionComponent<RowCellProps> = ({rowName}) => {
  return <td>{rowName}</td>
}

export default RowCell
