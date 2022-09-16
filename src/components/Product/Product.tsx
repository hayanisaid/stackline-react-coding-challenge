import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import ProductCard from '../ProductCard'
import SalesChart from '../SalesChart'
import SalesTable from '../SalesTable'
import {fetchProduct} from '../../redux/reducers/productReducer'
import type {AppDispatch} from '../../redux/store'
import s from './Product.module.css'
import {getProductDetails} from '../../utils/getProductDetails'
const Product: React.FunctionComponent = () => {
  const dispatch = useDispatch<AppDispatch>()
  const data = useSelector((state: any) => state.product)
  useEffect(() => {
    dispatch(fetchProduct())
  }, [!data])

  const productDetails = getProductDetails(data.productData[0])
  return (
    <div className={s.container}>
      <ProductCard details={productDetails} />
      <div className={s.ProductDataContainer}>
        <SalesChart />
        <SalesTable />
      </div>
    </div>
  )
}

export default React.memo(Product)
