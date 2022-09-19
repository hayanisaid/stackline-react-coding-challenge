import * as React from 'react'
import s from './ProductCard.module.css'
import ProductTag from '../ProductTag'
import {ProductDetailsType} from '../../utils/getProductDetails'
import Loading from '../common/Loading'
interface ProductCardProps {
  details: ProductDetailsType
}
const ProductCard: React.FunctionComponent<ProductCardProps> = ({details}) => {
  if (!details) {
    return <Loading />
  }
  return (
    <div className={s.container}>
      <img height={200} width={200} src={details?.image} alt={details?.subtitle} />
      <h3 className={s.title}>{details?.title}</h3>
      <p className={s.description}>{details?.subtitle}</p>
      <div className={s.tagsContainer}>
        {details?.tags?.map((tag, key) => (
          <ProductTag key={`product_tag_${key}`} tagName={tag} />
        ))}
      </div>
    </div>
  )
}

export default ProductCard
