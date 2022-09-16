import type {Product} from '../services/types'
export interface ProductDetailsType {
  title: string
  image: string
  subtitle: string
  tags: string[]
}
export interface SalesNumbersType {}
export const getProductDetails = (product: Product): ProductDetailsType => {
  return {
    title: product?.title,
    image: product?.image,
    subtitle: product?.subtitle,
    tags: product?.tags
  }
}

interface Sales {
  retailsSales: number[]
  wholesaleSales: number[]
  weekEnding: string[]
  unitsSold: number[]
  retailerMargin: number[]
}
export const getProductSalesNumbers = (product: Product) => {
  if (!product) return
  console.log(product)
  const sales: Sales = {
    retailsSales: [],
    wholesaleSales: [],
    weekEnding: [],
    unitsSold: [],
    retailerMargin: []
  }
  for (let element of product?.sales) {
    sales.retailsSales.push(element.retailSales)
    sales.wholesaleSales.push(element.wholesaleSales)
    sales.weekEnding.push(element.weekEnding)
    sales.unitsSold.push(element.unitsSold)
    sales.retailerMargin.push(element.retailerMargin)
  }
  return sales
}
