import * as React from 'react'
import s from './ProductTag.module.css'
interface ProductTagTypes {
  tagName?: string
}
const ProductTag: React.FunctionComponent<ProductTagTypes> = ({tagName}) => {
  return (
    <div className={s.container}>
      <span>{tagName}</span>
    </div>
  )
}

export default ProductTag
