import type {Product, Sale} from '../services/types'
export interface ProductDetailsType {
  title: string
  image: string
  subtitle: string
  tags: string[]
}
export interface SalesNumbersType {}
export const getProductDetails = (product: Product): ProductDetailsType => {
  //   const {title, image, subtitle, tags} = product
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
}
export const getProductSalesNumbers = (product: Product) => {
  if (!product) return
  console.log(product)
  const sales: Sales = {
    retailsSales: [],
    wholesaleSales: [],
    weekEnding: []
  }
  for (let element of product?.sales) {
    sales.retailsSales.push(element.retailSales)
    sales.wholesaleSales.push(element.wholesaleSales)
    sales.weekEnding.push(element.weekEnding)
  }
  return sales
}
