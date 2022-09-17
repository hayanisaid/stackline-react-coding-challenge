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

export const getDataTableRowsKeys = (dataTable: Sales): string[] => {
  return Object.keys(dataTable)
}
type SortConfigType = {
  key: string
  direction: 'ascending' | 'descending' | string
}
type sortDataTableType = {
  data: Sales
  sortConfig: SortConfigType
}
export const sortDataTable = ({data, sortConfig}: sortDataTableType) => {
  const sortBy = sortConfig.key

  const sorted = Object.values(data).sort((a: any, b: any) => {
    if (sortConfig.direction === 'ascending') {
      return a[sortBy] - b[sortBy]
    } else {
      return b[sortBy] - a[sortBy]
    }
  })
  return sorted
}
