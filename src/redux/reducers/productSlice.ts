import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import {fetchData} from '../../services/api'
import {RootState} from '../store'
import {ResponseDataType} from '../../services/types'
interface iStateType {
  isLoading: Boolean
  error: string | null
  productData: ResponseDataType
}

export const fetchProduct = createAsyncThunk('product/fetchProductData', async () => {
  try {
    const data: ResponseDataType = await fetchData()
    return data
  } catch (error) {
    return Promise.reject(error)
  }
})

const initialState: iStateType = {
  isLoading: true,
  error: null,
  productData: []
}
export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    fetchProductData: (state) => {
      state.productData = []
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProduct.pending, (state, {payload}) => {
      state.isLoading = true
    })
    builder.addCase(fetchProduct.fulfilled, (state, {payload}) => {
      state.isLoading = true
      state.productData = payload
    })
  }
})
export const selectProduct = (state: RootState) => state.product
export default productSlice.reducer
